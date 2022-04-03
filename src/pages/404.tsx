import Layout from 'components/organisms/Layout'
import { customMedia } from 'helpers/customMedia'
import { NextSeo } from 'next-seo'
import styled, { css } from 'styled-components'

const ErrorPageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 2rem;

    height: calc(
      100vh - (${theme.heightContainerAroundScreens.footerMobile} + 7rem)
    );

    ${customMedia.greaterThan('desktop')`
     height: calc(
      100vh - (${theme.heightContainerAroundScreens.footerMobile})
    );
    `}
  `}
`

const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.texts};
    font-size: 3.5rem;

    text-align: center;

    margin-bottom: 2rem;
  `}
`

const GifContainer = styled.div`
  height: 350px;
  width: 350px;

  background-image: url('https://media2.giphy.com/media/APqEbxBsVlkWSuFpth/giphy.gif?cid=ecf05e470ljbh95zrn0zgkvx6bdaevyx2z4cd1se7dg2s46t&rid=giphy.gif&ct=g');
  background-position: center;
  background-size: cover;
`

export default function Page() {
  return (
    <Layout>
      <ErrorPageWrapper>
        <NextSeo title="404: Error | Arthur Maskalenkas" />

        <Description>
          Opa... Parece que o conteudo que você procura não existe... AINDA
        </Description>
        <GifContainer />
      </ErrorPageWrapper>
    </Layout>
  )
}
