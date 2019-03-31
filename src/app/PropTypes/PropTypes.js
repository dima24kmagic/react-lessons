import PropTypes from 'prop-types'

export const lessonPropType = PropTypes.shape({
  /** Lesson id */
  id: PropTypes.string.isRequired,
  /** Lesson title */
  title: PropTypes.string.isRequired,
  /** Body in md format */
  body: PropTypes.string.isRequired,
})

export const childrenPropType = PropTypes.node
