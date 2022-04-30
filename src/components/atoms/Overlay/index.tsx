import * as S from './styles'
import React, { forwardRef, useImperativeHandle, useState } from 'react'

import { IOverlayProps, IRefOverlayProps } from './overlay'

const Overlay: React.ForwardRefRenderFunction<
  IRefOverlayProps,
  IOverlayProps
> = ({ closeParent }, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  useImperativeHandle(ref, () => ({
    onOpen,
    onClose,
    isOpen
  }))

  const overlayHandleClick = () => {
    closeParent(false)
    onClose()
  }

  return (
    <S.OverlayWrapper
      isOpen={isOpen}
      data-component-overlay
      onClick={() => overlayHandleClick()}
    />
  )
}

export default forwardRef(Overlay)
