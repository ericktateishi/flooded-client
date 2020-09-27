import React, { useState } from 'react'

import SearchField from 'app/components/SearchField'
import { SwipeableDrawer } from 'app/components/Drawer'

const Search = ({ open, setOpen, }) => {
  const [value, setValue] = useState('')

  return (
    <SwipeableDrawer anchor="top" open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
      <SearchField value={value} setValue={setValue} label="Pesquisar" autoFocus/>
    </SwipeableDrawer>
  )
}

export default Search