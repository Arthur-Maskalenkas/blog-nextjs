import styled, { css } from 'styled-components'

export const WrapperRefinementList = styled.ul`
  ${() => css`
  ${OptionWrapper}:not(:last-child) {
    margin-bottom: 2.5rem;
  `}
`

export const OptionWrapper = styled.li`
  ${() => css`
    display: flex;

    align-items: center;
  `}
`

interface IOptionLabel {
  isRefined: boolean
}

export const OptionLabel = styled.a<IOptionLabel>`
  ${({ theme, isRefined }) => css`
    cursor: pointer;

    font-size: 3.5rem;
    line-height: 3.5rem;
    font-weight: 500;

    color: ${isRefined ? theme.colors.highlight : theme.colors.texts.normal};

    position: relative;
    bottom: 0.5rem;

    transition: 0.3s all;
  `}
`

export const OptionCheckBox = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 2rem;
    height: 2rem;

    margin-right: 2rem;

    border: 1px solid ${theme.colors.texts.normal};

    border-radius: 0.2rem;

    transition: all 0.3s;
    position: relative;
    outline: none;

    &:before {
      content: '';
      width: 1rem;
      height: 1rem;

      background: ${theme.colors.highlight};
      border-radius: 50%;

      opacity: 0;
      transition: 0.3s all;
    }
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.highlight};
    }
    &:hover {
      border-color: ${theme.colors.highlight};
      transition: 0.2s all;
    }
    &:checked {
      border-color: ${theme.colors.highlight};
      background: transparent;
      &:before {
        opacity: 1;
      }
    }
  `}
`
