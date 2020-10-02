import React from 'react'

import { useDrawer } from 'modules/hooks/drawer'
import { usePost } from 'modules/hooks/post'
import { useUser } from 'modules/hooks/user'

import SearchField from 'app/components/SearchField'
import Post from 'app/components/Post'
import PostLoading from 'app/components/Post/Loading'
import { PostContainer } from 'app/components/Post/styled'
import AddIcon from '@material-ui/icons/Add'
import { Body, ButtonFloating } from './styled'
import Button from '@material-ui/core/Button'
import Sunny from 'app/components/Sunny'

const Feed = () => {
  const { setOpenSearch, setOpenPost, setOpenLogin } = useDrawer()
  const { posts, mainLoading, addPage, isLoading, hasMore } = usePost()
  const { user } = useUser()

  return (
    <Body>
      <SearchField 
        value="" setValue={() => {}} 
        onClick={() => setOpenSearch(true)}
        placeholder="pesquisar local"/>

      <PostContainer>
        {mainLoading ? 
          <PostLoading /> :
          posts.map(f => <Post key={f.id} flood={f}/>)
        }
        {(!mainLoading && posts.length < 1) && 
          <Sunny 
            title="Não há nenhum resultado" 
            subtitle="Por enquanto está tudo seco!"/>
        }
        {hasMore && <Button color="primary" onClick={addPage} disabled={isLoading} fullWidth>carregar mais</Button>}
      </PostContainer>

      <ButtonFloating variant="contained" color="primary" onClick={() => (user && user.id) ? setOpenPost(true) : setOpenLogin(true)}>
        <AddIcon />
      </ButtonFloating>
    </Body>
  )
}

export default Feed