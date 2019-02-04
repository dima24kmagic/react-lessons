import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid/Grid'
import Typography from '@material-ui/core/Typography'
import { lessonPropType } from '../../PropTypes/PropTypes'

const propTypes = {
  /** Lesson proptype */
  lesson: lessonPropType,
  /** @ignore */
  classes: PropTypes.shape().isRequired,
}

const defaultProps = {}

const styles = {
  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 300,
    '@media(max-width: 768px)': {
      width: '70vw',
    },
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  navLink: {
    textDecoration: 'none',
  },
  intro: {
    color: '#121212',
  },
  itemIntro: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: '16px 0',
  },
  burgerWrapper: {
    position: 'fixed',
    top: 32,
    right: 32,
    height: 48,
    width: 48,
    background: 'rgba(0,0,0,.1)',
  },
}

/**
 * Lesson component
 */
function Lesson({ classes, lesson }) {
  return (
    <Grid container>
      <Typography>HELLO</Typography>
    </Grid>
  )
}

Lesson.propTypes = propTypes
Lesson.defaultProps = defaultProps

const enhance = withStyles(styles)

export default enhance(Lesson)
