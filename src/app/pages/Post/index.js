import React, { useState } from 'react'

import { useDrawer } from 'modules/hooks/drawer'
import { usePost } from 'modules/hooks/post'

import { Drawer, Center } from 'app/components/Drawer'
import Button from '@material-ui/core/Button'
import Loading from 'app/components/Loading'
import {
  TextArea,
  ButtonSubmit
} from './styled'

const Search = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const { setOpenPost, openPost } = useDrawer()
  const { post } = usePost()

  const handlePost = async () => {
    setLoading(true)
    await post({
      location: value
    })
    setLoading(false)
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
        {loading ? 
          <Loading />
        :
          <ButtonSubmit 
            variant="contained" 
            color="primary" 
            onClick={handlePost} 
            disabled={value.length < 3}>
              Informar local
          </ButtonSubmit>
        }
      </Center>
    </Drawer>
  )
}

export default Search