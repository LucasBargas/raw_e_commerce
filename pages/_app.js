import GlobalStyle from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Themes';
import Header from '../layout/Header/Header';
import MainContent from '../styles/MainContent';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <MainContent>
        <Component {...pageProps} />
      </MainContent>
    </ThemeProvider>
  )
}

export default App;
