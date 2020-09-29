import React, { useState } from 'react'

import { useDrawer } from 'modules/hooks/drawer'

import { Drawer, Center } from 'app/components/Drawer'
import Button from '@material-ui/core/Button'
import LoginPage from './components/Login'
import SignupPage from './components/Signup'

const Search = () => {
  const { setOpenLogin, openLogin } = useDrawer()
  const [ page, setPage ] = useState('login')

  const Page = () => {
    switch (page) {
      case 'login':
        return <LoginPage setPage={setPage} setOpenLogin={setOpenLogin}/>
      
      case 'signup':
        return <SignupPage setPage={setPage} setOpenLogin={setOpenLogin}/>
    
      default:
        return null
    }
  }

  return (
    <Drawer anchor="right" open={openLogin} onClose={() => setOpenLogin(false)}>
      <Button color="secondary" onClick={() => setOpenLogin(false)}>
        Fechar
      </Button>
      <Center>
        <Page />
      </Center>
    </Drawer>
  )
}

export default Search