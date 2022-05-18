import GlobalStyle from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Themes';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App;
