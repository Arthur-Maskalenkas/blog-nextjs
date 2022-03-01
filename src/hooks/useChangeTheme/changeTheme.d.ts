import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface IChangeThemeProps {
  currentThemeIsDark: boolean
  toggleTheme: () => void
}

export interface IChangeThemeProviderProps {
  children: ReactNode
  currentThemeIsDark: boolean
  toggleTheme: Dispatch<SetStateAction<boolean>>
}
