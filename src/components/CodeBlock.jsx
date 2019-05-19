import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = ({children = '', filename='', lang=''}) => {
  let code = children.toString()
  code = code.replace(/\n/, '') // 最初の行の改行
  code = code.replace(/(?!.*?\n)\s*?$/, '') // 最終行の改行

  return (
    <div className='code-block'>
      {filename && <span className='code-block__filename'>{filename}</span>}
      <div className='code-block__inner'>
        <SyntaxHighlighter language={lang ? lang : ''} style={theme}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export const C = ({children=''}) => (
  <span className='inline-code'>
    {children}
  </span>
)

export default  CodeBlock
