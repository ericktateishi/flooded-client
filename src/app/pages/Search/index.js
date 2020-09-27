import React, { useState } from 'react'

import { useDrawer } from 'modules/hooks/drawer'

import SearchField from 'app/components/SearchField'
import { Drawer } from 'app/components/Drawer'
import Post from 'app/components/Post'
import { PostContainer } from 'app/components/Post/styled'
import Button from '@material-ui/core/Button'

const mock = [
  {
    id: "5f67b88074803640de5673cf",
    location: "Paulista",
    createdAt: "2020-09-20T20:16:00.161+00:00",
    user: {
      name: "Neymar da Silva"
    }
  },
  {
    id: "4f67b88074803640de5674cf",
    location: "Pinheiros",
    createdAt: "2020-09-23T20:16:00.161+00:00",
    user: {
      name: "Cleber Machado"
    }
  },
  {
    id: "3f67b88074803640de5673qf",
    location: "Santana",
    createdAt: "2020-09-21T20:16:00.161+00:00",
    user: {
      name: "Erick Tateishi Jesus"
    }
  },
  {
    id: "2f67b88074803640de5673cf",
    location: "Paulista",
    createdAt: "2020-09-20T20:16:00.161+00:00",
    user: {
      name: "Neymar da Silva"
    }
  },
  {
    id: "1f67b88074803640de5674cf",
    location: "Pinheiros",
    createdAt: "2020-09-23T20:16:00.161+00:00",
    user: {
      name: "Cleber Machado"
    }
  },
]

const Search = () => {
  const [value, setValue] = useState('')
  const { setOpenSearch, openSearch } = useDrawer()

  return (
    <Drawer anchor="top" open={openSearch} onClose={() => setOpenSearch(false)}>
      <Button color="secondary" onClick={() => setOpenSearch(false)}>
        Fechar
      </Button>
      <SearchField value={value} setValue={setValue} label="Pesquisar" autoFocus/>
      <PostContainer>
        {mock.map(f => 
          <Post key={f.id} flood={f}/>)}
      </PostContainer>
    </Drawer>
  )
}

export default Search