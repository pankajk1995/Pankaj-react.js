import React from 'react'
import Message from './Message'

const Content = ({username}) => {
  return (
    <div>
      <h2>I am content</h2>
      <Message username={username}/>
    </div>
  )
}

export default Content
