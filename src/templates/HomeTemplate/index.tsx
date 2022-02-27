import * as S from './styles'
import React from 'react'
import Layout from 'components/organisms/Layout'
import { IHomeTemplateProps } from './homeTemplate'
import Post from 'components/molecules/Post'

const HomeTemplate = ({ posts }: IHomeTemplateProps) => (
  <Layout>
    <S.HomeWrapper data-component-home>
      {posts.map((post, index) => (
        <Post
          key={index}
          tag={{ title: 'misc', colorText: 'white', colorBackground: 'green' }}
          date={{ day: post.dia, month: post.mes, year: post.ano }}
          slug={post.slug}
          shortText={post.shortText}
          title={post.title}
        />
      ))}
    </S.HomeWrapper>
  </Layout>
)

export default HomeTemplate
