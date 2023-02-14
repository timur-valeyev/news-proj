import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import classes from './FullPost.module.css'

//components
import {fetchFullPost} from "../../redux/slices/postsSlice";


const FullPost = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const fullPost = useSelector(state => state.posts.postsList)


    useEffect(() => {
        dispatch(fetchFullPost(id))
    }, [dispatch])

    return (
      <>
          {fullPost.map(post => (
              <div className={classes.fullPost}
                  key={post.id}>
                  <img src={post.urlToImage} alt=""/>
                  <h1>{post.title}</h1>
                  <p>{post.content}</p>
                  <p>{post.description}</p>
              </div>
          ))}
      </>
    )
}

export default FullPost