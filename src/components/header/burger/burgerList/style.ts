import styled from "styled-components";

export const BurgerListBlock = styled.div<{ show?: boolean }>`
  position: absolute;
  width: 230px;
  min-height: max-content;
  background: white;
  top: 70px;
  left: 0;
  height: 850px;
  display: ${props => props.show ? 'block' : 'none'};
  z-index: 10;
`

export const BurgerListUl = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
`

type IBurgerLi = {
    bg?: boolean,
    white?: boolean,
}

export const BurgerListLi = styled.li<IBurgerLi>`
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
  background: ${(props) => (props.bg ? '#2231AA;' : 'white')};
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

  &:nth-of-type(4) {
    background: #E8E8E8;
    border-bottom: none;

    &:hover {
      color: red;
    }
  }
`

export const IconSunMoonBlock = styled.div<{fills?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  & svg {
    fill: ${props => props.fills ? '#DADADA;' : 'black'};
  }

  &:first-of-type {
    border-right: 1px solid #bdbdbd;
  }

  &:hover {
    background: ${props => props.fills ? 'rgba(225,225,225,0.38)' : null};;

    svg {
      fill: ${props => props.fills ? 'red' : 'black'};
    }
  }
`