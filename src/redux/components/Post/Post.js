import React from 'react'


const Post = props => {
    const {title, body} = props

    return (
      <>
          <h2>{title}</h2>
          <p>{body}</p>
      </>
    )
}

export default Post