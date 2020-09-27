import React from 'react'

import { useDrawer } from 'modules/hooks/drawer'

import SearchField from 'app/components/SearchField'
import Post from 'app/components/Post'
import { PostContainer } from 'app/components/Post/styled'
import AddIcon from '@material-ui/icons/Add'
import { Body, ButtonFloating } from './styled'

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

const Feed = () => {
  const { setOpenSearch, setOpenPost } = useDrawer()

  return (
    <Body>
      <SearchField 
        value="" setValue={() => {}} 
        onClick={() => setOpenSearch(true)}
        placeholder="pesquisar local"/>

      <PostContainer>
        {mock.map(f => 
          <Post key={f.id} flood={f}/>)}
      </PostContainer>

      <ButtonFloating variant="contained" color="primary" onClick={() => setOpenPost(true)}>
        <AddIcon />
      </ButtonFloating>
    </Body>
  )
}

export default Feed