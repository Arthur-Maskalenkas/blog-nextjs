import * as S from './styles'
import React from 'react'

import { IPostProps } from './post'
import Link from 'next/link'

const Post = ({ date, shortText, tag, title, slug }: IPostProps) => (
  <Link href={`/post/${slug}`} passHref>
    <S.Link>
      <S.PostWrapper data-component-post>
        <S.TagWrapper colorBackground={tag.colorBackground}>
          <S.Tag colorText={tag.colorText}>{tag.title}</S.Tag>
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

export default Post
