import React from 'react'
import './Post.css'
const Post = ({body,title}) => {

  return (
    <div className='main'>
     <h1 >{body}</h1>
     <p>{title}</p>
    </div>
  )
}
export default Post
