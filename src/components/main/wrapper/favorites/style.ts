import styled from "styled-components";

export const HeadTitle = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  margin-bottom: 60px;
`

export const FavoritesCardsBlock = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  border-bottom: 1px solid #DADADA;
  padding: 15px;
`

export const CardContent = styled.div`
  width: 100%;
  height: 100px;
  display: flex;

`

export const CardImgBlock = styled.div`
  width: 100px;
  height: 100px;
  min-width: 100px;
  margin-right: 32px;

`
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
`

export const Title = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`

export const Date = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8D8E97;
    `

export const Other = styled.div`
    display: flex;
  justify-content: space-between;
  height: 25px;
  margin: 40px 0;
  & div{
    height: 25px;
  }
    `