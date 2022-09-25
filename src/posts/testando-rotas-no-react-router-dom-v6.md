---
title: "Testando rotas do React Router Dom v6 com Jest"
date: '2022-09-24 23:50:00'
tag: js

shortText: "Hoje vamos testar rotas do React Router Dom na versão v6 com Jest."
---

## Introdução

Blz pessoal? Faz um tempinho que eu estudei sobre testes e uma das dificuldades que eu encontrei na época era sobre a maneira que deveria ser feito os testes de rotas. Existem diversos artigos sobre, mas
a grande maioria é sobre como testar na V5, sendo que a maneira que se testa da V5 para a V6 é ligeiramente
diferente.

Eu vou focar somente em como testar rotas especificamente, porém se tiverem alguma duvida de como que funciona a estrutura de roteamento  recomendo que [leiam a documentação](https://reactrouter.com/en/v6.3.0/getting-started/overview) e se quiserem ver o codigo completo do projeto, [vocês podem acessar o repositorio](https://github.com/Arthur-Maskalenkas/post-blog-Testando-rotas-do-React-Router-Dom-v6-com-Jest)

## Estruturando o Menu

Como eu vou testar rotas e redirecionamentos de links, acabei escolhendo o menu para ser o autor dos testes. Ele vai ter links para home, login e signup.
Dentro da pasta components vai existir uma pasta chamada Menu, e dentro dela vai existir dois arquivos: index.tsx e test.tsx:


#### index.tsx
Eu vou criar uma estrutura basica para roteamento utilizando  o componente Link do react-router-doml

```javascript

import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  )
}

```

#### test.tsx
Primeiro criamos toda a estrutura inicial dos testes, encapsulando a renderização do menu em um SUT e chamando ela em cada teste que sera feito futuramente.

```javascript

import React from 'react'
import { render, screen, RenderResult } from '@testing-library/react'
import { Menu } from '.'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(
      <Menu />
  )

  return {
    sut
  }
}

describe('Menu', () => {
  test('Should go to Signup page if Signup link is clicked', () => {
    makeSut()
  })
})

```

## Testando o Menu

Criada a estrutura do menu, agora é hora de testar o roteamento, e para isso eu vou precisar de uma lib chamada 'history'.
Essa lib history vai nos disponibilizar uma função chamada "createMemoryHistory" que vai ser acoplada ao mock do Router e vai nos permitir verificar em qual rota estamos, e para instalar ela é bem simples, basta rodar o comando yarn add history.

#### test.tsx
```javascript

import React from 'react'
import { render, screen, RenderResult } from '@testing-library/react'
import { Menu } from '.'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

// criando o spy do history. Inicializando a rota no index, porém se fosse preciso eu poderia iniciar em qualquer outra rota, como '/login' por exemplo.
const history = createMemoryHistory({ initialEntries: ['/'] })

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(
    // mokando o router e implementando o history dentro dele para que seja possivel verificar em qual rota estamos.
    <Router location={history.location} navigator={history}>
      <Menu />
    </Router>
  )

  return {
    sut
  }
}

describe('Menu', () => {
  test('Should go to Signup page if Signup link is clicked', () => {
    makeSut()

    const signupLink = screen.getByRole('link', { name: /signup/i })

    signupLink.click()

    // Verificando se o history esta indo para a pagina correta
    expect(history.location.pathname).toBe('/signup')
  })

  test('Should go to Login page if Login link is clicked', () => {
    makeSut()

    const loginLink = screen.getByRole('link', { name: /login/i })

    loginLink.click()

    expect(history.location.pathname).toBe('/login')
  })

  test('Should go to Home page if Home link is clicked', () => {
    makeSut()

    const homeLink = screen.getByRole('link', { name: /home/i })

    homeLink.click()

    expect(history.location.pathname).toBe('/')
  })
})


```

## Conclusão

Espero que tenham gostado do post e que tenha sido útil para vocês! Qualquer duvida não hesite em me chamar nas redes sociais.
