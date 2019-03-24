import React, { Component, Fragment } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core'

import SideMenu from './components/SideMenu'
import Home from './screens/Home/Home'
import Lessons from './screens/Lessons/Lessons'
import About from './screens/About/About'
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
              <Route path="/lessons/:id" component={Lessons} />
              <Route path="/lessons" component={Lessons} />
              <Route path="/about" component={About} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Fragment>
        </HashRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
