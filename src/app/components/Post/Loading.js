import React from 'react'

import { isMobile } from 'react-device-detect'

import Skeleton from '@material-ui/lab/Skeleton'

const Loading = () => [0,1,2,3,4,5].map(i => 
  <Skeleton key={i} variant="rect" width={isMobile ? '100%' : '320px'} height={140} 
    style={isMobile ? {marginBottom: 10} : {margin: '0px 10px 20px'}}/>
)

export default Loading