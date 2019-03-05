import React from 'react'
import PropTypes from 'prop-types'
import hljs from 'highlightjs'

console.log({ hljs })

class CodeBlock extends React.PureComponent {
  constructor(props) {
    super(props)
    this.setRef = this.setRef.bind(this)
  }

  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  setRef(el) {
    this.codeEl = el
  }

  highlightCode() {
    hljs.highlightBlock(this.codeEl)
  }

  render() {
    console.log(this.codeEl, this.props.value)
    return (
      <pre>
        <code ref={this.setRef} className={`language-${this.props.language}`}>
          {this.props.value}
        </code>
      </pre>
    )
  }
}

CodeBlock.defaultProps = {
  language: 'js',
}

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
}

export default CodeBlock
