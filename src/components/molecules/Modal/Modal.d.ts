import { ReactNode } from 'react'

export interface IModalProps {
  children: ReactNode
}

export interface IRefModalProps {
  onOpen: () => void
  onClose: () => void
  isOpen: boolean
}
