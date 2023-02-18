import React from 'react'
import classes from './Comment.module.css'
import Modal from "../Modal"
import UpdateComment from "../UpdateComment"
import {useState} from "react"


const Comment = (props) => {
    const {id, firstName, lastName, surName, comment} = props
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentId, setCurrentId] = useState(id)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setCurrentId(id)
        setIsModalOpen(false)
    }

    return (
            <div className={classes.comment} onClick={handleOpenModal}>
                <div className={classes.commentHeader}>
                    <p>{firstName} {lastName} {surName}</p>
                </div>
                <div className={classes.commentBody}>
                    <p>{comment}</p>
                </div>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <UpdateComment id={currentId} handleCloseModal={handleCloseModal} />
                </Modal>
            </div>
    )
}

export default Comment