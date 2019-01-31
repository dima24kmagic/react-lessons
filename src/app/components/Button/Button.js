import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Button as MaterialButton } from '@material-ui/core'

const propTypes = {
  /** OnClick handler */
  onClick: PropTypes.func,
  /** @ignore */
  // classes: PropTypes.shape().isRequired,
  /** @ignore */
  children: PropTypes.node,
}

const defaultProps = {
  onClick: () => {},
  children: '',
}

const styles = {}

/**
 * Regular button
 */
export function Button({ children, onClick }) {
  return <MaterialButton onClick={onClick}>{children}</MaterialButton>
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

const enhance = withStyles(styles)

export default enhance(Button)
