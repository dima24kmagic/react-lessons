import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid/Grid'
import ParsedLesson from '../ParsedLesson'
import { lessonPropType } from '../../PropTypes/PropTypes'

const propTypes = {
  currentLesson: lessonPropType.isRequired,
  /** @ignore */
  classes: PropTypes.shape().isRequired,
}

const defaultProps = {}

const styles = {
  root: {
    background: '#262b33',
    width: '100%',
    height: '100vh',
    margin: '0 auto',
    flexWrap: 'nowrap',
  },

  lessonBody: {
    width: '100%',
    background: '#fbfbfb',
  },
  lessonViewContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '36px 48px 0',
    height: '100%',
    width: '100%',
    overflowY: 'auto',
    '@media (max-width: 560px)': {
      padding: '24px 8px 0',
    },
  },
  lessonView: {
    maxWidth: 1050,
    width: '100%',
    height: '100%',
  },
}

/**
 * Lessons grouped in section
 */
export function LessonView({ classes, currentLesson }) {
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.lessonBody}>
        <Grid container className={classes.lessonViewContainer}>
          <Grid item className={classes.lessonView}>
            <ParsedLesson lesson={currentLesson} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

LessonView.propTypes = propTypes
LessonView.defaultProps = defaultProps

const enhance = withStyles(styles)

export default enhance(LessonView)
