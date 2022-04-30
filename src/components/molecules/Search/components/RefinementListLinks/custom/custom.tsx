import React from 'react'
import { connectRefinementList } from 'react-instantsearch-dom'

import * as S from './styles'

interface IItems {
  label: string
  value: string[]
  count: number
  isRefined: boolean
}

interface IRefinementList {
  items: IItems[]
  currentRefinement: string[]
  refine: (v: any) => any
}

const RefinementList = ({ items, refine }: IRefinementList) => {
  const handleClickCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: IItems
  ) => {
    refine(item.value)
  }

  const handleClickOption = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: IItems
  ) => {
    e.preventDefault()
    refine(item.value)
  }

  return (
    <S.WrapperRefinementList>
      {items.map((item, index) => (
        <S.OptionWrapper key={item.label} index={index + 1}>
          <S.OptionCheckBox
            type="checkbox"
            checked={item.isRefined}
            onChange={(e) => handleClickCheckBox(e, item)}
          />
          <S.OptionLabel
            isRefined={item.isRefined}
            onClick={(e) => {
              handleClickOption(e, item)
            }}
          >
            {item.label}
          </S.OptionLabel>
        </S.OptionWrapper>
      ))}
    </S.WrapperRefinementList>
  )
}

export const CustomRefinementList = connectRefinementList(RefinementList)
