import GlobalStyle from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Themes';
import Header from '../layout/Header/Header';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default App;
