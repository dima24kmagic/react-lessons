import React from 'react'
import { arrayOf } from 'prop-types'

import LessonsSection from '../../components/LessonView'
import { lessonPropType } from '../../PropTypes/PropTypes'

const propTypes = {
  lessons: arrayOf(lessonPropType),
}

const defaultProps = {
  lessons: [],
}

function LessonsPage({ lessons }) {
  return <LessonsSection title="Основы ReactJS" lessons={lessons} />
}

LessonsPage.propTypes = propTypes
LessonsPage.defaultProps = defaultProps

export default LessonsPage
