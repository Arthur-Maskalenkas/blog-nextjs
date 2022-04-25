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

  const resolveClassIfIsOpen = isOpen
    ? { 'data-modal-is-open': true }
    : { 'data-modal-is-close': true }

  return (
    <S.ModalWrapper data-component-modal {...resolveClassIfIsOpen}>
      {children}
    </S.ModalWrapper>
  )
}

export default forwardRef(Modal)
