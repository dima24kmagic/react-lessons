import React from 'react'
import ReactMarkdown from 'react-markdown'

import CodeBlock from '../CodeBlock'
import HtmlParser from '../HtmlParser/HtmlParser'
import { lessonPropType } from '../../PropTypes/PropTypes'

const propTypes = {
  lesson: lessonPropType.isRequired,
}

const defaultProps = {}

function ParsedLesson({ lesson }) {
  return (
    <ReactMarkdown
      source={lesson.body}
      renderers={{ code: CodeBlock, html: HtmlParser }}
    />
  )
}

ParsedLesson.propTypes = propTypes
ParsedLesson.defaultProps = defaultProps

export default ParsedLesson
