import React from 'react'
import { bool, func, shape, string } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import cn from 'classnames'

const propTypes = {
  /** Is lesson available */
  isAvailable: bool,
  /** Is lesson open */
  expanded: bool,
  /** Title of a lesson */
  title: string.isRequired,
  /** On expand button or title click */
  onExpand: func,
  /** @ignore */
  classes: shape({}).isRequired,
}

const defaultProps = {
  isAvailable: true,
  onExpand: () => {},
  expanded: false,
}

const styles = theme => ({
  header: {
    padding: '4px',
    cursor: 'pointer',
    transition: 'background .1s',
    '&:hover': {
      background: 'rgba(0,0,0,.1)',
    },
  },
  lessonNotAvailable: {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      background: 'rgba(0,0,0,0.2)',
    },
    opacity: 0.3,
  },
  expandBtn: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    padding: 4,
    marginLeft: 8,
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  title: {
    cursor: 'pointer',
  },
  titleTypography: {
    // textDecoration: 'underline',
    fontWeight: 800,
    color: theme.palette.colors.green,
  },
})
/**
 * Lesson Header Section
 */
export function LessonHeader({
  classes,
  onExpand,
  expanded,
  isAvailable,
  title,
}) {
  const headerClass = cn(classes.header, {
    [classes.lessonNotAvailable]: !isAvailable,
  })
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={headerClass}
      onClick={onExpand}
    >
      <Grid item className={classes.title}>
        <Typography className={classes.titleTypography} variant="title">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton
          className={cn(classes.expandBtn, {
            [classes.expandOpen]: expanded,
          })}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

LessonHeader.propTypes = propTypes
LessonHeader.defaultProps = defaultProps

const enhance = withStyles(styles)

export default enhance(LessonHeader)
