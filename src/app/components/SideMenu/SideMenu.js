import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid/Grid'
import cn from 'classnames'
import IconButton from '@material-ui/core/IconButton'
import MenuIcn from '@material-ui/icons/Menu'
import CloseIcn from '@material-ui/icons/Close'

const propTypes = {
  /** Which side menu should be draggable from */
  side: PropTypes.oneOf(['right']),
  /** Items in menu */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      /** link path */
      to: PropTypes.string,
      /** Text of a link */
      text: PropTypes.string,
    }),
  ),
  /** @ignore */
  classes: PropTypes.shape().isRequired,
  /** @ignore */
  children: PropTypes.node.isRequired,
}

const defaultProps = {
  side: 'right',
  links: [],
}

const styles = {
  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    top: 11,
    left: 235,
  },
  burgerWrapperClosed: {
    left: 18,
  },

  navigationContainer: {
    width: '20%',
    minWidth: 300,
  },

  closedMenu: {
    minWidth: 0,
    width: 0,
  },
}

/**
 * Side menu component with navigation in it
 */
function SideMenu({ classes, children }) {
  const [isOpen, setIsOpen] = useState(true)

  const onMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  const contentMenuClass = cn(classes.navigationContainer, {
    [classes.closedMenu]: !isOpen,
  })

  const iconClass = cn(classes.burgerWrapper, {
    [classes.burgerWrapperClosed]: !isOpen,
  })
  return (
    <Fragment>
      <Grid item className={iconClass} onClick={onMenuToggle}>
        <IconButton style={{ color: 'white' }}>
          {isOpen ? <CloseIcn /> : <MenuIcn />}
        </IconButton>
      </Grid>
      <div className={contentMenuClass}>{children}</div>
    </Fragment>
  )
}

SideMenu.propTypes = propTypes
SideMenu.defaultProps = defaultProps

const enhance = withStyles(styles)

export default enhance(SideMenu)
