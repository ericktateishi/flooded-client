import styled from 'styled-components'
import { withStyles } from "@material-ui/core/styles"

import MuiButton from "@material-ui/core/Button"

export const PostContainer = styled.div`
  padding: 0px 10px 80px;
`

export const Body = styled.div`
  margin-top: 10px;
`

export const ButtonFloating = withStyles(() => ({
  root: {
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    position: 'fixed',
    bottom: '0',
    right: '0',
    margin: '15px 20px',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    '& svg': {
      fontSize: '52px',
    }
  },
}))(MuiButton)