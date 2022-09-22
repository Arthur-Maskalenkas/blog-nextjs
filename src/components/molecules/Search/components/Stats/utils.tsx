export function resolveMessageSearch (nbHits: number, timeSpentMS: number) {
  if (nbHits === 0) {
    return 'nenhum resultado encontrado'
  }

  if (nbHits === 1) {
    return `${nbHits} resultado encontrado em ${timeSpentMS}ms`
  }

  if (nbHits > 1) {
    return `${nbHits} resultados encontrados em ${timeSpentMS}ms`
  }

  return 'ops...'
}
