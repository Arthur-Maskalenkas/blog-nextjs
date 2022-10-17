import styled from 'styled-components'

import { customMedia } from 'helpers/customMedia'

export const SearchWrapper = styled.div`
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  form {
    position: relative;

    > {
      input {
        background: transparent;
        outline: none;
        border: none;

        border-bottom: 1px solid var(--borders);
        width: 100%;
        max-width: 100%;

        padding-left: 0.8rem;
        padding-right: 0.8rem;
        padding-bottom: 0.8rem;

        color: var(--texts);

        font-size: 2.6rem;
        line-height: 2.6rem;
        font-weight: 400;
      }
    }
  }

  // * metodos não documentados para sumir com o x do Algolia, presente no input
  form::after {
    content: '';

    position: absolute;
    right: 1rem;
    top: 0.8rem;

    color: red;
    font-size: 12px;
    background-color: var(--background);

    cursor: text;

    width: 2rem;
    height: 2rem;
  }
`

export const SearchStatsAndTitleWrapper = styled.div`
  display: flex;
	
	flex-direction: column;
	align-items: flex-start;

 
	${customMedia.greaterThan('midPhone')`
		 justify-content: space-between;
		 flex-direction: row;
		 align-items: center;
	`}

  padding-left: 1.6rem;
  padding-right: 1.6rem;

  // * "resultados encontrados em ..."
  .ais-Stats-text {
    font-size: 1.3rem;
    line-height: 1.3rem;
    font-weight: 400;
    color: var(--texts);

    ${customMedia.greaterThan('phone')`
		font-size: 1.6rem;
		line-height: 1.6rem;
	`}
  }
`

export const SearchBoxWithWidgetsWrapper = styled.div`
  margin-bottom: 1.6rem;
 	display: flex;
	justify-content: center;
  align-items: center;
`

export const PoweredByAlgoliaTextWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

export const SearchTitle = styled.h1`
  font-size: 1.3rem;
  line-height: 1.3rem;
  font-weight: 700;
  color: var(--texts);

  margin-right: 1rem;


  ${customMedia.greaterThan('phone')`
		font-size: 1.6rem;
		line-height: 1.6rem;
	`}
`