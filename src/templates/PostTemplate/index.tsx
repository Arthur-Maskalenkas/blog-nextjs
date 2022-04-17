import * as S from './styles'
import React from 'react'

import { IPostTemplateProps } from './postTemplate'
import Layout from 'components/organisms/Layout'
import Link from 'next/link'
import DateFormat from 'helpers/dateFormat'
import { NextSeo } from 'next-seo'
import {
  ContainerPageBlogGlobalStyle,
  ContainerContentPageBlogGlobalStyle
} from 'styles/globa'

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
              url: `https://og-image.vercel.app/Arthur%20Maskalenkas%20-%20${post.title
                .split(' ')
                .join(
                  '%20'
                )}.png?theme=dark&md=0&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`,
              width: 1200,
              height: 630,
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
