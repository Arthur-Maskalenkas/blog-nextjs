/**
 *
 * ? Função usada para criar data-names para os componentes.
 *
 */

function dataNameResolved (dataName?: string) {
  if (dataName) {
    return { [`data-${dataName}`]: true }
  }

  return {}
}

export default dataNameResolved
