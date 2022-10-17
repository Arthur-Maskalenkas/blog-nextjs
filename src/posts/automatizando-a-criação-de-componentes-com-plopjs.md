---
title: "Automatizando a criação de componentes com PlopJS - parte 1"
date: '2022-10-17 08:20'
tag: js

shortText: "Ja pensou em economizar horas criando estruturas de forma automatizada? Nesse post vamos ver como podemos fazer isso com o PlopJS."
---

### Introdução

Blz pessoal? Ultimamente tenho automatizado varias tarefas, desde estruturação de apps na empresa em que trabalho e até em projetos pessoais. Com ele ja criei automatização de contextos, componentes e etc...

### Instalando as libs utilizadas

O primeiro passo é instalar o plop, que é o framework que vai nos ajudar a automatizar as tarefas. Para isso, basta rodar o comando abaixo no terminal e criar um script chamado "generate" dentro do package.json para facilitar a execução do plop.

##### terminal
```bash
yarn add -D plop
```
##### package.json
```json
{
  "scripts": {
    "generate": "yarn plop --plopfile ./generator/index.js"
  }
}
```

### Criando a estrutura do plop
Com tudo instalado, vamos criar a estrutura inicial do para rodar o plop. Para isso, vou criar uma pasta chamada generator, e o restante das pastas vão estar no print abaixo:
![Estruturação da pasta](https://res.cloudinary.com/dezwlfeyb/image/upload/v1665998127/17-10-22-a1_qt9phx.png)


### Entendendo a estrutura criada

- generator/index.js: é o arquivo que vai chamar todos os geradores presentes em /generators (gerador de componente, por exemplo);
- generators: é a pasta aonde todos os geradores vão ficar. Hoje tem um gerador de componente, porém, amanhã pode ter um gerador de contexto, pagina, etc... Dividindo dessa forma fica mais fácil de crescer mais e mais futuramente;
- generators/component: é a pasta aonde toda a lógica do gerador vai ser montada;
- templates: é a pasta aonde todos os templates vão ficar, seguindo uma estrutura de pastas que sera definida em operations.js (porém, vou explicar mais a frente);

### Criando o gerador de componentes

Com a estrutura explicada, vamos criar o nosso gerador de componente. Para isso vamos começar adicionando 3 arquivos dentro da pasta generator/generators/component, sendo eles:

- index.js: é o arquivo que vai fazer o papel de 'controller'. Vai chamar e utilizar todos os objetos presentes em questions.js e operations.js;
- operations.js: arquivo em que vai definir as operações que serão feitas (add, etc...);
- questions.js: arquivo aonde as perguntas que serão feitas ao usuário vão ser definidas;

#### Após adicionar os arquivos, /component vai ficar assim:
![Estruturação da pasta](https://res.cloudinary.com/dezwlfeyb/image/upload/v1665998398/17-10-22-a2_slsurv.png)

### Desenvolvendo o controller/index.js

Normalmente costumo sempre começar pelo controller das operações. Defino quais comandos vou utilizar e depois acrescento as ações dentro de operations.js, formando uma espécie de "schema". Na minha cabeça fica mais fácil de compreender o que vai precisar ser feito. Exemplo:

- Preciso adicionar um componente, então sei que vou precisar de um add.component.index;
- Preciso adicionar um arquivo css, então vou precisar de um add.styles.index;

#### Mas por que add.xx.index?

Simplesmente para saber que aquele index vai gerar o template default, o principal. Conforme a aplicação vai crescendo, vai sendo necessário criar mais e mais variações. Hoje temos apenas a variação default de component, porém, amanhã pode ser que também tenha uma variação de pagina, por exemplo, e utilizando essa lógica será necessario apenas implementar um add.component.page apontando para o template do componente de pagina.

##### generator/generators/component/index.js
```js
const operations = require('./operations')

module.exports = (plop) => {
  plop.setGenerator('Geração de componentes', {
    description: 'Gere toda uma estrutura para desenvolver um componente.',

    actions: function () {
      // array de ações que serão tomadas.
      const actions = []

      const { add } = operations

      actions.push(add.component.index)
      actions.push(add.styles.index)

      return actions
    }
  })
}
```

### Desenvolvendo as questões/questions.js

É nesse arquivo que são definidas quais perguntas serão feitas para o usuário, e com qual nome a variável da resposta sera salva.

É importante deixar claro que tanto o operation.js quanto os templates vão utilizar dessa variável "nameComponent" que foi salva no objeto data para criar o componente mais a frente.

##### generator/generators/component/questions.js
```js
module.exports = {
  component: {
    name: {
      // o tipo da pergunta que vai ser feito (é possivel utilizar checkbox, list, etc)
      type: 'input',
      // o nome que vai ser salvo no objeto data e consequentemente utilizado em operations.js e nos templates
      name: 'nameComponent',
      // a mensagem que vai ser exibida para o usuário
      message: 'Qual o nome do componente?'
    }
  }
}
```

### Utilizando as questões criadas no gerador

Depois de desenvolvida as questões, é hora de fazer elas aparecem. Como? Simples, basta importar o arquivo questions.js e passar o objeto desenvolvido para dentro do prompt.

##### generator/generators/component/index.js
```js
const questions = require('./questions')
const operations = require('./operations')

module.exports = (plop) => {
  plop.setGenerator('Geração de componentes', {
    description: 'Gere toda uma estrutura para desenvolver um componente.',

    // aqui é onde as questões são chamadas, e consequentemente salvas no objeto data
    prompts: [
      questions.component.name
    ],

    actions: function () {
      const actions = []

      const { add } = operations

      actions.push(add.component.index)
      actions.push(add.styles.index)

      return actions
    }
  })
}
```

### Adicionando utilitário

Vamos adicionar um utilitário que vai facilitar bastante o uso de pastas dentro do operations.js

##### generator/generators/utils.js
```js
const path = require('path')

module.exports = (dirname) => {
  return {
    addDir: (file) => path.resolve(dirname, `../../templates/add/${file}`), // Apontando para o diretório onde estão os templates de adição
    rootDir: (file) => path.resolve(dirname, `../../../${file}`) // Apontando para o diretório raiz do projeto
  }
}
```



### Desenvolvendo as operações/operations.js

Em operations.js sera criada uma estrutura que foi definida no index.js (por exemplo, add.component.index). A ideia é sempre definir a estrutura vazia antes, para depois implementar as ações dentro dessa estrutura.

##### generator/generators/component/operations.js
```js
module.exports = {
  add: {
    component: {
      index: {
       
      }
    },


    styles: {
      index: {
        
      }
    },
  }
}
```

Depois de criar a estrutura vazia, é hora de implementar as ações dentro dos objetos vazios.

##### generator/generators/component/operations.js
```js
const utils = require('../utils')(__dirname)

const { addDir, rootDir } = utils

module.exports = {
  add: {
    component: {
      index: {
        type: 'add', // o tipo de ação que vai ser tomada (por isso esta dentro de add)
        // Definindo o caminho em que o template vai ser criado - exemplo: ('src/components/um-componente/index.tsx')
        // Utilizando a variável nameComponent que foi definida em questions.js
        path: rootDir('src/components/{{dashCase nameComponent}}/index.tsx'),
        templateFile: addDir('component/index.hbs') // Não existe ainda. Vai ser explicado assim que os templates forem desenvolvidos
      }
    },


    styles: {
      index: {
        type: 'add', // o tipo de ação que vai ser tomada (por isso esta dentro de add)
        // Definindo o caminho em que o template vai ser criado - exemplo: ('src/components/um-componente/index.tsx')
        // Utilizando a variável nameComponent que foi definida em questions.js
        path: rootDir('src/components/{{dashCase nameComponent}}/styles.css'), 
        templateFile: addDir('styles/index.hbs') // Não existe ainda. Vai ser explicado assim que os templates forem desenvolvidos
      }
    }

  }
}
```

### Desenvolvendo os templates

Os templates são utilizados pelas operações como podemos ver. Com o auxílio dos arquivos hbs (handlebars) podemos criar templates que vão puxar as variáveis definidas também em questions.js (nameComponent, por exemplo).

Para estruturar a pasta de templates, normalmente costumo seguir o fluxo que foi definido no "schema" de operations, por exemplo:

- A pasta para adicionar componentes sera add/component/index.hbs (igual é definido em operations.js - add.component.index)
- A pasta para adicionar estilos sera add/styles/index.hbs (igual é definido em operations.js - add.styles.index)

![Estrutura de pastas](https://res.cloudinary.com/dezwlfeyb/image/upload/v1665998158/17-10-22-b2_i5wrwq.png)

##### generator/templates/add/component/index.hbs
```js
import React from 'react'
import './styles.css'

// esta pegando a variável nameComponent que foi definida em questions.js. 
export const {{pascalCase nameComponent}} = () => {
  return (
    <div className={'container-{{dashCase nameComponent}}'}>
      {{dashCase nameComponent}}
    </div>
  )
}
```

##### generator/templates/add/styles/index.hbs
```css
.container-{{dashCase nameComponent}},
.container-{{dashCase nameComponent}} * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

### Adicionando o gerador de componentes ao controller de geradores

Agora vamos adicionar o gerador de componentes ao controller de geradores, presente em generator/index.js, e logo depois vamos passar o plop para esse gerador adicionado.

##### generator/index.js
```js
const componentGenerator = require('./generators/component')

module.exports = (plop) => {
  componentGenerator(plop)
}
```

### Executando o gerador

Para executar o gerador, basta rodar o comando:

```bash
yarn generate
```

Pronto, o gerador vai ser executado e vai criar os arquivos de acordo com o que foi definido em questions.js, operations.js e templates.

#### Exemplo de uso (no meu caso eu criei um componente chamado 'um componente aleatorio')
![Comando yarn generate sendo usado no termianl](https://res.cloudinary.com/dezwlfeyb/image/upload/v1665998158/17-10-22-b3_qzunz2.png)
![Componente criado após o comando ser rodado](https://res.cloudinary.com/dezwlfeyb/image/upload/v1665998158/17-10-22-b4_dnbopq.png)

##### src/components/um-componente-aleatorio/index.tsx
```js
import React from 'react'
import './styles.css'

export const UmComponenteAleatorio = () => {
  return (
    <div className={'container-um-componente-aleatorio'}>
      um-componente-aleatorio
    </div>
  )
}
```

##### src/components/um-componente-aleatorio/styles.css
```css
.container-um-componente-aleatorio,
.container-um-componente-aleatorio * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

### Recapitulando os passos

Após tudo isso, você pode criar qualquer tipo de gerador, basta seguir os passos:

- Criar um gerador, em generators/generator/nome-gerador/...
- Definir as operações utilizadas, em generator/generators/nome-gerador/index.js
- Criar as perguntas que serão feitas, em generator/generators/nome-gerador/questions.js
- Criar as ações das operações utilizadas, em generator/generators/nome-gerador/operations.js - e também os templates que serão utilizados
- Criar os templates que serão utilizados, em generator/templates/tipo-ação/nome-gerador/index.hbs
- Adicionar o gerador ao controller de geradores, em generator/index.js

### Conclusão

Ao invés de fazer tudo isso, você poderia simplesmente criar um componente sem gerador em questão de 5 minutos. Pode parecer que é muito trabalhoso e que não vale a pena, ja que desenvolver um gerador pode levar facilmente mais de uma hora, porém se você criar componentes constantemente, ainda mais em projetos grandes, vai perceber que vale muito a pena desenvolver geradores. Você vai economizar muito tempo, e junto com toda a equipe vai ter um código muito mais organizado e padronizado.

Caso você queira ver mais possibilidades, pode visitar o meu boilerplate [clicando aqui](https://github.com/Arthur-Maskalenkas/blog-nextjs). La eu desenvolvi gerador de contextos, atoms, molecules, utilizei o modulo de arquivos do JS para deixar mais dinâmico, e muito mais.

Tudo isso que foi descrito na postagem foi somente um pedaço do que esse framework possibilita. Futuramente pretendo criar mais alguma postagem sobre ele, porém enquanto esse dia não chega, recomendo [que leia a documentação oficial](https://plopjs.com/documentation/), pois ela é bem objetiva e clara.

Espero que tenham gostado do conteúdo, e qualquer duvida, podem me chamar nas minhas redes sociais.