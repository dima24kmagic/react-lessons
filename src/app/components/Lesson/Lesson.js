import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid/Grid'
import ReactMarkdown from 'react-markdown'
import Collapse from '@material-ui/core/Collapse'
import { lessonPropType } from '../../PropTypes/PropTypes'
import LessonHeader from './LessonHeader/LessonHeader'
import CodeBlock from '../CodeBlock'
import HtmlParser from '../HtmlParser/HtmlParser'

const propTypes = {
  /** Lesson proptype */
  lesson: lessonPropType.isRequired,
  /** @ignore */
  classes: PropTypes.shape().isRequired,
}

const defaultProps = {}

const styles = theme => ({
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.fontFamily,
    alignItems: 'center',
    padding: '16px 0px',
    paddingTop: 28,
  },
  root: {
    width: '100%',
  },
  lesson: {
    width: 800,
  },
})

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
          <div className={classes.infoContainer}>
            <div className={classes.lesson}>
              <ReactMarkdown
                source={lesson.body}
                renderers={{ code: CodeBlock, html: HtmlParser }}
              />
            </div>
          </div>
        </Grid>
      </Collapse>
    </Grid>
  )
}

Lesson.propTypes = propTypes
Lesson.defaultProps = defaultProps

const enhance = withStyles(styles)

export default enhance(Lesson)
