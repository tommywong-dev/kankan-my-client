import React, { useEffect, StrictMode } from 'react';
import type { AppProps } from 'next/app'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";

import Meta from '../components/Core/Meta';
import '../styles/globals.css'
import store from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  })

  return (
    <StrictMode>
      <Meta />
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Component {...pageProps} />
        </Provider>
      </MuiThemeProvider>
    </StrictMode>
  )
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    background: {
      default: '#e0f2f1'
    }
  }
})

const makeStore = () => store;

export default withRedux(makeStore)(MyApp)
