import * as S from './styles'
import React from 'react'

import { IPostTemplateProps } from './postTemplate'
import Layout from 'components/organisms/Layout'

const PostTemplate = ({ post }: IPostTemplateProps) => (
  <Layout>
    <S.PostTemplateWrapper data-component-post-template>
      <p>ola!</p>
      <p>{post.author}</p>
      <p>{post.title}</p>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </S.PostTemplateWrapper>
  </Layout>
)

export default PostTemplate
