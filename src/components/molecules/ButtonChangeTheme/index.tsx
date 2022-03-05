import * as S from './styles'
import React from 'react'
import Icons from 'components/atoms/Icons'
import { useChangeTheme } from 'hooks/useChangeTheme'

const ButtonChangeTheme = () => {
  const { toggleTheme, currentThemeIsDark } = useChangeTheme()

  const currentIcon = currentThemeIsDark ? 'lightOff' : 'lightOn'

  const ariaLabelResolved = currentThemeIsDark
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
