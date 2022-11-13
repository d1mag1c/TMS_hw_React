import styled from "styled-components";

export const BigCardBlock = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  border-bottom: 1px solid #bdbdbd;
`

export const BigCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`

export const BigCardDate = styled.p`
  color: #8D8E97;
`

export const BigCardTitle = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  height: 120px;
  overflow: hidden;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`

export const BigCardText = styled.p`
  font-size: 16px;
  line-height: 28px;
  color: #8D8E97;
  display: flex;
  height: 200px;
  overflow: hidden;
`

export const BigCardImageBlock = styled.div`
  margin-left: 32px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const BigCardImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: fill;
`