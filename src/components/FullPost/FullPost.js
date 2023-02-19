import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import classes from './FullPost.module.css'

//components
import {fetchFullPost} from '../../redux/slices/postsSlice'
import {fetchComments} from '../../redux/slices/commentsSlice'
import Comments from '../Comments'


const FullPost = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const fullPost = useSelector(state => state.posts.postsList)

    useEffect(() => {
        dispatch(fetchFullPost(id))
        dispatch(fetchComments(id))
        window.scrollTo(0, 0)
    }, [dispatch])

    return (
      <>
          {fullPost.map(post => (
              <div className={classes.fullPost}
                  key={post.id}>
                  <img src={post.urlToImage} alt=''/>
                  <h1 className={classes.fullPostTitle}>{post.title}</h1>
                  <div className={classes.fullPostBody}>
                      <p>{post.content}</p>
                      <p>{post.description}</p>
                  </div>
              </div>
          ))}
        <Comments />
      </>
    )
}

export default FullPost