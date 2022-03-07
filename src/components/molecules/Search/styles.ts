import styled, { css } from 'styled-components'

export const SearchWrapper = styled.div`
  ${({ theme }) => css`
    .ais-SearchBox {
      margin-bottom: 1.6rem;
    }

    .ais-SearchBox-submit,
    .ais-SearchBox-reset {
      display: none;
    }

    form {
      position: relative;
    }

    input {
      background: transparent;
      outline: none;
      border: none;

      border-bottom: 1px solid ${theme.colors.borders};
      width: 100%;
      max-width: 100%;

      padding-left: 0.8rem;
      padding-right: 0.8rem;
      padding-bottom: 0.8rem;

      color: ${theme.colors.texts};

      font-size: 2.6rem;
      line-height: 2.6rem;
      font-weight: 400;
    }

    // * metodos não documentados para sumir com o x do Algolia, presente no input
    form::after {
      content: '';

      position: absolute;
      right: 1rem;
      top: 0.8rem;

      color: red;
      font-size: 12px;
      background-color: ${theme.colors.background};

      cursor: text;

      width: 2rem;
      height: 2rem;
    }
  `}
`

export const SearchStatsAndTitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    justify-content: space-between;
    align-items: center;

    padding-left: 1.6rem;
    padding-right: 1.6rem;

    // * "resultados encontrados em ..."
    .ais-Stats-text {
      font-size: 1.6rem;
      line-height: 1.6rem;
      font-weight: 400;
      color: ${theme.colors.texts};
    }
  `}
`

export const PoweredByAlgoliaTextWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

export const SearchTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 700;
    color: ${theme.colors.texts};

    margin-right: 1rem;
  `}
`
