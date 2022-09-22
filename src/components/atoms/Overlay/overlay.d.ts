import { Dispatch } from 'react'

interface IBeforeCloseParent {
  timeToCloseParent: number
  theParentIsClosing: Dispatch<SetStateAction<boolean>>
}

export interface IOverlayProps {
  parentIsOpen: Dispatch<SetStateAction<boolean>>
  beforeCloseParent?: IBeforeCloseParent
}

export interface IRefOverlayProps {
  openComponent: () => void
  closeComponent: () => void
  isOpen: boolean
}
