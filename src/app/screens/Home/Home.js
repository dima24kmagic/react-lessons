import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import { shape } from 'prop-types'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    marginTop: 48,
    fontWeight: 800,
    fontSize: 42,
    color: '#121212',
  },
  startLink: {
    textDecoration: 'none',
    letterSpacing: 8,
    textAlign: 'center',
    padding: '0 4px',
    borderBottom: '2px solid #3e3e3e',
    textTransform: 'uppercase',
    fontSize: 24,
    fontFamily: theme.fontFamily,
    color: '#3e3e3e',
    fontWeight: 800,
    transition: 'color .15s, padding .15s, border .15s',
    '&:hover': {
      color: '#121212',
      borderBottom: '2px solid #121212',
      padding: '0 24px',
    },
  },
})
class Home extends Component {
  static propTypes = {
    /** @ignore */
    classes: shape({}).isRequired,
  }

  render() {
    const { classes } = this.props
    return (
      <Grid container className={classes.root}>
        <Grid item>
          <Typography className={classes.title} variant="display1">
            Узнайте Основы Реакта в быстрых уроках
          </Typography>
        </Grid>
        <Grid item>
          <Link to="/lessons" className={classes.startLink}>
            Начать
          </Link>
        </Grid>
      </Grid>
    )
  }
}

const enhance = withStyles(styles)

export default enhance(Home)
