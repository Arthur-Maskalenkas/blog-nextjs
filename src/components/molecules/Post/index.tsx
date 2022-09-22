import React from 'react'
import Link from 'next/link'

import * as S from './styles'
import { IPostProps } from './post'

import { TagResolved } from 'helpers/tagResolver'

const Post = ({ date, shortText, tag, title, slug }: IPostProps) => {
  const { background, color, text } = TagResolved(tag)

  return (
    <Link href={`/post/${slug}`} passHref>
      <S.Link>
        <S.PostWrapper data-component-post>
          <S.TagWrapper colorBackground={background}>
            <S.Tag colorText={color}>{text}</S.Tag>
          </S.TagWrapper>

          <div>
            <S.Date>{date}</S.Date>

            <S.Title>{title}</S.Title>

            <S.ShortText>{shortText}</S.ShortText>
          </div>
        </S.PostWrapper>
      </S.Link>
    </Link>
  )
}
export default Post
