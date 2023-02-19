import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {fetchComments, updateComment} from "../../redux/slices/commentsSlice"
import classes from './UpdateComment.module.css'


function UpdateComment(props) {
    const {id, onClose} = props
    const currentComment = useSelector(state=> state.comments.commentsList.find(post => post.id === id))
    const dispatch = useDispatch()
    const postId = currentComment.postId
    const [comment, setComment] = useState(currentComment.comment)

    const handleSubmit = (e) => {
        if (comment) {
            dispatch(updateComment({ id, comment, postId }))
            handleClose(e)
            dispatch(fetchComments(postId))
        }
    }

    const handleClose = (e) => {
        e.stopPropagation()
        onClose()
    }

    return (
        <>
            <h2>Редактировать комментарий</h2>
            <textarea className={classes.textarea}
                value={comment}
                onChange={e=>setComment(e.target.value)}
            />
            <div className={classes.buttons}>
                <button onClick={handleSubmit}>
                    Редактировать
                </button>
                <button onClick={handleClose}>
                    Закрыть
                </button>
            </div>
        </>
    )
}

export default UpdateComment
