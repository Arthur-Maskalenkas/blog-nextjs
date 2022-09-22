import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import InfiniteScroll from 'react-infinite-scroll-component'

import * as S from './styles'
import { ICount, IHomeTemplateProps } from './homeTemplate'

import Layout from 'components/organisms/Layout'
import Post from 'components/molecules/Post'
import DateFormat from 'helpers/dateFormat'

const HomeTemplate = ({ posts }: IHomeTemplateProps) => {
  const POSTS_PER_LOADING = 10

  const [countPosts, setCountPosts] = useState<ICount>({
    prev: 0,
    next: POSTS_PER_LOADING
  })

  const [hasMorePosts, setHasMorePosts] = useState(true)

  const [currentPostsToShow, setCurrentPostsToShow] = useState(
    posts.slice(countPosts.prev, countPosts.next)
  )

  const getMoreData = () => {
    if (currentPostsToShow.length === posts.length) {
      setHasMorePosts(false)
      return
    }

    setCurrentPostsToShow(
      currentPostsToShow.concat(
        posts.slice(
          countPosts.prev + POSTS_PER_LOADING,
          countPosts.next + POSTS_PER_LOADING
        )
      )
    )

    setCountPosts((prevState) => ({
      prev: prevState.prev + POSTS_PER_LOADING,
      next: prevState.next + POSTS_PER_LOADING
    }))
  }

  return (
    <Layout>
      <NextSeo
        title="Home | Arthur Maskalenkas"
        description="Um blog de um desenvolvedor front-end extremamente apaixonado por js e todo o seu ecossistema."
        openGraph={{
          images: [
            {
              url: 'https://res.cloudinary.com/dezwlfeyb/image/upload/v1650211704/graph-imagem-padrao-blog_qrzonj.png',
              alt: 'Arthur Maskalenkas Blog'
            }
          ]
        }}
      />

      <S.HomeWrapper data-component-home>
        <InfiniteScroll
          dataLength={currentPostsToShow.length}
          next={getMoreData}
          loader={<>.</>}
          hasMore={hasMorePosts}
        >
          {currentPostsToShow.map((post, index) => {
            return (
              <Post
                key={index}
                tag={post.tag}
                date={DateFormat(post.date)}
                slug={post.slug}
                shortText={post.shortText}
                title={post.title}
              />
            )
          })}
        </InfiniteScroll>
      </S.HomeWrapper>
    </Layout>
  )
}
export default HomeTemplate
