import { ReactNode } from 'react'

export interface IMenuMobileProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export interface IMenuMobileProviderProps {
  children: ReactNode
}
