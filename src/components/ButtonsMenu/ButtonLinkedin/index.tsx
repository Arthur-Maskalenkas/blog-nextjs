import React from 'react'

import * as S from './styles'

import Icons from 'components/atoms/Icons'
import { LINK_LINKEDIN } from 'helpers/links'

const ButtonLinkedin = () => (
  <S.ButtonLinkedinWrapper
    data-component-button-linkedin
    aria-label="Vá para o meu linkedin"
  >
    <Icons
      icon="linkedin"
      href={`/${LINK_LINKEDIN}`}
      openLinkInOtherPage={true}
      iconStyles={{
        size: '3',
        sizeInDesktop: '3'
      }}
    />
  </S.ButtonLinkedinWrapper>
)

export default ButtonLinkedin
