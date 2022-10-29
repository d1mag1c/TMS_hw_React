import styled from "styled-components";

const FlexBlock = `
  display: flex;
  flex-direction: column;
`

export const RegistryBlock = styled.section`
  ${FlexBlock};
`

export const RegistryTitle = styled.div`
  ${FlexBlock};
  height: 100px;

  & h1 {
    font-weight: 700;
    font-size: 56px;
    line-height: 80px;
  }
  & a {
    width: max-content;
  }
`

export const RegistryForm = styled.div`
  ${FlexBlock};
  margin: 0 auto;
  padding: 40px;
  height: max-content;
  width: 624px;
`

export const RegButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  background: #2231AA;
  border-radius: 2px;
  color: white;
  margin: 24px 0;

`

export const TextAsk = styled.p`
  align-self: center;

  span {
    margin-left: 5px;
    cursor: pointer;
    color: blue
  }
`

export const ButtonTest = styled.button`
  width: max-content;
  margin: 0 auto;
`