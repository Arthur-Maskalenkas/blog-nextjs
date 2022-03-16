import { createContext, useContext, useState } from 'react'
import { IMenuMobileProps, IMenuMobileProviderProps } from './menuMobile'

/**
 *
 * * ASsiniatura dos metodos/inicio *
 *
 */

export const MenuMobileDefaultValues: IMenuMobileProps = {
  isOpen: false,
  changeMenuVisibility: () => null
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

export const MenuMobileContext = createContext<IMenuMobileProps>(
  MenuMobileDefaultValues
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

const MenuMobileProvider = ({ children }: IMenuMobileProviderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  /*
   * Disponiblizando as funções
   * */
  const changeMenuVisibility = (isOpen: boolean) => {
    setMenuIsOpen(isOpen)
  }

  return (
    <MenuMobileContext.Provider
      value={{ isOpen: menuIsOpen, changeMenuVisibility: changeMenuVisibility }}
    >
      {children}
    </MenuMobileContext.Provider>
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

const useMenuMobile = () => useContext(MenuMobileContext)

/**
 *
 * * --- --- --- --- criando o contexto --- --- --- --- *
 *
 */

export { MenuMobileProvider, useMenuMobile }
