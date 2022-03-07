import * as S from './styles'
import React from 'react'

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'

import Hit from './components/Hit'
import Icons from 'components/atoms/Icons'

const Search = () => {
  const searchClient = algoliasearch(
    '1V75PQ9KBN',
    '5d6fedafa2412df7746cb70eb1964fe7'
  )

  return (
    <S.SearchWrapper data-component-search>
      <InstantSearch indexName="dev_posts" searchClient={searchClient}>
        <div>
          <SearchBox
            translations={{
              placeholder: 'Pesquisar...'
            }}
            autoFocus={true}
          />
          <S.SearchStatsAndTitleWrapper>
            <Stats
              translations={{
                stats(nbHits, timeSpentMS) {
                  return nbHits === 1
                    ? `${nbHits} resultado encontrado em ${timeSpentMS}ms`
                    : `${nbHits} resultados encontrados em ${timeSpentMS}ms`
                }
              }}
            />
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
