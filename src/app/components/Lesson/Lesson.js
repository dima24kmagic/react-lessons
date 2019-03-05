import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid/Grid'
import ReactMarkdown from 'react-markdown'
import Collapse from '@material-ui/core/Collapse'

import { lessonPropType } from '../../PropTypes/PropTypes'
import LessonHeader from './LessonHeader/LessonHeader'

const propTypes = {
  /** Lesson proptype */
  lesson: lessonPropType.isRequired,
  /** @ignore */
  classes: PropTypes.shape().isRequired,
}

const defaultProps = {}

const styles = {
  root: {
    padding: '4px 16px',
    borderBottom: '2px solid rgba(0,0,0,.1)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
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
  const [expanded, setExpanded] = useState(false)
  function onExpand() {
    setExpanded(!expanded)
  }
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <LessonHeader
          onExpand={onExpand}
          title={lesson.title}
          expanded={expanded}
        />
      </Grid>
      <Collapse in={expanded}>
        <Grid item>
          <ReactMarkdown source={lesson.body} />
        </Grid>
      </Collapse>
    </Grid>
  )
}

Lesson.propTypes = propTypes
Lesson.defaultProps = defaultProps

const enhance = withStyles(styles)

export default enhance(Lesson)
