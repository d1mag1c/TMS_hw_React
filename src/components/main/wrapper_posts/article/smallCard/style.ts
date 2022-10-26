import styled from "styled-components";

export const SmallCardBlock = styled.div`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  height: 205px;
  margin-bottom: 40px;
`
export const SmallCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`

export const SmallCardDate = styled.p`
  display: flex;
  height: 10%;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8D8E97;

`
export const SmallCardTitle = styled.p`
  display: flex;
  overflow: hidden;
  height: 40%;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`

export const SmallCardImageBlock = styled.div`
  width: 50%;
display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SmallCardImg = styled.img`
  width: 100%;
  height: 40%;
`