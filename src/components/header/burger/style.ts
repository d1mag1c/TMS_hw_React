import styled from "styled-components";

export const BurgerMenu = styled.div<{ symbol: string }>`
  width: 70px;
  min-width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150%;
  border-right: 1px solid cornflowerblue;
  cursor: pointer;
  height: 100%;

  &:hover {
    background: blue;
  }

  &::before {
    content: '${props => props.symbol}';
  }
`

export const BurgerPosition = styled.div`
  position: relative;
`