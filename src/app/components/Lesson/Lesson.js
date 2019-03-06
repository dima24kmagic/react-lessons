import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid/Grid'
import ReactMarkdown from 'react-markdown'
import Collapse from '@material-ui/core/Collapse'

import { lessonPropType } from '../../PropTypes/PropTypes'
import LessonHeader from './LessonHeader/LessonHeader'
import CodeBlock from '../CodeBlock'
import Typography from '@material-ui/core/es/Typography/Typography'

const propTypes = {
  /** Lesson proptype */
  lesson: lessonPropType.isRequired,
  /** @ignore */
  classes: PropTypes.shape().isRequired,
}

const defaultProps = {}

const styles = {}

/**
 * Lesson component
 */
function Lesson({ classes, lesson }) {
  const [expanded, setExpanded] = useState(true)
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
          <Typography variant="body2">
            <ReactMarkdown
              source={lesson.body}
              renderers={{ code: CodeBlock }}
            />
          </Typography>
        </Grid>
      </Collapse>
    </Grid>
  )
}

Lesson.propTypes = propTypes
Lesson.defaultProps = defaultProps

const enhance = withStyles(styles)

export default enhance(Lesson)
