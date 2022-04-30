import { ReactNode } from 'react'

export interface IModalProps {
  children: ReactNode
}

export interface IRefModalProps {
  openComponent: () => void
  closeComponent: () => void
  isOpen: boolean
}
