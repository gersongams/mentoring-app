import {createGlobalStyle} from 'styled-components';

const theme = {
  fontFamily: '"Roboto", sans-serif',
  colors: {
    primary: '#283593',
    secondary: '#303F9F',
    tertiary: '#1A237E',
    dark: '#090F51',
    background: '#f5f6f8',
    white: 'white',
    black: '#212121',
  },
  breakpoint: {
    phone: '37.5em',
    tabPort: '56.25em',
    tabLand: '75em',
    bigDesktop: '112.5em',
  },
  fontSizes: {
    small: '1.2rem',
    medium: '1.6rem',
    large: '2rem',
  },
  spacing: {
    xs: '0.4rem',
    xls: '0.6rem',
    s: '1.2rem',
    m: '1.6rem',
    g: '2.4rem',
    l: '3.2rem',
    xl: '4.2rem',
  },
};

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;

    @media only screen and (max-width: ${props =>
  props.theme.breakpoint.tabLand}) {
      font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
    }

    @media only screen and (max-width: ${props =>
  props.theme.breakpoint.tabPort}) {
      font-size: 50%; //1 rem = 8px, 8/16 = 50%
    }

    @media only screen and (min-width: ${props =>
  props.theme.breakpoint.bigDesktop}) {
      font-size: 75%; //1rem = 12, 12/16
    }
  }

  body {
    box-sizing: border-box;
    font-family: ${props => props.theme.fontFamily};
    margin: 0 auto;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  ::-moz-selection {
    background: ${props => props.theme.colors.primary};
    color: inherit;
    text-shadow: none;
  }

  ::selection {
      background: ${props => props.theme.colors.primary};
      color: inherit;
      text-shadow: none;
  }
`;

export {theme, GlobalStyle};

