import * as S from './styles'
import React from 'react'
import Icons from 'components/atoms/Icons'

const ButtonGoToTopPage = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <S.ButtonGoToTopPageWrapper
      data-component-button-go-to-top-page
      aria-label="ir para o topo da pagina"
      onClick={() => handleClick()}
    >
      <Icons
        icon="goToTopPage"
        iconStyles={{
          size: '3.34',
          sizeInDesktop: '2.5'
        }}
      />
    </S.ButtonGoToTopPageWrapper>
  )
}
export default ButtonGoToTopPage
