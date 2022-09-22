import React from 'react'
import { NextSeo } from 'next-seo'

import * as S from './styles'

import SearchContainer from 'components/molecules/Search'
import Layout from 'components/organisms/Layout'

const SearchTemplate = () => {
  return (
    <Layout>
      <NextSeo
        title="Search | Arthur Maskalenkas"
        description="Revire o passado a vontade!"
      />
      <S.SearchTemplateWrapper>
        <SearchContainer />
      </S.SearchTemplateWrapper>
    </Layout>
  )
}

export default SearchTemplate
