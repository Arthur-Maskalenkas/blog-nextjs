import * as S from './styles'
import React from 'react'
import Layout from 'components/organisms/Layout'
import { IHomeTemplateProps } from './homeTemplate'
import Post from 'components/molecules/Post'
import DateFormat from 'helpers/dateFormat'
import { NextSeo } from 'next-seo'

const HomeTemplate = ({ posts }: IHomeTemplateProps) => (
  <Layout>
    <NextSeo
      title="Home | Arthur Maskalenkas"
      description="Um blog de um desenvolvedor front-end extremamente apaxionado por js e todo o seu ecossistema."
      openGraph={{
        images: [
          {
            url: 'https://media-exp1.licdn.com/dms/image/C4E03AQFqB1Rqj4qrUQ/profile-displayphoto-shrink_800_800/0/1624322488984?e=1652918400&v=beta&t=B8d24_pORoAjlrlw3baOE0Bo-fb0L-zZrQEJSj4250c',
            width: 1200,
            height: 630,
            alt: 'Arthur Maskalenkas Blog'
          }
        ]
      }}
    />

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
