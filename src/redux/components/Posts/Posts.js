import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

//components
import {fetchPosts} from "../../slices/postsSlice";
import Post from "../Post";


const Posts = () => {
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.posts)
    const postsList = useSelector(state => state.posts.postsList)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
      <>
          {!loading ? postsList.map(post =>
              <Post key={post.id} {...post} />
          ) : <h2>Loading...</h2>}
      </>
    )
}

export default Posts