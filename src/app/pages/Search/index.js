import React, { useState, useEffect } from 'react'

import { useDrawer } from 'modules/hooks/drawer'
import { usePost } from 'modules/hooks/post'

import SearchField from 'app/components/SearchField'
import { Drawer } from 'app/components/Drawer'
import Post from 'app/components/Post'
import PostLoading from 'app/components/Post/Loading'
import { PostContainer } from 'app/components/Post/styled'
import Button from '@material-ui/core/Button'
import Sunny from 'app/components/Sunny'

const Search = () => {
  const [value, setValue] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const { setOpenSearch, openSearch } = useDrawer()
  const { search } = usePost()
  const [found, setFound] = useState([])

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      
      if (value.length < 3) return
      setIsSearching(true)
      
      const items = await search(value)
      setFound(items)
      
      setIsSearching(false)
    }, 1500)

    return () => clearTimeout(delayDebounceFn)
    // eslint-disable-next-line
  }, [value])

  useEffect(() => {
    setValue('')
    // eslint-disable-next-line
  }, [openSearch])

  return (
    <Drawer anchor="top" open={openSearch} onClose={() => setOpenSearch(false)}>
      <Button color="secondary" onClick={() => setOpenSearch(false)}>
        Fechar
      </Button>
      <SearchField 
        value={value}
        setValue={isSearching ? () => {} : setValue}
        label="Pesquisar"
        autoFocus
      />
      <PostContainer>
        {isSearching && <PostLoading />}

        {(!isSearching && found.length < 1) && 
          <Sunny 
            title="Não há nenhum resultado" 
            subtitle="Digite pelo menos 3 caracteres para pesquisar"/>
        }

        {!isSearching && found.map(f => 
          <Post key={f.id} flood={f}/>)}
      </PostContainer>
    </Drawer>
  )
}

export default Search