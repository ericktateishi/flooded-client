import React, { useState } from 'react'

import { useDrawer } from 'modules/hooks/drawer'
import { useUser } from 'modules/hooks/user'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import WavesIcon from '@material-ui/icons/Waves'
import AppTitle from 'app/styled/AppTitle'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const Header = () => {
  const { setOpenLogin } = useDrawer()
  const { user, logout } = useUser()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLogout = () => {
    handleClose()
    logout()
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" aria-label="logo" color="inherit">
          <WavesIcon />
        </IconButton>
        <AppTitle>
          flood st.
        </AppTitle>
        {(user && user.id) ?
          <Avatar 
            onClick={handleClick}
            alt={user.name} 
            src="/avatar.png" 
            style={{cursor: 'pointer'}}/>
        :
          <Button color="inherit" onClick={() => setOpenLogin(true)}>
            Login
          </Button>
        }
      </Toolbar>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Header