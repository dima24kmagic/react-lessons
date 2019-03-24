import React, { Component, Fragment } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core'
import Lessons from './screens/Lessons/Lessons'
import theme from './theme'

class App extends Component {
  constructor(props) {
    super(props)
    this.links = [{ to: '/lessons', text: 'Уроки' }]
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HashRouter>
          <Fragment>
            <Switch>
              <Route path="/:id" component={Lessons} />
              <Route path="/" component={Lessons} />
            </Switch>
          </Fragment>
        </HashRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
