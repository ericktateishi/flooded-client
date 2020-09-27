import React from 'react'

import moment from 'modules/config/moment'

import SwapVertIcon from '@material-ui/icons/SwapVert'
import IconButton from '@material-ui/core/IconButton'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { 
  Paper,
  Title,
  Time,
  User,
  Footer,
  Engagement
} from './styled'

const Post = ({ flood }) => {
  return (
    <Paper>
      <Title>
        {flood.location}
      </Title>
      <Time>
        <AccessTimeIcon />
        {moment(flood.createdAt).fromNow()}
      </Time>
      <User>
        por: {flood.user.name}
      </User>
      <Footer>
        <Engagement>
          <SwapVertIcon/>
          <span>10</span>
        </Engagement>
        <div>
          <IconButton aria-label="true fact">
            <CheckIcon />
          </IconButton>
          <IconButton aria-label="false fact">
            <CloseIcon />
          </IconButton>
        </div>
      </Footer>
    </Paper>
  )
}

export default Post