---
title: "Revertendo um git reset hard"
date: '2022-04-23 13:50:00'
tag: git

shortText: "Utilizou git reset hard sem querer? Vamos reverter isso."
---


## Introdução

Recentemente eu passei pela dor de cabeça de dar um git reset em uns 5 commits anteriores, e isso é uma coisa que eu não desejo ao meu pior inimigo. No total, eu teria perdido pelo menos umas 2 horas facilmente, porém pesquisando maneiras de recuperar eu encontrei um comando super simples mas super poderoso: o git reflog.

## Afinal, qual a diferença do git reflog e do git log?

Bom, basicamente o git log mostra apenas a arvore que a gente tem atualmente de commits, ja o git reflog mostra todas as referencias de trabalho do git.

"Como assim?" - é simples, se a gente fazer um merge de outra branch, ou até mesmo mudar de branch, o git reflog vai guardar uma referencia dessa ação e vai incluir uma hash, de modo que seja possivel recuperar mais tarde.

Começa a ficar interessante quando você descobre que até mesmo quando você reseta um commit, é guardado uma hash dessa ação de modo que seja possivel reverter até mesmo o reset hard, e é isso que eu vou ensinar hoje.

## Revertendo um reset --hard

Como esse é um guia focado em como reverter um git reset --hard, eu vou criar os arquivos via terminal e explicar cada ação.

Primeiramente eu vou criar 2 arquivos com o comando echo, e assim que eu finalizar a criação de cada um desses arquivos, eu vou dar um commit.

```git
maska@DESKTOP-8N7J0F2 MINGW64 ~/Desktop/reset-hard
$ git init
Initialized empty Git repository in C:/Users/maska/Desktop/reset-hard/.git/

maska@DESKTOP-8N7J0F2 MINGW64 ~/Desktop/reset-hard (master)
$ echo "conteudo 1" > arquivo-1

maska@DESKTOP-8N7J0F2 MINGW64 ~/Desktop/reset-hard (master)
$ git add arquivo-1
The file will have its original line endings in your working directory

maska@DESKTOP-8N7J0F2 MINGW64 ~/Desktop/reset-hard (master)
$ git commit -m "arquivo 1 adicionado"
[master (root-commit) e05e114] arquivo 1 adicionado
 1 file changed, 1 insertion(+)
 create mode 100644 arquivo-1

maska@DESKTOP-8N7J0F2 MINGW64 ~/Desktop/reset-hard (master)
$ echo "conteudo 2" > arquivo-2

maska@DESKTOP-8N7J0F2 MINGW64 ~/Desktop/reset-hard (master)
$ git add arquivo-2
The file will have its original line endings in your working directory

maska@DESKTOP-8N7J0F2 MINGW64 ~/Desktop/reset-hard (master)
$ git commit -m "arquivo 2 adicionado"
[master 371cc55] arquivo 2 adicionado
 1 file changed, 1 insertion(+)
 create mode 100644 arquivo-2



```

Após isso, a minha arvore de commits esta assim:


```git
commit 371cc555540dba24f88e4dcedbe05e13aa24d973 (HEAD -> master)
Author: Maskalenkas <maskalenkasdoc@gmail.com>
Date:   Sat Apr 23 15:18:35 2022 -0300

    arquivo 2 adicionado

commit e05e1143358f04cece07e3e87a23977953824269
Author: Maskalenkas <maskalenkasdoc@gmail.com>
Date:   Sat Apr 23 15:18:14 2022 -0300

    arquivo 1 adicionado

```

Caso eu digite sem querer git reset --hard e05e1143358f04cece07e3e87a23977953824269 (sim, realmente ocorreu isso comigo), o commit "arquivo 2 adicionado" vai deixar de existir no git log, restando apenas o commit "arquivo 1 adicionado"

```git
maska@DESKTOP-8N7J0F2 MINGW64 ~/Desktop/reset-hard (master)
$ git reset --hard e05e1143358f04cece07e3e87a23977953824269
HEAD is now at e05e114 arquivo 1 adicionado

maska@DESKTOP-8N7J0F2 MINGW64 ~/Desktop/reset-hard (master)
$ git log
commit e05e1143358f04cece07e3e87a23977953824269 (HEAD -> master)
Author: Maskalenkas <maskalenkasdoc@gmail.com>
Date:   Sat Apr 23 15:18:14 2022 -0300

    arquivo 1 adicionado

```

É agora que vem a magica. Atraves do git reflog eu consigo ter o log de cada ação do git

```git
maska@DESKTOP-8N7J0F2 MINGW64 ~/Desktop/reset-hard (master)
$ git reflog
e05e114 (HEAD -> master) HEAD@{0}: reset: moving to e05e1143358f04cece07e3e87a23977953824269
371cc55 HEAD@{1}: commit: arquivo 2 adicionado
e05e114 (HEAD -> master) HEAD@{2}: commit (initial): arquivo 1 adicionado

```

### Com esse log na tela é possivel perceber que

- eu primeiro comitei o arquivo 1
- logo depois eu comitei o arquivo 2
- e por ultimo eu dei um reset para o commit "arquivo 1 adicionado"

Com esse log na mão fica muito facil reverter essa situação. Basta eu pegar o hash antes da tragédia acontecer ( no caso o hash 371cc55 ) e aplicar um git reset --hard nessa hash

```git
maska@DESKTOP-8N7J0F2 MINGW64 ~/Desktop/reset-hard (master)
$ git reset --hard 371cc55
HEAD is now at 371cc55 arquivo 2 adicionado

```

Caso eu inspecione o git log eu vou conseguir verificar que o commit de fato voltou

```git
maska@DESKTOP-8N7J0F2 MINGW64 ~/Desktop/reset-hard (master)
$ git log
commit 371cc555540dba24f88e4dcedbe05e13aa24d973 (HEAD -> master)
Author: Maskalenkas <maskalenkasdoc@gmail.com>
Date:   Sat Apr 23 15:18:35 2022 -0300

    arquivo 2 adicionado

commit e05e1143358f04cece07e3e87a23977953824269
Author: Maskalenkas <maskalenkasdoc@gmail.com>
Date:   Sat Apr 23 15:18:14 2022 -0300

    arquivo 1 adicionado

```

## Conclusão

Não é magica, é o git reflog em ação. Também é possivel recuperar branchs deletadas localmente, porém isso é assunto para outro post.