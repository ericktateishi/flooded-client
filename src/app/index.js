import React from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import Header from 'app/components/Header'
import Global from 'app/styled'
import Feed from 'app/pages/Feed'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2468FA",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#DB2955",
      contrastText: "#FFFFFF",
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header/>
      <Feed />
    </ThemeProvider>
  )
}

export default App
