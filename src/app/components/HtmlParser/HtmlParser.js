import React from 'react'
import { string } from 'prop-types'
import HtmlToReactParser from 'html-to-react'

const propTypes = {
  value: string.isRequired,
}

/**
 * HTML parser
 */
const htmlToReactParser = new HtmlToReactParser.Parser()
function HtmlParser({ value }) {
  const reactElement = htmlToReactParser.parse(value)
  return reactElement
}

HtmlParser.propTypes = propTypes

export default HtmlParser
