import React, { Fragment } from 'react'
import { getOr } from 'lodash/fp'
import PropTypes from 'prop-types'

import SideMenu from '../../components/SideMenu'
import LessonsSection from '../../components/LessonView'
import { lessons, lessonsInArray } from '../../lessonsData/allLessons'

function Home({ match }) {
  const currentLessonId = getOr('intro', ['params', 'id'], match)
  const currentLesson = lessons[currentLessonId]
  return (
    <Fragment>
      <SideMenu currentLessonId={currentLessonId} lessons={lessonsInArray} />
      <LessonsSection currentLesson={currentLesson} />
    </Fragment>
  )
}

Home.propTypes = {
  /* Match URL param from Router */
  match: PropTypes.shape({}).isRequired,
}

export default Home
