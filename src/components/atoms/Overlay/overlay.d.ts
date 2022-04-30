import { Dispatch } from 'react'

export interface IOverlayProps {
  closeParent: Dispatch<SetStateAction<boolean>>
}

export interface IRefOverlayProps {
  onOpen: () => void
  onClose: () => void
  isOpen: boolean
}
