---
title: "Criando props condicionais no ReactJS"
date: '2022-05-08 17:35:00'
tag: js

shortText: "Como incluir props condicionais no ReactJS"
---


### Introdução

Opa, blz? Ja passou pela situação de ter que colocar mais de um return para um componente por conta que ele pode ou não receber x props? Se não passou, eu ja passei, e isso deixou o codigo muito poluido, e lembrando disso eu decidi compartilhar e qual foi a maneira que eu encontrei de resolver isso sem ter que retrabalhar completamente as props recebidas e a lógica do componente.

É bem simples para falar a verdade, e evita muitas dores de cabeça em determinadas situações.

### Contexto que vamos criar para se utilizar as props condicionais

Para criar um contexto para o artigo vamos supor que você queira criar um input generico, e que ele pode ser usado em diversos lugares da sua aplicação, porém contendo a seguinte lógica dentro dele:

- O input pode ou não ter um label

Bem simples né? Sem dor de cabeça. Tem partes da aplicação em que eu vou querer que o input tenha um label e partes da aplicação em que eu vou querer só o input, sem o label.

Não sei se você se lembra, mas um label e um input são conectados através do atributo ID do input e htmlFor do label [e caso você não se lembre você pode ler mais sobre ele nesse artigo](https://css-tricks.com/html-inputs-and-labels-a-love-story/#:~:text=There%20are%20two%20ways%20to,input%20and%20holding%20its%20hand).

Com isso em mente, vamos criar um componente input super simples que visa renderizar o label caso seja passada uma props label.

### Lembrando que em ambos os casos, eu não vou mudar nenhuma props passada. Para os dois casos a seguir eu vou renderizar um input passando label e outro input sem passar label, ficando da seguinte forma:

```javascript

import Input from "./components/input"

function App() {
  return (
    <div>
      <Input label="Email" name="email"/>
      <Input name="password"/>
    </div>
  )
}

export default App


```

### Criando o input sem props condicionais

### Input

```javascript

interface InputProps {
  label?: string
  name: string
}

const Input = ({label,name}:InputProps) => {
  return (
    <div className="Wrapper">
      {!!label && <label htmlFor={name}>{label}</label>}
      <input type="text" name={name} id={name} />
    </div>
  )
}

export default Input

```

### Renderização do input
![Input renderizado](https://res.cloudinary.com/dezwlfeyb/image/upload/v1652033438/Blog/sem-condicional_nxlxj1.png)

Até então esta funcionando tudo perfeitamente... Porém no segundo input você percebe que o id do input esta sendo usado para... nada? é ai que entram as props condicionais. Eu quero que somente quando for passado um label como props o atributo id exista dentro do input. 

### Criando o input com as props condicionais

### Input

```javascript

interface InputProps {
  label?: string
  name: string
}

const Input = ({label,name}:InputProps) => {
  return (
    <div className="Wrapper">
      {!!label && <label htmlFor={name}>{label}</label>}
      {/* Se label existir, crie um atributo chamado id com o valor da name */}
      <input type="text" name={name} {...(label && {id: name} )} />
    </div>
  )
}

export default Input

```

### Renderização do input
![Input renderizado](https://res.cloudinary.com/dezwlfeyb/image/upload/v1652033363/Blog/condicional_vknrsk.png)

E pronto. O atributo id só vai existir caso a props label seja passada. Uma prova é que no segundo input não existe id ja que não foi passado um label como props.

---

Caso você queira organizar um pouco mais da para fazer da seguinte maneira:

```javascript

interface InputProps {
  label?: string
  name: string
}

const Input = ({label,name}:InputProps) => {
  // Se label existir, crie um atributo chamado id com o valor da name
  const conditionalPropsInput  = label && {id: name}

  return (
    <div className="Wrapper">
      {!!label && <label htmlFor={name}>{label}</label>}
      {/* Espalhando as props */}
      <input type="text" name={name} {...conditionalPropsInput} />
    </div>
  )
}

export default Input

```

### Conclusão

O seu uso é bem raro e acredito que em 90% dos casos de uso é possivel fazer de uma maneira mais limpa isso, seguindo outra metodologia ou refatorando o componente, porém conhecimento nunca é demais.