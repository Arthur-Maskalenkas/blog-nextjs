import { IIconStyle } from 'types/globald'

export const iconPropsDefault: IIconStyle = {
  color: 'black',
  size: '2rem',
  colorOnHover: 'red'
}

export function tagWrapperResolved(href?: string) {
  const isLink = !!href

  const returnIfIsLink = { as: 'a', href: href }
  const returnIfNoIsLink = { as: 'span' }

  return isLink ? returnIfIsLink : returnIfNoIsLink
}
