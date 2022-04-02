import { IGlobalPost } from 'types/globald'

export interface IHomeTemplateProps {
  posts: IGlobalPost[]
}

export interface ICount {
  next: number
  prev: number
}
