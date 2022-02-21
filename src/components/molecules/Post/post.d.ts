import { IGlobalDate, IGlobalTag } from 'types/globald'

export interface IPostProps {
  tag: IGlobalTag
  date: IGlobalDate
  title: string
  shortText: string

  href: string
}
