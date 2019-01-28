import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid/Grid";
import { lesson } from "../../PropTypes/PropTypes";

const propTypes = {
  ...lesson,
  /** @ignore */
  classes: PropTypes.shape().isRequired
};

const defaultProps = {};

const styles = {};

/**
 * Lesson
 */
export function Lesson({ classes }) {
  return <Grid container> </Grid>;
}

Lesson.propTypes = propTypes;
Lesson.defaultProps = defaultProps;

const enhance = withStyles(styles);

export default enhance(Lesson);
