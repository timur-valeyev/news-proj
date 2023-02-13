import React from 'react'
import classes from "./Post.module.css"

const Post = props => {
    const {title, urlToImage, description} = props

    return (
      <div className={classes.post}>
          <img src={urlToImage} alt='news-image'/>
          <h2 className={classes.title}>{title}</h2>
          <p>{description}</p>
      </div>
    )
}

export default Post