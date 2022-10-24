import styled from "styled-components";

export const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  border-radius: 10px;
  border: 2px solid ${props => props.error ? 'red' : 'grey'};
  &:first-of-type{
    margin-bottom: 40px;
  }
  &:nth-of-type(2){
    margin-bottom: 10px;
  }
`

export const Link = styled.a`
  margin-bottom: 48px;

`
