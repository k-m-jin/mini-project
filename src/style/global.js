import { createGlobalStyle } from 'styled-components'
import GmarketSansBold from '/assets/fonts/GmarketSansTTFBold.ttf'
import GmarketSansLight from '/assets/fonts/GmarketSansTTFLight.ttf'
import GmarketSansMedium from '/assets/fonts/GmarketSansTTFMedium.ttf'
import { reset } from 'styled-reset'

const GlobalStyled = createGlobalStyle`

  @font-face {
    font-family: "GmarketSansBold";
    src: url(${GmarketSansBold}) format('truetype');
  }
  @font-face {
    font-family: "GmarketSansLight";
    src: url(${GmarketSansLight}) format('truetype');
  }
  @font-face {
    font-family: "GmarketSansMedium";
    src: url(${GmarketSansMedium}) format('truetype');
  }
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  body {
    font-family: 'GmarketSansMedium';
    font-size: ${(props) => props.theme.size.base};
  }
  #root {
    width: 100vw;
    height: 100vh;
    padding: 3rem 2rem;
  }
  .root {
    padding-bottom: 9rem;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyled
