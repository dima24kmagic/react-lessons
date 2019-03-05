import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core'

import SideMenu from './components/SideMenu'
import Home from './screens/Home/Home'
import Lessons from './screens/Lessons/Lessons'
import About from './screens/About/About'
import theme from './theme'

class App extends Component {
  constructor(props) {
    super(props)
    this.links = [
      { to: '/lessons', text: 'Уроки' },
      { to: '/about', text: 'Обо мне' },
    ]
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Fragment>
            <SideMenu side="right" links={this.links} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/lessons" component={Lessons} />
              <Route path="/about" component={About} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
