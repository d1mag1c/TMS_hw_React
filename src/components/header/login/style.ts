import styled from "styled-components";

export const LoginBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: max-content;
  min-width: max-content;
  height: 70px;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    background: blue;
  }
`
export const WrapperUser = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: max-content;
`
export const InitialsBlock = styled.div`

  width: 30px;
  height: 30px;
  padding: 5px 10px;
  background: cornflowerblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin: 0 5px;

`

export const IconUser = styled.div`

  height: 20px;
  width: 20px;
  position: relative;

  &:before {
    content: '';
    width: 6px;
    height: 6px;
    border: 2px solid white;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 5px;
  }

  &:after {
    content: '';
    width: 16px;
    height: 5px;
    border: 2px solid white;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

export const FullName = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  margin-left: 5px;
`