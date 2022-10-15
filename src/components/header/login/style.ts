import styled from "styled-components";

export const LoginBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  min-width: max-content;
  cursor: pointer;

  &:hover {
    background: blue;
  }
`

export const InitialsBlock = styled.div`
  width: 30px;
  height: 30px;
  background: cornflowerblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin: 0 5px;
`

export const UserBlock = styled.div`
  min-width: max-content;
  margin: 0 5px;
`
