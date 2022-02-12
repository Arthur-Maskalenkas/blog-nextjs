import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode

  ariaLabel?: string
  dataName?: string
}
