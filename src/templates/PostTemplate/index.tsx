import * as S from './styles'
import React from 'react'

import { IPostTemplateProps } from './postTemplate'
import Layout from 'components/organisms/Layout'
import Link from 'next/link'
import DateFormat from 'helpers/dateFormat'

const PostTemplate = ({ post }: IPostTemplateProps) => {
  return (
    <Layout>
      <S.PostTemplateWrapper data-component-post-template>
        <Link href={'/'} passHref>
          <S.LinkBack>← Voltar na listagem</S.LinkBack>
        </Link>
        <S.PostDate>{DateFormat(post.date)}</S.PostDate>
        <S.PostTitle>{post.title}</S.PostTitle>
        <S.PostSubtitle>{post.shortText}</S.PostSubtitle>
        <S.Content dangerouslySetInnerHTML={{ __html: post.content }} />
      </S.PostTemplateWrapper>
    </Layout>
  )
}

export default PostTemplate
