import { Highlight, connectRefinementList } from 'react-instantsearch-dom'

interface IItems {
  label: string
  value: string[]
  count: number
  isRefined: boolean
}

interface IRefinementList {
  items: IItems[]
  currentRefinement: string[]
  isFromSearch: boolean
  refine: (v: any) => any
  searchForItems: (v: any) => any
  createURL: (v: any) => any
}

const RefinementList = ({
  items,
  isFromSearch,
  refine,
  searchForItems,
  createURL
}: IRefinementList) => (
  <ul>
    <li>
      <input
        type="search"
        onChange={(event) => searchForItems(event.currentTarget.value)}
      />
    </li>
    {items.map((item) => (
      <li key={item.label}>
        <a
          href={createURL(item.value)}
          style={{ fontWeight: item.isRefined ? 'bold' : '' }}
          onClick={(event) => {
            event.preventDefault()
            refine(item.value)
          }}
        >
          {isFromSearch ? (
            <Highlight attribute="label" hit={item} />
          ) : (
            item.label
          )}{' '}
          ({item.count})
        </a>
      </li>
    ))}
  </ul>
)

export const CustomRefinementList = connectRefinementList(RefinementList)
