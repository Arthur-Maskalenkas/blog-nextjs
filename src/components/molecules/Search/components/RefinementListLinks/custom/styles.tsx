import styled, { css } from 'styled-components'

export const WrapperRefinementList = styled.ul`
  ${() => css`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
  `}
`

export const OptionWrapper = styled.li`
  ${() => css`
    display: flex;

    align-items: center;
  `}
`
export const OptionLabel = styled.a`
  ${() => css`
    cursor: pointer;

    font-size: 3.5rem;
    line-height: 4rem;
    font-weight: 500;

    color: var(--highlight);
  `}
`

export const OptionCheckBox = styled.input`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: 1.8rem;
  height: 1.8rem;

  border: 1px solid var(--highlight);

  border-radius: 0.2rem;

  transition: background border 0.2s;
  position: relative;
  outline: none;

  &:before {
    content: '';
    width: 0.6rem;
    height: 0.9rem;
    border: 0.2rem solid black;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
    position: absolute;
    top: 0.1rem;
    opacity: 0;
    transition: 0.2s all;
  }
  &:focus {
    box-shadow: 0 0 0.5rem red;
  }
  &:hover {
    border-color: green;
    transition: 0.2s all;
  }
  &:checked {
    border-color: red;
    background: black;
    &:before {
      opacity: 1;
    }
  }
`
