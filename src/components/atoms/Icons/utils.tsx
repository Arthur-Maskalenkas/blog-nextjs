import { IIconStyle } from 'types/globald'

export const iconPropsDefault: IIconStyle = {
  size: '2rem'
}

export function tagWrapperResolved (
  href?: string,
  openLinkInOtherPage?: boolean
) {
  const isLink = !!href
  const openLinkInOtherPageResolved = openLinkInOtherPage
    ? { target: '_blank' }
    : {}

  const returnIfIsLink = {
    as: 'a',
    href: `/${href}`,
    ...openLinkInOtherPageResolved
  }
  const returnIfNoIsLink = { as: 'span' }

  return isLink ? returnIfIsLink : returnIfNoIsLink
}
