/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

import * as S from './styles'

const ProfileContainer = () => (
  <Link href={'/'} passHref>
    <S.ProfileContainerWrapper data-component-profile-container>
      <S.ImageWrapper>
        <img
          src="https://res.cloudinary.com/dezwlfeyb/image/upload/v1650079180/foto-de-perfil_xr30gh.webp"
          alt="Uma foto minha programando"
        />
      </S.ImageWrapper>

      <S.ProfileAuthor>
        Arthur Maskalenkas
        <small>Desenvolvedor de software</small>
      </S.ProfileAuthor>
    </S.ProfileContainerWrapper>
  </Link>
)

export default ProfileContainer
