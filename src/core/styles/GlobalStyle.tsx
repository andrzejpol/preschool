import { createGlobalStyle } from 'styled-components';
import { FontSizes, FontVariables } from './FontVariables';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${FontVariables.regular};
    font-size: ${FontSizes.fontSizeBase};
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
