---
title: "Utilizando o hook useImperativeHandle"
date: '2022-05-02 08:54:00'
tag: js

shortText: "Ja pensou em passar funções do componente filho para o componente pai? Isso é totalmente possivel."
---


## Introdução

Imagina só ter que criar um estado 'isOpen' a cada vez que for instanciar um modal e passar esse estado para dentro do mesmo. Cansativo né?

Hoje eu vou apresentar o hook useImperativeHandle que visa acabar com a duplicação de codigo ou as famosas gambiarras na hora de se criar um componente filho que precisa de alguma forma ser manipulado pelo componente pai.

### Qual a diferença entre criar um modal da forma tradicional ou criar da forma utilizando o hook?

Simples, com o hook toda a responsabilidade de abrir/fechar o modal e o seu estado ficam atrelados ao componente filho, fornecendo algumas funções ao componente pai para que ele use como bem entender, deixando a manipulação a partir do componente pai bem mais facil.

## Criando o modal da maneira tradicional

Bom, normalmente você quer ter controle total do modal e por isso desenvolve um componente bem basico chamado modal que só recebe uma props de isOpen, e caso seja verdadeiro, renderiza o componente. Todo o controle é feito através do componente pai, e dentro dele possui um estado 'isOpen' e funções para alternar esse estado.

### Diagrama
![diagrama sem o uso do hook](https://res.cloudinary.com/dezwlfeyb/image/upload/v1651492327/Blog/diagrama-sem-o-uso-do-imperative-hook.drawio_2_ytckbh.png)

### Codigo

Componente Pai
```javascript
import { useState } from "react"
import Modal from "../Modal"

export const AnyComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  
  return (
    <div>
      <div>
        <button onClick={() => handleOpen()}>Open modal</button>
        <button onClick={() => handleClose()}>Close modal</button>
      </div>

      <Modal isOpen={isOpen}/>
    </div>
  )
}

export default AnyComponent

```

---

Componente Filho
```javascript
interface ModalProps {
  isOpen: boolean
}

export const Modal = ({isOpen}:ModalProps) => {
  return (
    <>
      {isOpen && (
        <div>
          <p>Conteudo do modal</p>
        </div>
      )}
    </>
  )
}

export default Modal

```

---

Resultado:
![Abrindo e fechando o modal](https://res.cloudinary.com/dezwlfeyb/image/upload/v1651488549/Blog/GIF_02-05-2022_07-37-00_jdtysv.gif)

Perceba que a cada vez que eu for instanciar o modal, eu no minimo vou ter que criar um estado isOpen de dentro do componente pai caso eu queira manipular o filho de alguma forma.

## Criando o modal utilizando o hook useImperativeHandle

Com o hook useImperativeHandle a lógica acaba mudando um pouco. Agora todas as funções de abrir/fechar vão estar presentes no componente filho, junto com o estado. O unico trabalho do componente pai sera de criar uma ref e passar essa ref para o componente filho. Depois de feito isso, o componente pai ja consegue utilizar as funções passadas via hook useImperativeHandle pelo componente filho sem problema algum.


### Diagrama

![diagrama com o uso do hook](https://res.cloudinary.com/dezwlfeyb/image/upload/v1651492408/Blog/diagrama-com-o-uso-do-imperative-hook.drawio_1_jahb7f.png)

### Codigo

Componente Pai
```javascript
import { useRef } from "react"
import Modal, { RefModalProps } from "../Modal"

export const AnyComponent = () => {
   // Criando a ref que vai ser usada para manipular as funções expostas pelo Modal
   const refModal = useRef<RefModalProps>(null);

   // Manipulando as funções expostas pelo componente filho
   const handleClose = () => {
     refModal.current?.closeComponent();
   };
 
   const handleOpen = () => {
     refModal.current?.openComponent();
   };
 
   return (
     <>
       <div>
         <button onClick={() => handleOpen()}>Open modal</button>
         <button onClick={() => handleClose()}>Close modal</button>
       </div>
       {/* Fazendo com que o Modal receba a ref criada */}
       <Modal ref={refModal} />
     </>
   );
}

export default AnyComponent

```

---

Componente Filho
```javascript
import React, { forwardRef, useImperativeHandle, useState } from 'react';

// Lembrar de exportar ja que sera usado no componente pai para definir o tipo da ref
export interface RefModalProps {
  openComponent: () => void;
  closeComponent: () => void;
}

// Fazendo com que o componente aceite receber ref
// primeiro parametro é o tipo da ref (quais as funções que serão expostas para o componente filho) e o segundo parametro é o tipo do componente
const Modal: React.ForwardRefRenderFunction<RefModalProps, any> = (
  props,
  ref
) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // Criando as funções que vão ser expostas para o componente pai (estão presentes na interface logo acima)
  const openComponent = () => setIsOpen(true);
  const closeComponent = () => setIsOpen(false);

  // Expondo as funções criadas para o componente pai
  useImperativeHandle(ref, () => ({
    openComponent,
    closeComponent
  }));

  return <>{!!isOpen && <p>Conteudo do modal</p>}</>;
};

export default forwardRef(Modal);

```

---

Resultado:
![Abrindo e fechando o modal](https://res.cloudinary.com/dezwlfeyb/image/upload/v1651488549/Blog/GIF_02-05-2022_07-37-00_jdtysv.gif)

## Conclusão

O seu uso não é uma bala de prata, pode haver  casos que seja mais viavel utilizar de outras soluções, porém isso é só uma demonstração de uma das infinitas possibilidades de se utilizar esse hook.