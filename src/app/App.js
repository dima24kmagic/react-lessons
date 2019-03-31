import React, { Fragment } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core'
import theme from './theme'
import Home from './screens/Home/Home'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <Fragment>
          <Switch>
            <Route path="/:id" component={Home} />
            <Route path="/" component={Home} />
          </Switch>
        </Fragment>
      </HashRouter>
    </MuiThemeProvider>
  )
}

export default App
