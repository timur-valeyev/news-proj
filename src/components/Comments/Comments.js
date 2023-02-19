import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import classes from './Comments.module.css'

//components
import {addComment, fetchComments} from '../../redux/slices/commentsSlice'
import Comment from '../Comment'
import InputFields from '../InputFields'
import {validateForm} from '../../utils/validateForm'


const Comments = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const comments = useSelector((state) => state.comments.commentsList)
    const {loading} = useSelector(state => state.comments)
    const [formErrors, setFormErrors] = useState({})
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        surName: '',
        email: '',
        phone: '',
        comment: ''
    })

    if (loading) {
        return <h2>Загрузка...</h2>
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const uniqueId = Math.random().toString(36).substring(2)

        const errors = validateForm(formData)
        setFormErrors(errors)
        
        if (Object.keys(errors).length === 0) {
            const obj = {
                id: uniqueId,
                firstName: formData.firstName,
                lastName: formData.lastName,
                surName: formData.surName,
                email: formData.email,
                phone: formData.phone,
                comment: formData.comment,
                postId: id,
            }
            dispatch(addComment(obj))
            dispatch(fetchComments(id))
        }
    }

    return (
        <div className={classes.comments}>
            <h2 className={classes.commentsTitle}>Comments</h2>
            {comments.map((comment) => (
                <Comment key={comment.id} postId={id} {...comment} />
            ))}
            <div>
            </div>
            <div className={classes.form}>
                <h2>Написать комментарий</h2>
                <InputFields formData={formData} handleInputChange={handleInputChange} formErrors={formErrors} />
                {formErrors.comment && (
                    <div className={classes.error}>{formErrors.comment}</div>
                )}
                <textarea
                    placeholder='Введите текст комментария...'
                    name='comment'
                    value={formData.comment}
                    onChange={handleInputChange}
                />
                <button className={classes.commentButton} onClick={handleSubmit}>
                    Добавить комментарий
                </button>
            </div>
        </div>
    )
}

export default Comments