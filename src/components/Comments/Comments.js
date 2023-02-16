import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import classes from './Comments.module.css'

//components
import {addComment, fetchComments} from '../../redux/slices/commentsSlice'
import Comment from "../Comment"
import InputField from "../InputField"
import Modal from "../Modal"
import UpdateComment from "../UpdateComment"


const Comments = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const comments = useSelector((state) => state.comments.commentsList)

    const [formErrors, setFormErrors] = useState({})
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        surName: '',
        email: '',
        phone: '',
        comment: ''
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    }

    const validateForm = (formData) => {
        let errors = {}

        switch (true) {
            case !formData.surName:
                errors.surName = 'Поле не может быть пустым'
            case !formData.firstName:
                errors.firstName = 'Поле не может быть пустым'
            case !formData.lastName:
                errors.lastName = 'Поле не может быть пустым'
            case !formData.comment:
                errors.comment = 'Поле не может быть пустым'
            case !formData.email:
                errors.email = 'Поле не может быть пустым'
            case !/\S+@\S+\.\S+/.test(formData.email):
                errors.email = 'Неправильный формат email'
            case !formData.phone:
                errors.phone = 'Поле не может быть пустым'
            case !/^\d{10}$/.test(formData.phone):
                errors.phone = 'Номер телефона должен состоять из 10 цифр'
            default:
                break
        }

        return errors
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
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className={classes.comments}>
            <h2 className={classes.commentsTitle}>Comments</h2>
            {comments.map((comment) => (
                <Comment key={comment.id}  handleOpenModal={handleOpenModal} {...comment} />
            ))}
            <div>
            </div>
            <div className={classes.form}>
                <h2>Написать комментарий</h2>
                {formErrors.surName && (
                    <span className={classes.error}>{formErrors.surName}</span>
                )}
                <InputField
                    placeholder="Фамилия"
                    name="surName"
                    type="text"
                    value={formData.surName}
                    onChange={handleInputChange}
                />
                {formErrors.firstName && (
                    <span className={classes.error}>{formErrors.firstName}</span>
                )}
                <InputField
                    placeholder="Имя"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
                {formErrors.lastName && (
                    <span className={classes.error}>{formErrors.lastName}</span>
                )}
                <InputField
                    placeholder="Очество"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
                {formErrors.email && (
                    <span className={classes.error}>{formErrors.email}</span>
                )}
                <InputField
                    placeholder="Email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                {formErrors.phone && (
                    <div className={classes.error}>{formErrors.phone}</div>
                )}
                <InputField
                    placeholder="Телефон"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
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
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <UpdateComment id={id} />
            </Modal>
        </div>
    )
}

export default Comments