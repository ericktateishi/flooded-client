import { withStyles } from "@material-ui/core/styles"

import MuiSwipeableDrawer from "@material-ui/core/SwipeableDrawer"

export const SwipeableDrawer = withStyles(() => ({
  paper: {
    height: "100%",
    width: "100%",
  },
}))(MuiSwipeableDrawer)