import * as S from './styles'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { IModalProps, IRefModalProps } from './Modal'

const Modal: React.ForwardRefRenderFunction<IRefModalProps, IModalProps> = (
  { children },
  ref
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  useImperativeHandle(ref, () => ({
    onOpen,
    onClose,
    isOpen
  }))

  const overlayHandleClick = () => {
    onClose()
  }

  return (
    <S.ModalWrapper isOpen={isOpen} data-component-modal>
      <S.Overlay
        data-overlay
        aria-hidden={!isOpen}
        onClick={() => overlayHandleClick()}
      />

      <S.ContentWrapper role="presentation" aria-hidden={!isOpen} data-content>
        {children}
      </S.ContentWrapper>
    </S.ModalWrapper>
  )
}

export default forwardRef(Modal)
