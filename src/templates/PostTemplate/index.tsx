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
        title={`${post.title} - Arthur Maskalenkas`}
        description={post.shortText}
        openGraph={{
          title: `${post.title} - Arthur Maskalenkas`,
          description: post.shortText,
          images: [
            {
              url: `https://res.cloudinary.com/dezwlfeyb/image/upload/v1650211858/graph-imagem-postagem_kdo5fd.png`,
              alt: `${post.title}`
            }
          ]
        }}
      />

      {console.log(
        `https://og-image.vercel.app/Arthur%20Maskalenkas%20-%20${post.title
          .split(' ')
          .join(
            '%20'
          )}.png?theme=dark&md=0&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`
      )}

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
