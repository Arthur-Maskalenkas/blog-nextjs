import { ReactNode } from 'react'

export interface IMenuMobileProps {
  isOpen: boolean
  changeMenuVisibility: () => void
}

export interface IMenuMobileProviderProps {
  children: ReactNode
}
