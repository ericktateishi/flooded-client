import styled from 'styled-components'
import { withStyles } from "@material-ui/core/styles"

import MuiDrawer from "@material-ui/core/Drawer"

export const Drawer = withStyles(() => ({
  paper: {
    height: "100%",
    width: "100%",
  },
}))(MuiDrawer)

export const Center = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`