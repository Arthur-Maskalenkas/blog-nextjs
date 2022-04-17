import Button from 'components/atoms/Button'
import Icons from 'components/atoms/Icons'
import Layout from 'components/organisms/Layout'
import { NextSeo } from 'next-seo'
import React from 'react'
import { ContainerContentPageBlogGlobalStyle } from 'styles/globa'

import * as S from './styles'

const SobreMimTemplate = () => {
  return (
    <Layout>
      <NextSeo
        title="Sobre Mim | Arthur Maskalenkas"
        description="Prazer, o meu nome é Arthur Maskalenkas, nasci em 15 de maio de
        2000, em São Caetano Do Sul"
        openGraph={{
          images: [
            {
              url: 'https://res.cloudinary.com/dezwlfeyb/image/upload/v1650211964/graph-imagem-sobre-mim_wsbzwt.png',
              alt: 'Arthur Maskalenkas - Sobre mim'
            }
          ]
        }}
      />
      <S.SobreMimTemplateWrapper>
        <ContainerContentPageBlogGlobalStyle>
          <p>
            Prazer, o meu nome é Arthur Maskalenkas, nasci em 15 de maio de
            2000, em São Caetano Do Sul - SP e atualmente sou desenvolvedor na
            Avanti. Sou fã de Charlie Brown Jr e jogador de Tibia assumido.
          </p>

          <p>
            Atualmente trabalho utilizando o Vtex Io para o desenvolvimento de
            e-commerces. Sempre utilizando ele em conjunto com ReactJs, Graphql
            e Typescript, porém ja desenvolvi outras aplicações com sass,
            styled-components, NextJs, Gatsby e uma serie de outros frameworks e
            libs.
          </p>

          <p>
            Cursei Analise em desenvolvimento de sistemas no final de 2020,
            porém parei assim que finalizei o primeiro semestre.O motivo é por
            conta que estava faltando tempo para estudar as disciplinas que a
            faculdade queria, sendo que eu estava trabalhando em algo que NÃO
            era da minha area (balconista de farmacia) e precisava estudar sobre
            as tecnologias utilizada no mundo corporativo para entrar o quanto
            antes.
          </p>

          <p>
            Por que Programação? Por conta que eu acho incrivel o fato de poder
            criar qualquer coisa e aprender cada dia mais, fora que com esse
            blog eu espero poder ajudar uma grande quantidade de pessoas com o
            meu conhecimento e as dicas que eu vou pegando dia após dia, e de
            consequencia me sentir realizado diariamente.
          </p>

          <h2>Contato</h2>

          <p>
            Você pode entrar em contato comigo através de qualquer rede social.
          </p>

          <S.SocialLinksWrappers>
            <li>
              <Button aria-label="Ir para o meu Github">
                <Icons
                  icon="github"
                  iconStyles={{
                    size: '3'
                  }}
                />
              </Button>
            </li>

            <li>
              <Button aria-label="Ir para o meu Linkedin">
                <Icons
                  icon="linkedin"
                  iconStyles={{
                    size: '3'
                  }}
                />
              </Button>
            </li>
          </S.SocialLinksWrappers>
        </ContainerContentPageBlogGlobalStyle>
      </S.SobreMimTemplateWrapper>
    </Layout>
  )
}

export default SobreMimTemplate
