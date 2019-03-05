import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid/Grid'
import Typography from '@material-ui/core/Typography'

import { lessonPropType } from '../../PropTypes/PropTypes'
import Lesson from '../Lesson'

const propTypes = {
  /** Title of a section */
  title: PropTypes.string,
  /** Section lessons */
  lessons: PropTypes.arrayOf(lessonPropType),
  /** @ignore */
  classes: PropTypes.shape().isRequired,
}

const defaultProps = {
  title: '',
  lessons: [],
}

const styles = {
  sectionTitle: {
    fontWeight: 800,
  },
}

/**
 * Lessons grouped in section
 */
export function LessonsSection({ classes, title, lessons }) {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="display2" className={classes.sectionTitle}>
          {title}
        </Typography>
      </Grid>
      {lessons.map(lesson => (
        <Grid item key={lesson.id}>
          <Lesson lesson={lesson} />
        </Grid>
      ))}
    </Grid>
  )
}

LessonsSection.propTypes = propTypes
LessonsSection.defaultProps = defaultProps

const enhance = withStyles(styles)

export default enhance(LessonsSection)
