import React, { Fragment } from 'react'
import { getOr } from 'lodash/fp'

import SideMenu from '../../components/SideMenu'
import LessonsSection from '../../components/LessonView'
import { lessons } from '../../lessonsData/allLessons'

function Home({ match }) {
  const currentLessonId = getOr('intro', ['params', 'id'], match)
  const currentLesson = lessons[currentLessonId]
  const lessonsInArray = Object.keys(lessons).map(lessonId => lessons[lessonId])
  return (
    <Fragment>
      <SideMenu currentLessonId={currentLessonId} lessons={lessonsInArray} />
      <LessonsSection currentLesson={currentLesson} />
    </Fragment>
  )
}

Home.propTypes = {}

export default Home
