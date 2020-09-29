import { withStyles } from "@material-ui/core/styles"

import MuiButton from "@material-ui/core/Button"
import MuiTextField from '@material-ui/core/TextField'

export const ButtonSubmit = withStyles(() => ({
  root: {
    margin: '15px 20px',
  },
}))(MuiButton)

export const TextArea = withStyles(() => ({
  root: {
    margin: '15px 20px',
  },
}))(MuiTextField)