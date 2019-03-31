import React, { Fragment, useState } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid/Grid'
import cn from 'classnames'
import IconButton from '@material-ui/core/IconButton'
import MenuIcn from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import SwipeableDrawer from '@material-ui/core/es/SwipeableDrawer/SwipeableDrawer'
import { lessonPropType } from '../../PropTypes/PropTypes'

const propTypes = {
  /** Current lesson in URL */
  currentLessonId: string.isRequired,
  /** All lessons */
  lessons: arrayOf(lessonPropType),
  /** @ignore */
  classes: shape().isRequired,
}

const defaultProps = {
  lessons: [],
}

const styles = {
  burgerWrapper: {
    position: 'fixed',
    top: 11,
    left: 18,
    '@media (max-width: 560px)': {
      width: 52,
      right: 0,
      top: 0,
      left: 'auto',
    },
  },

  // Styling of a side menu content
  fullW: {
    width: '100%',
    textDecoration: 'none',
  },

  lessonsDescription: {
    width: 400,
    maxWidth: '80vw',
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
}

/**
 * Side menu component with navigation in it
 */
function SideMenu({ classes, lessons, currentLessonId }) {
  const [isOpen, setIsOpen] = useState(true)
  const onMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  const renderLessonTitleLinks = () =>
    lessons.map(({ title: lessonTitle, id: lessonId }) => {
      const isCurrent = currentLessonId === lessonId
      const lessonClassName = cn(classes.lessonName, {
        [classes.currentLesson]: isCurrent,
      })
      return (
        <Grid item className={classes.lessonItemNav} key={lessonId}>
          <Link to={`/${lessonId}`} className={classes.fullW}>
            <Typography
              title={lessonTitle}
              variant="body1"
              noWrap
              className={lessonClassName}
            >
              {lessonTitle}
            </Typography>
          </Link>
        </Grid>
      )
    })

  return (
    <Fragment>
      <Grid item className={classes.burgerWrapper} onClick={onMenuToggle}>
        <IconButton style={{ color: '#00555f' }}>
          <MenuIcn />
        </IconButton>
      </Grid>
      <SwipeableDrawer
        onClose={onMenuToggle}
        onOpen={onMenuToggle}
        open={isOpen}
      >
        <Grid
          container
          direction="column"
          className={classes.lessonsDescription}
        >
          <Grid item className={classes.fullW}>
            <Typography gutterBottom variant="title" className={classes.title}>
              Основы ReactJS
            </Typography>
          </Grid>
          <Grid item className={classes.fullW}>
            <Grid container direction="column">
              {renderLessonTitleLinks()}
            </Grid>
          </Grid>
        </Grid>
      </SwipeableDrawer>
    </Fragment>
  )
}

SideMenu.propTypes = propTypes
SideMenu.defaultProps = defaultProps

const enhance = withStyles(styles)

export default enhance(SideMenu)
