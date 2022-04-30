import { Dispatch } from 'react'

export interface IOverlayProps {
  parentIsOpen: Dispatch<SetStateAction<boolean>>
  beforeCloseParent?: IBeforeCloseParent
}

interface IBeforeCloseParent {
  timeToCloseParent: number
  theParentIsClosing: Dispatch<SetStateAction<boolean>>
}

export interface IRefOverlayProps {
  openComponent: () => void
  closeComponent: () => void
  isOpen: boolean
}
