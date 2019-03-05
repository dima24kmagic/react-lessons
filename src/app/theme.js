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
      lightGrey: 'rgba(0,0,0,.3)',
    },
  },
})

export default theme
