import * as S from './styles'
import React from 'react'

import { format } from 'date-fns'
import { pt } from 'date-fns/locale'

import { IPostTemplateProps } from './postTemplate'
import Layout from 'components/organisms/Layout'
import Link from 'next/link'

const PostTemplate = ({ post }: IPostTemplateProps) => {
  const date = format(new Date(post.date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt
  })

  return (
    <Layout>
      <S.PostTemplateWrapper data-component-post-template>
        <Link href={'/'} passHref>
          <S.LinkBack>← Voltar na listagem</S.LinkBack>
        </Link>
        <S.PostDate>{date}</S.PostDate>
        <S.PostTitle>{post.title}</S.PostTitle>
        <S.PostSubtitle>{post.shortText}</S.PostSubtitle>
        <S.Content dangerouslySetInnerHTML={{ __html: post.content }} />
      </S.PostTemplateWrapper>
    </Layout>
  )
}

export default PostTemplate
