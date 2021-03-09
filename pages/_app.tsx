import React, { useEffect } from 'react';
import type { AppProps } from 'next/app'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Meta from '../components/Core/Meta';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  })

  return (
    <React.StrictMode>
      <Meta />
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </React.StrictMode>
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

export default MyApp
