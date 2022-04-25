import Modal from 'components/molecules/Modal'
import { IRefModalProps } from 'components/molecules/Modal/Modal'
import React, { useRef } from 'react'
import { RefinementList } from 'react-instantsearch-dom'
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
        <RefinementList attribute="tag" />
      </Modal>
    </S.RefinementListLinks>
  )
}
export default RefinementListLinks
