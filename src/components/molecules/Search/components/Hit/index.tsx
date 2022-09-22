import React from 'react'
import { Highlight } from 'react-instantsearch-dom'

import * as S from './styles'

import Post from 'components/molecules/Post'

/**
 *
 * É basicamente o wrapper de cada resultado de busca
 *
 */

const Hit = (props: any) => {
  const {
    hit: { date, slug, tag }
  } = props

  return (
    <S.HitWrapper data-component-hit>
      <Post
        date={date}
        shortText={
          (
            <Highlight hit={props.hit} attribute="shortText" />
          ) as unknown as string
        }
        slug={slug}
        tag={tag}
        title={
          (<Highlight hit={props.hit} attribute="title" />) as unknown as string
        }
      />
    </S.HitWrapper>
  )
}
export default Hit
