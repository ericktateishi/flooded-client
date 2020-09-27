import React, { useState } from 'react'

import SearchField from 'app/components/SearchField'
import Post from 'app/components/Post'
import AddIcon from '@material-ui/icons/Add'
import { PostContainer, Body, ButtonFloating } from './styled'
import Search from 'app/pages/Search'

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
    id: "5f67b88074803640de5674cf",
    location: "Pinheiros",
    createdAt: "2020-09-23T20:16:00.161+00:00",
    user: {
      name: "Cleber Machado"
    }
  },
  {
    id: "5f67b88074803640de5673qf",
    location: "Santana",
    createdAt: "2020-09-21T20:16:00.161+00:00",
    user: {
      name: "Erick Tateishi Jesus"
    }
  },
  {
    id: "5f67b88074803640de5673cf",
    location: "Paulista",
    createdAt: "2020-09-20T20:16:00.161+00:00",
    user: {
      name: "Neymar da Silva"
    }
  },
  {
    id: "5f67b88074803640de5674cf",
    location: "Pinheiros",
    createdAt: "2020-09-23T20:16:00.161+00:00",
    user: {
      name: "Cleber Machado"
    }
  },
]

const Feed = () => {
  const [showSearch, setShowSeach] = useState(false)

  return (
    <Body>
      <SearchField 
        value="" setValue={() => {}} 
        onClick={() => setShowSeach(true)}
        placeholder="pesquisar local"/>

      <PostContainer>
        {mock.map(f => 
          <Post key={f.id} flood={f}/>)}
      </PostContainer>

      <ButtonFloating variant="contained" color="primary">
        <AddIcon />
      </ButtonFloating>

      <Search open={showSearch} setOpen={setShowSeach}/>
    </Body>
  )
}

export default Feed