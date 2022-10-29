import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  background: #2231AA;
  border: none;
  padding-left: 20px;
  border-right: 1px solid cornflowerblue;

  &::placeholder {
    color: white;
    text-align: center;
  }

  &:focus {

    outline: 0;
    outline-offset: 0;
    background: #84aeff;
  }
`
type TLabel = {
    htmlFor: string
}

export const BtnSearch = styled.label<TLabel>`
  width: 70px;
  min-width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-right: 1px solid cornflowerblue;
  &:hover{
    background: blue;
  }
    `

export const IconSearch = styled.span`
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

