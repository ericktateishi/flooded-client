import React from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import Header from 'app/components/Header'
import Global from 'app/styled'
import Feed from 'app/pages/Feed'
import AppProvider from "modules/hooks"
import Search from 'app/pages/Search'
import Post from 'app/pages/Post'
import Login from 'app/pages/Login'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#248dfa",
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
      <AppProvider>
        <Global />
        <Header/>
        <Feed />
        <Search />
        <Post />
        <Login />
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
