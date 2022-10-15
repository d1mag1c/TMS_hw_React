import styled from "styled-components";

export const TabsBlock = styled.section`
  width: 100%;
  height: max-content;
  padding: 20px;
  margin: 20px 0;
  background: #eee2e2;
`
export const TabsList = styled.ul`
  display: flex;
  border-bottom: 1px solid grey;
`

export const TabsLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  position: relative;

  &:hover {
    color: blue;
    cursor: pointer;
  }
`
export const BorderTab = styled.span`
  position: absolute;
  border-bottom: 3px solid black;
  width: 100%;
  bottom: -2px;
`