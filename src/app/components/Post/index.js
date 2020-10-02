import React, { useMemo, useState } from 'react'

import moment from 'modules/config/moment'
import { useReact } from 'modules/hooks/react'
import { useUser } from 'modules/hooks/user'
import { useDrawer } from 'modules/hooks/drawer'

import SwapVertIcon from '@material-ui/icons/SwapVert'
import IconButton from '@material-ui/core/IconButton'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import Skeleton from '@material-ui/lab/Skeleton'
import { 
  Paper,
  Title,
  Time,
  User,
  Footer,
  Engagement
} from './styled'

const Post = ({ flood }) => {
  const [loading, setLoading] = useState(false)
  const { react } = useReact()
  const { user } = useUser()
  const { setOpenLogin } = useDrawer()

  const validation = useMemo(() => {
    if (!flood.reactions || flood.reactions.length < 1) return 0

    const approveds = flood.reactions.filter(r => r.type === 'approved')
    const disapproveds = flood.reactions.filter(r => r.type === 'disapproved')

    return (approveds.length - disapproveds.length)
  }, [flood])

  const currentReaction = useMemo(() => {
    if (!flood.reactions || flood.reactions.length < 1) return null

    const userReaction = flood.reactions.find(r => user && r.user === user.id)

    if (!userReaction || !userReaction.type) return null
    return userReaction.type
  }, [flood, user])

  const action = async (type) => {
    setLoading(true)
    await react(flood.id, type)
    setLoading(false)
  }

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
        <Engagement points={validation}>
          <SwapVertIcon/>
          <span>{validation}</span>
        </Engagement>
        {loading ? 
          <Skeleton width={100} height={50}/> :
          <div>
            <IconButton aria-label="true fact" onClick={() => !user || !user.id ? setOpenLogin(true) : action("approved")} 
              color={currentReaction === "approved" ? "primary" : "default"}>
                <CheckIcon />
            </IconButton>
            <IconButton aria-label="false fact" onClick={() => !user || !user.id ? setOpenLogin(true) : action("disapproved")}
              color={currentReaction === "disapproved" ? "secondary" : "default"}>
                <CloseIcon />
            </IconButton>
          </div>
        }
      </Footer>
    </Paper>
  )
}

export default Post