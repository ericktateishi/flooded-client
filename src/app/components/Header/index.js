import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import WavesIcon from '@material-ui/icons/Waves'
import AppTitle from 'app/styled/AppTitle'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" aria-label="logo" color="inherit">
          <WavesIcon />
        </IconButton>
        <AppTitle>
          flood st.
        </AppTitle>
        <Button color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header