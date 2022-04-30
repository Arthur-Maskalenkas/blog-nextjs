import Button from 'components/atoms/Button'
import Icons from 'components/atoms/Icons'
import Modal from 'components/molecules/Modal'
import { IRefModalProps } from 'components/molecules/Modal/Modal'
import React, { useRef } from 'react'
import { CustomRefinementList } from './custom/custom'

import * as S from './styles'

/**
 *
 * É basicamente os widgets
 *
 */

const RefinementListLinks = () => {
  const refModal = useRef<IRefModalProps>(null)

  return (
    <S.RefinementListLinks data-component-refinement-list-link>
      <Button
        dataName="button-filter"
        onClick={() => refModal.current?.openComponent()}
      >
        <Icons icon="filter" iconStyles={{ size: '2' }} />
      </Button>

      <Modal ref={refModal}>
        <CustomRefinementList attribute="tag" />
      </Modal>
    </S.RefinementListLinks>
  )
}
export default RefinementListLinks
