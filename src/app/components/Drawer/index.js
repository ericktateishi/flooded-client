import styled from 'styled-components'
import { withStyles } from "@material-ui/core/styles"

import MuiDrawer from "@material-ui/core/Drawer"

export const Drawer = withStyles(() => ({
  paper: {
    height: "100%",
    width: "100%",
  },
}))(MuiDrawer)

export const DrawerHorizontal = withStyles(() => ({
  paper: {
    height: "100%",
    width: "100%",
    '@media screen and (min-width: 900px)': {
      width: '320px',
    }
  },
}))(MuiDrawer)

export const DrawerVertical = withStyles(() => ({
  paper: {
    height: "100%",
    width: "100%",
    '@media screen and (min-width: 900px)': {
      height: '320px',
    }
  },
}))(MuiDrawer)

export const Center = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`