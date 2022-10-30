import styled from "styled-components";
import {MouseEventHandler} from "react";

export const MiddleCardBlock = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #bdbdbd;
`

export const MiddleCardImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: inherit;
`

export const MiddleCardDate = styled.p`
height: 10%;
  display: flex;
  align-items: center;
  color: #8D8E97;
`

type TitleType = {
    onClick: MouseEventHandler<HTMLParagraphElement>
}

export const MiddleCardTitle = styled.p<TitleType>`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  height: 20%;
  
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`

export const MiddleCardOther = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`