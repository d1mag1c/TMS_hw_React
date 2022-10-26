import {createGlobalStyle} from "styled-components";

export const darkTheme = {
    background: "#313037;",
    textColor: "#fff",
    fillColor: "#fff",
}

export const lightTheme = {
    background: "#F3F3F3;",
    textColor: "#000",
    fillColor: "#000"
}
type ThemeType = {
    background: string,
    textColor: string
    fillColor: string
}

export const GlobalStyle = createGlobalStyle`
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
  }
`

export const GlobalStyleBody = createGlobalStyle<{ theme: ThemeType }>`
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
  }

  svg {
    fill: ${props => props.theme.fillColor};
  }
  i{
    border-bottom: 3px solid ${props => props.theme.textColor};
  }
  a:visited{
    color: ${props => props.theme.textColor};
  }
  a:hover {
    color: red;
  }
`

