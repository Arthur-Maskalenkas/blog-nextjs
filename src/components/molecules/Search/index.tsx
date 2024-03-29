import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom'

import * as S from './styles'
import Hit from './components/Hit'
import Stats from './components/Stats'
import RefinementListLinks from './components/RefinementListLinks'

import { env } from '../../../helpers/env'

import Icons from 'components/atoms/Icons'

const Search = () => {
  const searchClient = algoliasearch(
    env.algolia.appId,
    env.algolia.searchOnlyApiKey
  )

  return (
    <S.SearchWrapper data-component-search>
      <InstantSearch
        indexName={env.algolia.indexName}
        searchClient={searchClient}
      >
        <div>
          <S.SearchBoxWithWidgetsWrapper>
            <SearchBox
              translations={{
                placeholder: 'Pesquise por titulos e subtitulos.'
              }}
              autoFocus={true}
            />
            <RefinementListLinks />
          </S.SearchBoxWithWidgetsWrapper>

          <S.SearchStatsAndTitleWrapper>
            <Stats />
            <S.PoweredByAlgoliaTextWrapper>
              <S.SearchTitle>Powered by Algolia</S.SearchTitle>
              <Icons icon="algolia" defaultStyle iconStyles={{ size: '1.6' }} />
            </S.PoweredByAlgoliaTextWrapper>
          </S.SearchStatsAndTitleWrapper>

          <Hits hitComponent={Hit} />
        </div>
      </InstantSearch>
    </S.SearchWrapper>
  )
}

export default Search
