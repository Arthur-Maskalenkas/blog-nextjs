import * as S from './styles'
import React, { forwardRef, useImperativeHandle, useState } from 'react'

import { IOverlayProps, IRefOverlayProps } from './overlay'

const Overlay: React.ForwardRefRenderFunction<
  IRefOverlayProps,
  IOverlayProps
> = ({ parentIsOpen, beforeCloseParent }, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openComponent = () => setIsOpen(true)
  const closeComponent = () => setIsOpen(false)

  useImperativeHandle(ref, () => ({
    openComponent,
    closeComponent,
    isOpen
  }))

  const overlayHandleClick = () => {
    beforeCloseParent?.theParentIsClosing(true)
    closeComponent()
    setTimeout(() => {
      parentIsOpen(false)
      beforeCloseParent?.theParentIsClosing(false)
    }, beforeCloseParent?.timeToCloseParent ?? 0)
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
