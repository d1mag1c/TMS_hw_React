import styled from "styled-components";

const FlexBlock = `
  display: flex;
  flex-direction: column;
`

export const RegistryBlock = styled.section`
  ${FlexBlock};
  position: absolute;
  width: 1120px;
  height: 1000px;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
  background: #F3F3F3;
  z-index: 5;
  color: black;
  padding: 40px;
  @media (max-width: 1180px) {
    width: 100%;
    padding: 0 20px;
  }
`

export const RegistryTitle = styled.div`
  ${FlexBlock};
  height: 130px;

  & h1 {
    font-weight: 700;
    font-size: 56px;
    line-height: 80px;
  }
`