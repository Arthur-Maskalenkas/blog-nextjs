import { customMedia } from 'helpers/dataNameResolver/customMedia'
import styled from 'styled-components'
import { textWithHighlightGlobalStyle } from 'styles/globa'

export const Wrapper = styled.a`
  display: flex;

  width: max-content;

  ${customMedia.greaterThan('desktop')`
    flex-direction: column;
  `}
`

export const ImageWrapper = styled.div`
  height: 3.2rem;
  width: 3.2rem;

  margin-right: 1rem;

  overflow: hidden;
  border-radius: 50%;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${customMedia.greaterThan('desktop')`
    width: 6.4rem;
    height: 6.4rem;

    margin-right: auto;
    margin-left: auto;
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
