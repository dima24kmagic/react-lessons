import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import LessonsSection from '../../components/LessonsSection'
import { lessons } from '../../components/LessonsSection/constants'

class Home extends Component {
  render() {
    return (
      <Grid container>
        <Grid item>
          <LessonsSection title="Basics" lessons={lessons} />
        </Grid>
      </Grid>
    )
  }
}

export default Home
