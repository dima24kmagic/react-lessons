import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { lessons } from '../../components/LessonsSection/constants'
import LessonsSection from '../../components/LessonsSection'

class Lessons extends Component {
  render() {
    return (
      <Grid container>
        <Grid item style={{ width: '100%' }}>
          <LessonsSection
            title="Основы ReactJS"
            lessons={lessons}
            {...this.props}
          />
        </Grid>
      </Grid>
    )
  }
}

export default Lessons
