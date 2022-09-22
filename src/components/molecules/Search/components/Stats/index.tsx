import React from 'react'
import { Stats as StatsAlgolia } from 'react-instantsearch-dom'

import { resolveMessageSearch } from './utils'

/**
 *
 * É basicamente a mensagem de resultados encontrados/ não encontrados
 *
 */

const Stats = () => (
  <StatsAlgolia
    translations={{
      stats (nbHits, timeSpentMS) {
        return resolveMessageSearch(nbHits, timeSpentMS)
      }
    }}
  ></StatsAlgolia>
)

export default Stats
