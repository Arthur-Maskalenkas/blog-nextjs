import { ReactNode } from 'react'

export interface IMenuMobileProps {
  isOpen: boolean
  changeMenuVisibility: (msToChangeStateOnClose?: number) => void
}

export interface IMenuMobileProviderProps {
  children: ReactNode
}
