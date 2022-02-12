/**
 *
 * ? Função usada para criar data-names para os componentes.
 *
 */

function dataNameResolved(dataName: string) {
  return { [`data-${dataName}`]: true }
}

export default dataNameResolved
