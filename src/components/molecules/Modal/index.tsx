import * as S from './styles'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { IModalProps, IRefModalProps } from './Modal'
import { IRefOverlayProps } from 'components/atoms/Overlay/overlay'
import Overlay from 'components/atoms/Overlay'
import Button from 'components/atoms/Button'
import theme from 'styles/theme'

const Modal: React.ForwardRefRenderFunction<IRefModalProps, IModalProps> = (
  { children },
  ref
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [componentIsClosing, setComponentIsClosing] = useState<boolean>(false)

  const refOverlay = useRef<IRefOverlayProps>(null)

  const onOpen = () => {
    setIsOpen(true)
    refOverlay.current?.onOpen()
  }
  const onClose = () => {
    setComponentIsClosing(true)
    refOverlay.current?.onClose()

    setTimeout(() => {
      setIsOpen(false)

      setComponentIsClosing(false)
    }, Number(theme.transition.modal.replace('ms', '')))
  }

  useImperativeHandle(ref, () => ({
    onOpen,
    onClose,
    isOpen
  }))

  return (
    <S.ModalWrapper
      isOpen={isOpen}
      componentIsClosing={componentIsClosing}
      data-component-modal
      role="presentation"
      aria-hidden={!isOpen}
    >
      <Overlay
        closeParent={setIsOpen}
        ref={refOverlay}
        beforeCloseParent={{
          beforeCloseParent: setComponentIsClosing,
          timeToClose: Number(theme.transition.modal.replace('ms', ''))
        }}
      />

      {isOpen && (
        <S.ContentWrapper data-content>
          <Button
            dataName="button-close-modal"
            ariaLabel="Close Modal"
            onClick={() => onClose()}
          >
            X
          </Button>
          {children}
        </S.ContentWrapper>
      )}
    </S.ModalWrapper>
  )
}

export default forwardRef(Modal)
