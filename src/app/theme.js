import { createMuiTheme } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#7c4dff',
    },
    colors: {
      green: '#6BFF83',
    },
  },
})

export default theme