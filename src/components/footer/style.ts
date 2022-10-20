import styled from "styled-components";

export const FooterBlock = styled.section`
  display: flex;
  justify-content: space-between;
  height: 92px;
  margin: 72px auto 0;
  width: 1120px;
  border-top: 1px solid #bdbdbd;
  @media (max-width: 1180px) {
    width: 100%;
    padding: 0 20px;
  }
`

export const FooterContent = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #8D8E97;
    `