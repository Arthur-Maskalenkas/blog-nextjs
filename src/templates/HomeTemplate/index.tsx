import * as S from './styles'
import React from 'react'
import Layout from 'components/organisms/Layout'
import { IHomeTemplateProps } from './homeTemplate'
import Post from 'components/molecules/Post'
import DateFormat from 'helpers/dateFormat'

const HomeTemplate = ({ posts }: IHomeTemplateProps) => (
  <Layout>
    <S.HomeWrapper data-component-home>
      {posts.map((post, index) => {
        return (
          <Post
            key={index}
            tag={{
              title: 'misc',
              colorText: 'white',
              colorBackground: 'green'
            }}
            date={DateFormat(post.date)}
            slug={post.slug}
            shortText={post.shortText}
            title={post.title}
          />
        )
      })}
    </S.HomeWrapper>
  </Layout>
)

export default HomeTemplate
