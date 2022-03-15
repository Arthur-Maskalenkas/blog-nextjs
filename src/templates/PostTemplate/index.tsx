import * as S from './styles'
import React from 'react'

import { IPostTemplateProps } from './postTemplate'
import Layout from 'components/organisms/Layout'
import Link from 'next/link'
import DateFormat from 'helpers/dateFormat'
import { NextSeo } from 'next-seo'

const PostTemplate = ({ post }: IPostTemplateProps) => {
  return (
    <Layout>
      <NextSeo
        title={`${post.title} - Willian Justen`}
        description={post.shortText}
        openGraph={{
          url: `https://willianjusten.com.br/${post.slug}`,
          title: `${post.title} - Arthur Maskalenkas`,
          description: post.shortText,
          images: [
            {
              url: 'https://media-exp1.licdn.com/dms/image/C4E03AQFqB1Rqj4qrUQ/profile-displayphoto-shrink_800_800/0/1624322488984?e=1652918400&v=beta&t=B8d24_pORoAjlrlw3baOE0Bo-fb0L-zZrQEJSj4250c',
              alt: `${post.title}`
            }
          ]
        }}
      />

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
