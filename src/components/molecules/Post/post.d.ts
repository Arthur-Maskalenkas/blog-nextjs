import { IGlobalTags } from 'types/globald'

export interface IPostProps {
  tag: keyof IGlobalTags
  date: string
  title: string
  shortText: string

  slug: string
}
