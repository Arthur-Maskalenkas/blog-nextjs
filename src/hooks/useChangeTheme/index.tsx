import { createContext, useContext } from 'react'
import { IChangeThemeProps, IChangeThemeProviderProps } from './changeTheme'

/**
 *
 * * ASsiniatura dos metodos/inicio *
 *
 */

export const ChangeThemeDefaultValues: IChangeThemeProps = {
  currentThemeIsDark: true,
  toggleTheme: () => null
}

/**
 *
 * * --- --- --- --- ASsiniatura dos metodos/inicio --- --- --- --- *
 *
 */

/**
 *
 * * Criando o contexto *
 *
 */

export const ChangeThemeContext = createContext<IChangeThemeProps>(
  ChangeThemeDefaultValues
)

/**
 *
 * * --- --- --- --- Criando o contexto --- --- --- --- *
 *
 */

/**
 *
 * * Criando o provider *
 *
 */

const ChangeThemeProvider = ({
  children,
  currentThemeIsDark,
  toggleTheme
}: IChangeThemeProviderProps) => {
  const toggleThemeContext = () => {
    toggleTheme(!currentThemeIsDark)
  }

  return (
    <ChangeThemeContext.Provider
      value={{ currentThemeIsDark, toggleTheme: toggleThemeContext }}
    >
      {children}
    </ChangeThemeContext.Provider>
  )
}

/**
 *
 * * --- --- --- --- Criando o provider --- --- --- --- *
 *
 */

/**
 *
 * * criando o contexto *
 *
 */

const useChangeTheme = () => useContext(ChangeThemeContext)

/**
 *
 * * --- --- --- --- criando o contexto --- --- --- --- *
 *
 */

export { ChangeThemeProvider, useChangeTheme }
