import styled from "styled-components";

export const InputFormBlock = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  height: 50px;
  margin: 3px 0;
  padding-left: 10px;
  border-radius: 10px;
  border: 2px solid ${props => props.error ? 'red' : 'grey'};
`

export const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
`

export const ErrorMessage = styled.span`
    color: red;
    `