export interface ITagResolver {
  tag: keyof ITags
}

export interface ITags {
  js: ITag
  dev: ITag
  css: ITag
  misc: ITag
}

export interface ITag {
  color: string
  text: string
  background: string
}
