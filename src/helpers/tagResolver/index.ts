import { IGlobalTag, IGlobalTags } from 'types/globald'

const tags: IGlobalTags = {
  css: { color: 'white', text: 'CSS', background: '#47650B' },
  dev: { color: 'white', text: 'DEV', background: '#61728F' },
  js: { color: 'black', text: 'JS', background: '#D6BA32' },
  misc: { color: 'white', text: 'MISC', background: '#24809E' }
}

export function TagResolved(tag: keyof IGlobalTags): IGlobalTag {
  const tagResolved = tags[tag]

  return tagResolved
}
