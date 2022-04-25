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
      <button onClick={() => refModal.current?.onOpen()}> abrir</button>

      <Modal ref={refModal}>
        <CustomRefinementList attribute="tag" />
      </Modal>
    </S.RefinementListLinks>
  )
}
export default RefinementListLinks
