import React, { Component } from 'react'
import { lessons } from '../../components/LessonsSection/constants'
import LessonsSection from '../../components/LessonsSection'
import Grid from '@material-ui/core/Grid'

class Lessons extends Component {
  render() {
    return (
      <Grid container style={{ paddingBottom: '20vh' }}>
        <Grid item style={{ width: '100%' }}>
          <LessonsSection title="Основы Реакта" lessons={lessons} />
        </Grid>
      </Grid>
    )
  }
}

export default Lessons
