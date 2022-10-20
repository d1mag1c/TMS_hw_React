import styled from "styled-components";

export const BurgerListBlock = styled.div`
  position: absolute;
  width: 230px;
  min-height: max-content;
  background: white;
  top: 70px;
  z-index: 2;
  height: 850px;
`

export const BurgerListUl = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const BurgerListLi = styled.li<{ bg?: boolean, white?: boolean }>`
  width: 100%;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  border-bottom: 1px solid #bdbdbd;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  background: ${(props) => (props.bg ? '#0057ff' : 'white')};
  color: ${(props) => (props.white ? 'white' : 'black')};

  &:first-of-type, &:nth-last-of-type(2) {
    border-top: 1px solid #bdbdbd;
  }

  &:hover {
    background: blue;
    color: white;
  }

  &:nth-last-of-type(2) {
    margin-top: auto;
    padding: 0;

    &:hover {
      background: none;
    }
  }

  &:last-of-type {
    background: #E8E8E8;
    border-bottom: none;

    &:hover {
      color: red;
    }
  }
`

export const IconSunMoonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  &:first-of-type {
    border-right: 1px solid #bdbdbd;
  }

  &:hover {
    background: #E8E8E8;
  }
`