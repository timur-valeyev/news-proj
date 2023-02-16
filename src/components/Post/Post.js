import React from 'react'
import classes from './Post.module.css'
import {Link} from 'react-router-dom'

const Post = props => {
    const {id, title, urlToImage, description} = props

    return (
      <div className={classes.post}>
          <img src={urlToImage} alt='news-image'/>
          <Link to={`posts/${id}`}>
              <h2 className={classes.title}>{title}</h2>
          </Link>
          <p>{description}</p>
      </div>
    )
}

export default Post