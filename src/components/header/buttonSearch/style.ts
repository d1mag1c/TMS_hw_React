import styled from "styled-components";

export const BtnSearch = styled.div`
  width: 5%;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-right: 1px solid cornflowerblue;
  &:hover{
    background: blue;
  }
    `

export const Magnifier = styled.span`
    border: 2px solid white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: relative;
  &::before{
    position: absolute;
    content: '';
    border: 1px solid white;
    background: white;
    bottom: -3px;
    right: -7px;
    width: 7px;
    transform: rotate(45deg);
  }
    `