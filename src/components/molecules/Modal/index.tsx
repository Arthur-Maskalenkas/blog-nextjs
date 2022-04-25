import * as S from './styles'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { IModalProps, IRefModalProps } from './Modal'

const Modal: React.ForwardRefRenderFunction<IRefModalProps, IModalProps> = (
  { children },
  ref
) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  useImperativeHandle(ref, () => ({
    onOpen,
    onClose,
    isOpen
  }))

  return (
    <S.ModalWrapper isOpen={isOpen} data-component-modal>
      <S.Overlay data-overlay aria-hidden={!isOpen} />

      <S.ContentWrapper role="presentation" aria-hidden={!isOpen} data-content>
        {children}
      </S.ContentWrapper>
    </S.ModalWrapper>
  )
}

export default forwardRef(Modal)
