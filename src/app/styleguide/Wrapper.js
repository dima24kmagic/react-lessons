/* eslint-disable */
import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import theme from '../theme'

function Wrapper({ children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default Wrapper
