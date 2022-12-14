import styled from "styled-components";

export const PageBlock = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
a{
  align-self: start;
  margin-bottom: 20px;
  margin-right: 5px;
}
`
export const BlockHomePost = styled.div`
display: flex;
justify-content: start;
width: 100%;
  p{
    color: #8D8E97;
  }
  span{
    margin:0 8px;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  margin-bottom: 40px;

`

export const BlockImg = styled.div`
  width: 90%;
  height: 500px;
  margin: 20px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
`
export const TextContent = styled.p`
  width: 85%;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  margin: 40px;
`

export const IconBlock = styled.div`
  display: flex;
  height: max-content;
  width: 100%;
  justify-content: space-between;
  padding: 0 40px;
`

export const LikesBlock = styled.div`
  display: flex;
  height: 56px;
`


export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E8E8E8;
  height: 56px;
  width: 88px;
  margin-right: 6px;

  &:hover {
    cursor: pointer;
    svg{
        fill: white;
    }
  }

  &:hover:first-of-type {
    background: #5360CD;
  }

  &:hover:last-of-type {
    background: #FD3419;
  }

  & svg {
    display: flex;
    max-height: 24px;
    max-width: 24px;
  }
`

export const FavoritesBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  background: #E8E8E8;
  width: 270px;
  padding: 0 32px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;

  &:hover {
    cursor: pointer;
    background: #5360CD;
    color: white;
    svg{
      fill: white;
    }
  }

  & svg {
    margin-right: 10px;
  }

`