import * as S from './styles'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { IModalProps, IRefModalProps } from './Modal'
import { IRefOverlayProps } from 'components/atoms/Overlay/overlay'
import Overlay from 'components/atoms/Overlay'

const Modal: React.ForwardRefRenderFunction<IRefModalProps, IModalProps> = (
  { children },
  ref
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const refOverlay = useRef<IRefOverlayProps>(null)

  const onOpen = () => {
    setIsOpen(true)
    refOverlay.current?.onOpen()
  }
  const onClose = () => {
    setIsOpen(false)
    refOverlay.current?.onClose()
  }

  useImperativeHandle(ref, () => ({
    onOpen,
    onClose,
    isOpen
  }))

  return (
    <S.ModalWrapper
      isOpen={isOpen}
      data-component-modal
      role="presentation"
      aria-hidden={!isOpen}
    >
      <Overlay closeParent={setIsOpen} ref={refOverlay} />
      <S.ContentWrapper data-content>{children}</S.ContentWrapper>
    </S.ModalWrapper>
  )
}

export default forwardRef(Modal)
