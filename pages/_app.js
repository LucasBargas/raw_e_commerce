import GlobalStyle from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Themes';
import Header from '../layout/Header/Header';
import MainContent from '../styles/MainContent';
import { UserStorage } from '../utils/Context';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <UserStorage>
        <Header />
        <MainContent>
          <Component {...pageProps} />
        </MainContent>
      </UserStorage>
    </ThemeProvider>
  )
}

export default App;
