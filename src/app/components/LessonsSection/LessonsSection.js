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
  sectionItem: {
    borderTop: '2px solid rgba(0,0,0,.3)',
    '&:last-child': {
      borderBottom: '2px solid rgba(0,0,0,.3)',
    },
  },
}

/**
 * Lessons grouped in section
 */
export function LessonsSection({ classes, title, lessons }) {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          gutterBottom
          variant="display2"
          className={classes.sectionTitle}
        >
          {title}
        </Typography>
      </Grid>
      {lessons.map(lesson => (
        <Grid item className={classes.sectionItem} key={lesson.id}>
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
