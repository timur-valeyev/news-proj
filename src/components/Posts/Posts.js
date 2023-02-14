import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import classes from './Posts.module.css'

//components
import {fetchPosts} from "../../redux/slices/postsSlice";
import Post from "../Post";


const Posts = () => {
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.posts)
    const postsList = useSelector(state => state.posts.postsList)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
      <div className={classes.posts}>
          {!loading ? postsList.map((post, index) =>
              <Post key={`${index}-${Date.now()}`} {...post} />
          ) : <h2>Loading...</h2>}
      </div>
    )
}

export default Posts