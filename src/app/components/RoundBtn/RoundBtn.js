import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const propTypes = {
  /** OnClick handler */
  onClick: PropTypes.func,
  /** @ignore */
  classes: PropTypes.shape().isRequired
};

const defaultProps = {};

const styles = {};

/**
 * Rounded Btn
 */
export function RoundBtn({ classes, onClick }) {
  return <IconButton onClick={onClick} />;
}

RoundBtn.propTypes = propTypes;
RoundBtn.defaultProps = defaultProps;

const enhance = withStyles(styles);

export default enhance(RoundBtn);
