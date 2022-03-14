import * as S from './styles'
import React from 'react'

import { Stats as StatsAlgolia } from 'react-instantsearch-dom'
import { resolveMessageSearch } from './utils'

const Stats = () => (
  <StatsAlgolia
    translations={{
      stats(nbHits, timeSpentMS) {
        return resolveMessageSearch(nbHits, timeSpentMS)
      }
    }}
  ></StatsAlgolia>
)

export default Stats
