import React from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import * as S from './styles'
import { IPostTemplateProps } from './postTemplate'

import Layout from 'components/organisms/Layout'
import DateFormat from 'helpers/dateFormat'
import { ContainerContentPageBlogGlobalStyle, ContainerPageBlogGlobalStyle } from 'styles/globa'

const PostTemplate = ({ post }: IPostTemplateProps) => {
  console.log(post)

  return (
    <Layout>
      <NextSeo
        title={`${post.title}`}
        description={post.shortText}
        openGraph={{
          title: `${post.title} - Arthur Maskalenkas`,
          description: post.shortText,
          images: [
            {
              url: 'https://res.cloudinary.com/dezwlfeyb/image/upload/v1650211858/graph-imagem-postagem_kdo5fd.png',
              alt: `${post.title}`
            }
          ]
        }}
      />

      <ContainerPageBlogGlobalStyle>
        <S.ThemeCodeWrapper data-component-post-template>
          <Link href={'/'} passHref>
            <S.LinkBack>← Voltar na listagem</S.LinkBack>
          </Link>
          <S.PostDate>{DateFormat(post.date)}</S.PostDate>
          <S.PostTitle>{post.title}</S.PostTitle>
          <S.PostSubtitle>{post.shortText}</S.PostSubtitle>
          <ContainerContentPageBlogGlobalStyle
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </S.ThemeCodeWrapper>
      </ContainerPageBlogGlobalStyle>
    </Layout>
  )
}

export default PostTemplate
