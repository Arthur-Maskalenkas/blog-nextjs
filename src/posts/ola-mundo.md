---
title: Criando o efeito da chuva do Matrix com JavaScript puro
date: '2022-02-26 22:50:35'
tag: js

shortText: Aprenda como criar esse efeito em poucas linhas manipulando o Canvas
---


## Introdução

Fala pessoal, faz um bom tempo que não escrevo no blog e um dos motivos é que eu estava viajando em NY e Vancouver, se quiser ver umas fotinhas de lá, [só me seguir no IG](https://www.instagram.com/will_justen/). 

Esse post eu planejava fazer até como um vídeo, mas infelizmente eu acabei contraindo Covid assim que cheguei no Brasil, então estou isolado num cômodo só da casa, ou seja, sem um microfone decente para gravar. E como estou entediado, vou fazer em post agora e depois qualquer coisa eu faço em vídeo se vocês quiserem.

Nesse post eu serei bem detalhista e farei bem passo-a-passo, já que muita gente pode não estar ambientada com o conceito de Canvas e quero também fazer algo onde qualquer iniciante consiga acompanhar. Minha dica é que você vá fazendo junto comigo, garanto que será uma experiência divertida e interessante.

E claro, para continuar com a tradição das músicas nos posts, eu estou ouvindo [Post Malone](https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60?si=jKgOAYKlTmmYLihN1iebMQ), que andei ouvindo bastante na viagem.

## Como é a chuva do Matrix e Demo

Antes de começarmos o projeto, precisamos falar sobre o que é né? Bom, se você nunca viu Matrix <del>pode se retirar</del>, eles basicamente brincam com a ideia de que o mundo em que vivemos nada mais é que um código de computador. Em alguns momentos do filme, eles mostram esses "códigos", que muito depois foi descoberto que [eram receitas de Sushi](https://nerdist.com/article/the-matrix-code-sushi-recipe/) usando hiragana, katakana, kanjis e alguns outros símbolos. Esses símbolos por sua vez vão caindo pela tela, fazendo o famoso efeito da "chuva do Matrix". 

Se você nunca viu esse efeito, [segue a demo do projeto](https://labs.willianjusten.com.br/matrix-rain).

## Inicializando o projeto

Nesse projeto não utilizaremos React, Next, SVG, nada nada, será um bom e velho `index.html` e um pouquinho de JavaScript. Então segue abaixo o esqueleto base:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Matrix Rain</title>
</head>
<body>

</body>
</html>
```

