import { links } from './links'

type Pages = 'post' | 'index' | 'default'

const pagesTagResolve = {
  post: (slug:string) => `post/${slug}`,
  default: (slug:string) => `${slug}`
}

export const canonicalTagResolved = (as: Pages, slug?:string) => {
  const domain = links.domain

  if (as === 'index') {
    return domain
  }

  const pathResolved = pagesTagResolve[as](slug || '')

  return `${domain}/${pathResolved}`
}
