import { IGlobalTag } from 'types/globald'

export interface IPostProps {
  tag: keyof IGlobalTag
  date: string
  title: string
  shortText: string

  slug: string
}
