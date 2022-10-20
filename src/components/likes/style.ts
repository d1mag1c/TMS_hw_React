import styled from "styled-components";

export const LikesBlock = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`

export const LikesP = styled.p`
  margin: 0 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`

export const LikeIcon = styled.span`
  width: 20px;
  margin: 0 10px;

  svg {
    &:hover {
      fill: red;
      cursor: pointer;
    }
  }
`






