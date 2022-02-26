export interface IIconStyle {
  color: string
  size: string
  colorOnHover?: string
}

export interface ILink {
  href: string
  textLink: string
}

export interface IGlobalTag {
  colorBackground: string
  colorText: string
  title: string
}

export interface IGlobalDate {
  day: number
  month: number
  year: number
}

export interface IGlobalPost {
  title: string
  author: stirng
  date: string
  slug?: string
  content: any
}
