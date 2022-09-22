import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import * as S from './styles'
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

  const timeInMsDurationAnimation = Number(
    theme.transition.modal.replace('ms', '')
  )

  const openComponent = () => {
    setIsOpen(true)
    refOverlay.current?.openComponent()
  }
  const closeComponent = () => {
    setComponentIsClosing(true)
    refOverlay.current?.closeComponent()

    setTimeout(() => {
      setIsOpen(false)

      setComponentIsClosing(false)
    }, timeInMsDurationAnimation)
  }

  useImperativeHandle(ref, () => ({
    openComponent,
    closeComponent,
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
        parentIsOpen={setIsOpen}
        ref={refOverlay}
        beforeCloseParent={{
          theParentIsClosing: setComponentIsClosing,
          timeToCloseParent: timeInMsDurationAnimation
        }}
      />

      <S.ContentWrapper data-content>
        <h2 data-title-modal>Tags</h2>

        <Button
          dataName="button-close-modal"
          ariaLabel="Close Modal"
          onClick={() => closeComponent()}
        >
          X
        </Button>
        {children}
      </S.ContentWrapper>
    </S.ModalWrapper>
  )
}

export default forwardRef(Modal)
