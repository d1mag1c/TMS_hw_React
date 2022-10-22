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