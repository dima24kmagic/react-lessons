import PropTypes from "prop-types";

export const lesson = PropTypes.shape({
  /** Lesson id*/
  id: PropTypes.string.isRequired,
  /** Lesson title */
  title: PropTypes.string.isRequired,
  /** is Pure Text */
  body: PropTypes.string.isRequired
});

export const arrayOfLessons = PropTypes.arrayOf(lesson);
