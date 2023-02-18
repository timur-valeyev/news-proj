import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {updateComment} from "../../redux/slices/commentsSlice"
import classes from './UpdateComment.module.css'


function UpdateComment(props) {
    const {id} = props
    const currentComment = useSelector(state=> state.comments.commentsList.find(post => post.id === id))
    const dispatch = useDispatch()
    const postId = currentComment.postId
    const [comment, setComment] = useState(currentComment.comment)

    const handleSubmit = () => {
        if (comment) {
            dispatch(updateComment({ id, comment, postId }))
        }
    }

    return (
        <>
            <h2>Редактировать комментарий</h2>
            <textarea className={classes.textarea}
                value={comment}
                onChange={e=>setComment(e.target.value)}
            />
            <div className={classes.buttons}>
                <button className={classes.button} onClick={handleSubmit}>
                    Редактировать
                </button>
                <button className={classes.button}>
                    Закрыть
                </button>
            </div>
        </>
    )
}

export default UpdateComment
