import React from 'react'

import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'

import {
  Container
} from './styled'

const SearchField = ({ value, setValue, onClick, ...props }) => {
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Container onClick={onClick ? onClick : () => {}}>
      <SearchIcon/>
      <TextField
        value={value}
        onChange={handleChange}
        fullWidth
        focused
        {...props}/>
    </Container>
    
  )
}

export default SearchField