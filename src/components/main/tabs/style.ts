import styled from "styled-components";

export const TabsBlock = styled.section`
  width: 100%;
  height: max-content;
  margin: 40px 0 0;
`
export const TabsList = styled.ul`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
`

export const TabsLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 48px;
  position: relative;
  font-weight: 600;
  font-size: 16px;
  
  &:not(:first-of-type) {
    margin-left: 80px;
  }

  &:hover {
    color: blue;
    cursor: pointer;
  }
`
export const BorderTab = styled.span<{borderWhite?:boolean}>`
  position: absolute;
  border-bottom: 3px solid ${props => props.borderWhite? 'white':'black'};
  width: 100%;
  bottom: -2px;
`