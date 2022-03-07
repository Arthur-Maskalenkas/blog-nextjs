import SearchTemplate from 'templates/SearchTemplate'

export default function Page() {
  return <SearchTemplate />
}

export function getStaticProps() {
  return {
    props: {}
  }
}
