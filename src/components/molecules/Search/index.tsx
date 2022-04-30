import * as S from './styles'
import React from 'react'

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

import Hit from './components/Hit'
import Icons from 'components/atoms/Icons'
import Stats from './components/Stats'
import RefinementListLinks from './components/RefinementListLinks'

const Search = () => {
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
  )

  return (
    <S.SearchWrapper data-component-search>
      <InstantSearch
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!}
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
