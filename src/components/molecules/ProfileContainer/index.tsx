/* eslint-disable @next/next/no-img-element */
import * as S from './styles'
import React from 'react'
import Link from 'next/link'

const ProfileContainer = () => (
  <Link href={'/'} passHref>
    <S.Wrapper>
      <S.ImageWrapper>
        <img
          src="https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.6435-9/101497502_1647943712038631_4084658793512697856_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEoQnHXalk3c8Z8o_mcBtsktt-mQ6alnHS236ZDpqWcdAvtFXoi3Qo0NHNQf52xjAEteQokf01W8u5wUvO-q95f&_nc_ohc=412CQtDiTSoAX83zMjF&_nc_ht=scontent.fcgh7-1.fna&oh=00_AT_jjmGXHVO3V5S3QAB2j3m-yL-3-w4o5LYg6SFWy88ACQ&oe=6230739E"
          alt="pernalonga"
        />
      </S.ImageWrapper>

      <S.ProfileAuthor>
        Arthur Maskalenkas
        <small>Desenvolvedor de software</small>
      </S.ProfileAuthor>
    </S.Wrapper>
  </Link>
)

export default ProfileContainer
