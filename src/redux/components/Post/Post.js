import React from 'react'
import classes from "./Post.module.css"

const Post = props => {
    const {title, body} = props

    return (
      <div className={classes.post}>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.body}>{body}</p>
      </div>
    )
}

export default Post