import {createGlobalStyle} from "styled-components";
import {stateType} from "./store/themeReducer/type";

export const GlobalStyle = createGlobalStyle<{ props: stateType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${({props}) => props.color};
  }

  body {
    background: ${({props}) => props.background};
    color: ${({props}) => props.color};
  }

  svg {
    fill: ${({props}) => props.color};
  }

  i {
    border-bottom: 3px solid ${({props}) => props.color};
  }

  a:visited {
    color: ${({props}) => props.color};
  }

  a:hover {
    color: red;
  }
`

