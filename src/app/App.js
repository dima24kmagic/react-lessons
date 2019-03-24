import React, { Component, Fragment } from 'react'
import { HashRouter, Route } from 'react-router-dom'
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
            <SideMenu side="right" links={this.links} />
            <Route exact path="/" component={Home} />
            <Route path="/lessons" component={Lessons} />
            <Route path="/about" component={About} />
          </Fragment>
        </HashRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
