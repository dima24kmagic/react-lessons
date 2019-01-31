/* eslint-disable */
import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import theme from '../theme'

function Wrapper({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {children}
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  )
}

export default Wrapper
