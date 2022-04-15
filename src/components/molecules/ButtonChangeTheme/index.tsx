// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import * as S from './styles'
import React, { useEffect, useState } from 'react'
import Icons from 'components/atoms/Icons'

const ButtonChangeTheme = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === 'dark'

  const toggleTheme = () => {
    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
  }

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  const currentIcon = isDarkMode ? 'lightOff' : 'lightOn'

  const ariaLabelResolved = isDarkMode
    ? { 'aria-label': 'Alterar o tema da pagina para claro' }
    : { 'aria-label': 'Alterar o tema da pagina para escuro' }

  return (
    <S.ButtonChangeThemeWrapper
      data-component-button-change-theme
      {...ariaLabelResolved}
      onClick={() => toggleTheme()}
    >
      <Icons
        icon={currentIcon}
        defaultStyle
        iconStyles={{
          size: '2.24',
          sizeInDesktop: '2.5'
        }}
      />
    </S.ButtonChangeThemeWrapper>
  )
}

export default ButtonChangeTheme
