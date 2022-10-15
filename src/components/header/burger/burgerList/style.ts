import styled from "styled-components";

export const BurgerListBlock = styled.div`
  position: absolute;
  width: 200px;
  min-height: max-content;
  background: #0057ff;
  top: 50px;
  z-index: 2;
`

export const BurgerListUl = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const BurgerListLi = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid cornflowerblue;
  cursor: pointer;
  &:hover {
    background: blue;
  }
`