import React from 'react'
import { string } from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

class CodeBlock extends React.PureComponent {
  render() {
    const { value } = this.props
    return (
      <SyntaxHighlighter language="javascript" style={docco}>
        {value}
      </SyntaxHighlighter>
    )
  }
}

CodeBlock.propTypes = {
  value: string.isRequired,
}

export default CodeBlock
