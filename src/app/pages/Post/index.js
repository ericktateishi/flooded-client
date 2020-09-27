import React, { useState } from 'react'

import { useDrawer } from 'modules/hooks/drawer'

import { Drawer, Center } from 'app/components/Drawer'
import Button from '@material-ui/core/Button'
import {
  TextArea,
  ButtonSubmit
} from './styled'

const Search = () => {
  const [value, setValue] = useState('')
  const { setOpenPost, openPost } = useDrawer()

  const handlePost = () => {
    console.log(value)
    setOpenPost(false)
  }

  return (
    <Drawer anchor="bottom" open={openPost} onClose={() => setOpenPost(false)}>
      <Button color="secondary" onClick={() => setOpenPost(false)}>
        Fechar
      </Button>
      <Center>
        <TextArea label="Local" value={value} onChange={(e) => setValue(e.target.value)}
          multiline
          rows={4}/>
        <ButtonSubmit variant="contained" color="primary" onClick={handlePost}>
          Informar local
        </ButtonSubmit>
      </Center>
    </Drawer>
  )
}

export default Search