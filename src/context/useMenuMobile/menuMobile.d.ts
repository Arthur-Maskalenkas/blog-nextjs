import { ReactNode } from 'react'

export interface IMenuMobileProps {
  isOpen: boolean
  changeMenuVisibility: (isOpen: boolean) => void
}

export interface IMenuMobileProviderProps {
  children: ReactNode
}
