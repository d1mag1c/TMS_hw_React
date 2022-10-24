import styled from "styled-components";

export const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  border-radius: 10px;
  border: 2px solid ${props => props.error ? 'red' : 'grey'};
  margin-bottom: 40px;
`