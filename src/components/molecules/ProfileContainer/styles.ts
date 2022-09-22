import styled from 'styled-components'

import { customMedia } from 'helpers/customMedia'
import { textWithHighlightGlobalStyle } from 'styles/globa'

export const ProfileContainerWrapper = styled.a`
  display: flex;

  width: max-content;

  ${customMedia.greaterThan('desktop')`
    flex-direction: column;
    align-items: center;
    width: 100%;
  `}
`

export const ImageWrapper = styled.div`
  height: 4.2rem;
  width: 4.2rem;

  margin-right: 1rem;

  overflow: hidden;
  border-radius: 50%;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${customMedia.greaterThan('desktop')`
    width: 12.4rem;
    height: 12.4rem;
    margin-bottom: 1.2rem;
  `}
`

export const ProfileAuthor = styled(textWithHighlightGlobalStyle).attrs({
  as: 'h1'
})`
  display: flex;
  flex-direction: column;

  font-size: 1.92rem;
  line-height: 1.92rem;
  font-weight: 400;

  & small {
    font-size: 1.28rem;
    line-height: 1.28rem;
    font-weight: 300;

    display: inline-block;
    margin-top: 0.32rem;

    transition: unset;
  }

  ${customMedia.greaterThan('desktop')`
    font-size: 2.56rem;
    line-height: 2.56rem;

    & small {
      font-size: 1.92rem;
      line-height: 1.92rem;
    }
  `}
`
