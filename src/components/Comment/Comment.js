import React from 'react'
import classes from './Comment.module.css'
import {useState} from "react"
import {useDispatch} from "react-redux";

//Components
import Modal from "../Modal"
import UpdateComment from "../UpdateComment"
import {deleteComment, fetchComments} from "../../redux/slices/commentsSlice";


const Comment = (props) => {
    const {id, firstName, lastName, surName, comment, postId} = props
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch()
    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const removeComment = () => {
        dispatch(deleteComment(id))
        dispatch(fetchComments(postId))
    }

    return (
            <div className={classes.comment} >
                <div className={classes.commentHeader}>
                    <p>{firstName} {lastName} {surName}</p>
                </div>
                <div className={classes.commentBody}>
                    <p>{comment}</p>
                </div>
                <div className={classes.buttons}>
                    <button onClick={handleOpenModal}>Редактировать комментарий</button>
                    <button onClick={removeComment}>Удалить</button>
                </div>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <UpdateComment id={id} onClose={handleCloseModal} />
                </Modal>
            </div>
    )
}

export default Comment