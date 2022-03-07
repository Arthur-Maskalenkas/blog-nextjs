import * as S from './styles'
import React from 'react'

import SearchContainer from 'components/molecules/Search'
import Layout from 'components/organisms/Layout'

const SearchTemplate = () => {
  return (
    <Layout>
      <S.SearchTemplateWrapper>
        <SearchContainer />
      </S.SearchTemplateWrapper>
    </Layout>
  )
}

export default SearchTemplate
