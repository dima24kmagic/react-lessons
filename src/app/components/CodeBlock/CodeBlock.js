import React from 'react'
import { string } from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import solarized from 'react-syntax-highlighter/dist/esm/styles/prism/solarizedlight'
import base16 from 'react-syntax-highlighter/dist/esm/styles/prism/base16-ateliersulphurpool.light'
import duotoneLight from 'react-syntax-highlighter/dist/esm/styles/prism/duotone-light'

class CodeBlock extends React.PureComponent {
  render() {
    const { value, language } = this.props
    return (
      <div className="code-block">
        <SyntaxHighlighter language={language} style={solarized}>
          {value}
        </SyntaxHighlighter>
      </div>
    )
  }
}

CodeBlock.propTypes = {
  value: string.isRequired,
  language: string.isRequired,
}

export default CodeBlock
