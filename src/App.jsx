import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './assets/theme/Theme';
import { styleReset } from 'react95';
import WindowContext from './contexts/WindowContext';
import Background from './components/Background';
import BaseView from './views/BaseView';

import original from 'react95/dist/themes/original';

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';


const GlobalStyle = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  html, body {
    background-color: black;
    height: 100%;
    margin: 0;
    width: 100%;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <WindowContext>
        <ThemeProvider theme={{...original, ...theme}}>
          <Background>
            <BaseView />
          </Background>
        </ThemeProvider>
      </WindowContext>
    </>
)
}

export default App;
