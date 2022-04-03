import { ITag, ITags } from './tagResolver'

const tags: ITags = {
  css: { color: 'white', text: 'CSS', background: '#47650B' },
  dev: { color: 'white', text: 'DEV', background: '#61728F' },
  js: { color: 'black', text: 'JS', background: '#D6BA32' },
  misc: { color: 'white', text: 'MISC', background: '#24809E' }
}

export function TagResolved(tag: keyof ITags): ITag {
  const tagResolved = tags[tag]

  return tagResolved
}
