import styled from "styled-components";

const FlexBlock = `
  display: flex;
  flex-direction: column;
`

export const RegistryForm = styled.div`
  ${FlexBlock};
  margin: 50px auto 0;
  padding: 40px;
  height: 472px;
  width: 620px;
`

export const RegistryFormLabel = styled.label`

`
export const RegistryFormInput = styled.input<{ error?: boolean }>`
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

export const RegistryFormLink = styled.a`
margin-bottom: 48px;
  span{
    color:blue
  }
`

export const RegistryFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  background: #2231AA;
  border-radius: 2px;
  color: white;
  margin-bottom: 24px;

`