import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid/Grid'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/es/Tooltip/Tooltip'
import { getOr } from 'lodash/fp'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import { lessonPropType } from '../../PropTypes/PropTypes'
import ParsedLesson from '../Lesson/ParsedLesson'
import SideMenu from '../SideMenu'

const propTypes = {
  /** Title of a section */
  title: PropTypes.string,
  /** Section lessons */
  lessons: PropTypes.arrayOf(lessonPropType),
  /** @ignore */
  classes: PropTypes.shape().isRequired,
  /** @ignore */
  match: PropTypes.shape().isRequired,
}

const defaultProps = {
  title: '',
  lessons: [],
}

const styles = {
  root: {
    background: '#262b33',
    width: '100%',
    height: '100vh',
    margin: '0 auto',
    flexWrap: 'nowrap',
  },
  bootstrapTooltip: {
    marginBottom: 0,
    marginLeft: -6,
    backgroundColor: '#151515',
    color: 'white',
  },
  fullW: {
    width: '100%',
    textDecoration: 'none',
  },

  lessonsDescription: {
    width: '100%',
    height: '100%',
    borderRight: '1px solid #424242',
    background: '#262b33',
  },
  title: {
    padding: '24px 0 24px 16px',
    fontWeight: 800,
    color: '#0099ff',
    borderBottom: '1px solid #424242',
  },
  header: {
    marginBottom: 8,
  },

  lessonItemNav: {
    display: 'flex',
    alignItems: 'center',
    height: 32,
    paddingLeft: '32px',
    maxWidth: '100%',
    width: '100%',
  },
  lessonName: {
    maxWidth: '100%',
    color: '#71717a',
    transition: 'color .15s, transform .15s',
    cursor: 'pointer',
    '&:hover': {
      color: '#b6b6c4',
      transform: 'translateX(4px)',
    },
  },
  currentLesson: {
    color: '#0099ff',
  },

  lessonBody: {
    width: '100%',
    background: '#dfdfdf',
  },

  lessonViewContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '36px 48px 0',
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
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
export function LessonsSection({ classes, title, lessons, match }) {
  const currentLessonId = getOr(null, ['params', 'id'], match)
  const currentLesson = lessons.filter(({ id }) => id === currentLessonId)
  return (
    <Grid container className={classes.root}>
      <SideMenu>
        <Grid item className={classes.lessonsDescription}>
          <Grid container direction="column">
            <Grid item className={classes.fullW}>
              <Typography
                gutterBottom
                variant="title"
                className={classes.title}
              >
                {`${title}:`}
              </Typography>
            </Grid>
            <Grid item className={classes.fullW}>
              <Grid container direction="column">
                {lessons.map(({ title: lessonTitle, id }) => {
                  const isCurrent = currentLessonId === id
                  const lessonClassName = cn(classes.lessonName, {
                    [classes.currentLesson]: isCurrent,
                  })
                  return (
                    <Grid item className={classes.lessonItemNav} key={id}>
                      <Tooltip
                        title={lessonTitle}
                        placement="top-start"
                        enterDelay={350}
                        classes={{
                          tooltip: classes.bootstrapTooltip,
                        }}
                      >
                        <Link to={`/lessons/${id}`} className={classes.fullW}>
                          <Typography
                            variant="body1"
                            noWrap
                            className={lessonClassName}
                          >
                            {lessonTitle}
                          </Typography>
                        </Link>
                      </Tooltip>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SideMenu>
      <Grid item className={classes.lessonBody}>
        <Grid container className={classes.lessonViewContainer}>
          <Grid item className={classes.lessonView}>
            {currentLesson.length > 0 && (
              <ParsedLesson lesson={currentLesson[0]} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

LessonsSection.propTypes = propTypes
LessonsSection.defaultProps = defaultProps

const enhance = withStyles(styles)

export default enhance(LessonsSection)
