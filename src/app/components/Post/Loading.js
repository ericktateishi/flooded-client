import React from 'react'

import Skeleton from '@material-ui/lab/Skeleton'

const Loading = () => [0,1,2,3,4,5].map(i => 
  <Skeleton key={i} variant="rect" width={'100%'} height={140} style={{marginBottom: 10}}/>
)

export default Loading