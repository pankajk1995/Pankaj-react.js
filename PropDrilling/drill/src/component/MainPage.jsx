import React from 'react'
import Content from './Content'

const MainPage = ({username}) => {
  return (
    <div>
      <h2>I am main page</h2>
      <Content username={username}/>
    </div>
  )
}

export default MainPage
