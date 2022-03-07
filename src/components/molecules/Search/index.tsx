import * as S from './styles'
import React from 'react'

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

import Hit from './components/Hit'

const Search = () => {
  const searchClient = algoliasearch(
    '1V75PQ9KBN',
    '5d6fedafa2412df7746cb70eb1964fe7'
  )

  return (
    <S.SearchWrapper data-component-search>
      <h1>React InstantSearch e-commerce demo</h1>
      <InstantSearch indexName="dev_posts" searchClient={searchClient}>
        <div className="right-panel">
          <SearchBox />
          <Hits hitComponent={Hit} />
        </div>
      </InstantSearch>
    </S.SearchWrapper>
  )
}

export default Search
