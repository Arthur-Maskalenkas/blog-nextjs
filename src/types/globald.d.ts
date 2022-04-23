export interface IIconStyle {
  size: string
  sizeInDesktop?: string
}

export interface ILink {
  href: string
  textLink: string
}

export interface IGlobalTags {
  js: ITag
  dev: ITag
  css: ITag
  misc: ITag
  git: ITag
}

export interface IGlobalTag {
  color: string
  text: string
  background: string
}

export interface IGlobalAlgoliaStats {
  nbHits: number
  timeSpentMS: number
}

export interface IGlobalPost {
  title: string
  author: stirng
  date: string
  slug: string
  shortText: string
  content: any
  tag: keyof IGlobalTags
}
