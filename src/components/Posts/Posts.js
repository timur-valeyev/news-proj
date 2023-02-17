import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import classes from './Posts.module.css'

//components
import {fetchPosts} from '../../redux/slices/postsSlice'
import Post from '../Post'


const Posts = () => {
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.posts)
    const postsList = useSelector(state => state.posts.postsList)
    const searchResult = useSelector(state => state.posts.searchResult)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    if (loading) {
        return (
            <div className={classes.posts}>
               <h2>Loading...</h2>
            </div>
        )
    }
    if(searchResult !== undefined) {
        if(searchResult.length === 0) {
            return (
                <div className={classes.posts}>
                    ничего не найдено
                </div>
            )
        }
        return (
            <div className={classes.posts}>
                { searchResult.map(post =>
                    <Post
                        key={post.id}
                        {...post}
                    />
                )}
            </div>
        )
    }

    return (
      <div className={classes.posts}>
          {postsList.map(post =>
              <Post
                  key={post.id}
                  {...post}
              />
          )}
      </div>
    )
}

export default Posts