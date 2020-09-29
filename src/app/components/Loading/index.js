import React from 'react'
import styled from 'styled-components'

import CircularProgress from '@material-ui/core/CircularProgress'

const Container = styled.div`
  width: 100%;
  text-align: center;
`

const Loading = () => 
  <Container>
    <CircularProgress />
  </Container>

export default Loading