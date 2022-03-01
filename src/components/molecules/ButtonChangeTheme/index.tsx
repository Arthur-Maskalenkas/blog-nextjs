import * as S from './styles'
import React from 'react'
import Icons from 'components/atoms/Icons'
import theme from 'styles/theme'
import { useChangeTheme } from 'hooks/useChangeTheme'

const ButtonChangeTheme = () => {
  const { toggleTheme } = useChangeTheme()

  return (
    <S.ButtonChangeThemeWrapper
      data-component-button-change-theme
      aria-label="Alterar o tema da pagina"
      onClick={() => toggleTheme()}
    >
      <Icons
        icon="changeTheme"
        iconStyles={{
          size: '2.24',
          color: theme.colors.texts,
          colorOnHover: theme.colors.highlight,
          sizeInDesktop: '2.5'
        }}
      />
    </S.ButtonChangeThemeWrapper>
  )
}

export default ButtonChangeTheme
