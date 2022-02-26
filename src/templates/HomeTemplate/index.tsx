import * as S from './styles'
import React from 'react'
import Layout from 'components/organisms/Layout'
import { IHomeTemplateProps } from './homeTemplate'

const HomeTemplate = ({ posts }: IHomeTemplateProps) => (
  <Layout>
    <S.HomeWrapper data-component-home>
      <h1>Meu blog!</h1>
      <p>Listagem de posts:</p>
      {posts.map((post) => (
        <>
          <p>{post.title}</p>
          <p>{post.author}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </>
      ))}
    </S.HomeWrapper>
  </Layout>
)

export default HomeTemplate
