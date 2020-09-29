import React from 'react'

import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined'
import { Container } from './styled'

const Sunny = ({title, subtitle}) => 
  <Container>
    <WbSunnyOutlinedIcon />
    <h5>
      {title}
    </h5>
    <p>
      {subtitle}
    </p>
  </Container>

export default Sunny