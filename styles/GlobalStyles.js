import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Anton-Regular';
    src: url('../fonts/Anton-Regular.ttf'), url('../fonts/Anton-Regular.woff'), url('../fonts/Anton-Regular.woff2');
  }

  @font-face {
    font-family: 'Avenir-Book';
    src: url('../fonts/Avenir-Book.otf'), url('../fonts/Avenir-Book.woff'), url('../fonts/Avenir-Book.woff2');
  }

  @font-face {
    font-family: 'Avenir-Black';
    src: url('../fonts/Avenir-Black.otf'), url('../fonts/Avenir-Black.woff'), url('../fonts/Avenir-Black.woff2');
  }
  
  html {
    font-size: 16px;

    @media (max-width: 375px) {
      font-size: 14px;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.lightColor};
    font-family: 'Avenir-Book';
    
    ul, li {
      list-style: none;
    }

    input, textarea, button {
      outline: none;
      border: none;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
