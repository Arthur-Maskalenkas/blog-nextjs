import * as S from './styles'
import React from 'react'
import Layout from 'components/organisms/Layout'
import Post from 'components/molecules/Post'

const Home = () => (
  <S.HomeWrapper>
    <Layout>
      <Post
        tag={{ title: 'misc', colorText: 'white', colorBackground: 'green' }}
        date={{ day: 15, month: 5, year: 2000 }}
        title="Meu ano de 2021"
        shortText="Ano passado ja foi complicado para mim, mas esse ano foi mais ainda."
        href="/"
      />
    </Layout>
  </S.HomeWrapper>
)

export default Home
