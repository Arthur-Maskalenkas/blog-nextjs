import * as S from './styles'
import React, { useState } from 'react'
import Layout from 'components/organisms/Layout'
import { IHomeTemplateProps } from './homeTemplate'
import Post from 'components/molecules/Post'
import DateFormat from 'helpers/dateFormat'
import { NextSeo } from 'next-seo'
import InfiniteScroll from 'react-infinite-scroll-component'

const HomeTemplate = ({ posts }: IHomeTemplateProps) => {
  const POSTS_PER_LOADING = 10

  const sortedPosts = posts.sort((post1, post2) =>
    new Date(post1.date) > new Date(post2.date) ? -1 : 1
  )

  const [count, setCount] = useState({
    prev: 0,
    next: POSTS_PER_LOADING
  })
  const [hasMore, setHasMore] = useState(true)
  const [current, setCurrent] = useState(
    sortedPosts.slice(count.prev, count.next)
  )

  const getMoreData = () => {
    console.log(current)

    if (current.length === sortedPosts.length) {
      setHasMore(false)
      return
    }

    setCurrent(
      current.concat(
        sortedPosts.slice(
          count.prev + POSTS_PER_LOADING,
          count.next + POSTS_PER_LOADING
        )
      )
    )

    setCount((prevState: any) => ({
      prev: prevState.prev + POSTS_PER_LOADING,
      next: prevState.next + POSTS_PER_LOADING
    }))
  }

  return (
    <Layout>
      <NextSeo
        title="Home | Arthur Maskalenkas"
        description="Um blog de um desenvolvedor front-end extremamente apaxionado por js e todo o seu ecossistema."
        openGraph={{
          images: [
            {
              url: 'https://media-exp1.licdn.com/dms/image/C4E03AQFqB1Rqj4qrUQ/profile-displayphoto-shrink_800_800/0/1624322488984?e=16POSTS_PER_LOADING2918400&v=beta&t=B8d24_pORoAjlrlw3baOE0Bo-fb0L-zZrQEJSj42POSTS_PER_LOADING0c',
              width: 1200,
              height: 630,
              alt: 'Arthur Maskalenkas Blog'
            }
          ]
        }}
      />

      <S.HomeWrapper data-component-home>
        <InfiniteScroll
          dataLength={current.length}
          next={getMoreData}
          loader={<h4>loading...</h4>}
          hasMore={hasMore}
          endMessage={<p>voce chegou ao final</p>}
        >
          {current.map((post, index) => {
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
        </InfiniteScroll>
      </S.HomeWrapper>
    </Layout>
  )
}
export default HomeTemplate
