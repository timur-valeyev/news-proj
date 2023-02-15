import React from 'react'
import classes from './Comment.module.css'


const Comment = (props) => {
    const {firstName, lastName, surName, comment} = props

    return (
            <div className={classes.comment}>
                <div className={classes.commentHeader}>
                    <p>{firstName} {lastName} {surName}</p>
                </div>
                <div className={classes.commentBody}>
                    <p>{comment}</p>
                </div>
            </div>
    )
}

export default Comment