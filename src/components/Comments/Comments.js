import React from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import classes from './Comments.module.css'

//components
import {addComment, fetchComments} from "../../redux/slices/commentsSlice";
import Comment from "../Comment";
import {useInput} from "../../utils/hooks/useInput";


const Comments = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments.commentsList)

    const obj = {
        "id": 6,
        "firstName": "33Ivan",
        "lastName": "33Ivanovich",
        "surName": "33Ivanov",
        "email": "33ivanov@ivan.kz",
        "phone": "+77776663322",
        "comment": "a33333333333333333333333333sd safagasgsa gasgasg ag ag",
        "postId": 2
    };

    // useEffect(() => {
    //     dispatch(fetchComments(id))
    // }, [dispatch])

    const sendComment = () => {
        dispatch(addComment(obj))
        dispatch(fetchComments(id))
    }
    const email = useInput('', {isEmptyField: true, minLength: 3, emailError: true})
    const phone = useInput('', {isEmptyField: true, minLength: 6, maxLength: 11, phoneError: true})
    const firstname = useInput('', {isEmptyField: true, minLength: 2, notNumbers: true })
    const lastname = useInput('', {isEmptyField: true, minLength: 2, notNumbers: true })
    const surname = useInput('', {isEmptyField: true, minLength: 2, notNumbers: true })
    const textArea = useInput('', {isEmptyField: true})


    return (
        <div className={classes.comments}>
            <h2 className={classes.commentsTitle}>Comments</h2>
            {comments.map(comment => (
                <Comment key={comment.id} {...comment} />
            ))}
            <form className={classes.form}>
                <div className={classes.formHeader}>
                    {(firstname.isDirty && firstname.isEmptyField) && <span style={{color: 'red'}}>Поле не может быть пустым</span>}
                    {(firstname.isDirty && firstname.minLength) && <span style={{color: 'red'}}>Фамилия не может быть меньше 2 символов</span>}
                    {(firstname.isDirty && firstname.notNumbers) && <span style={{color: 'red'}}>В поле не могут быть цифры</span>}
                    <input onChange={e => firstname.onChange(e)} onBlur={e => firstname.onBlur(e)} value={firstname.value} type="text" placeholder='Фамилия'/>

                    {(lastname.isDirty && lastname.isEmptyField) && <span style={{color: 'red'}}>Поле не может быть пустым</span>}
                    {(lastname.isDirty && lastname.minLength) && <span style={{color: 'red'}}>Фамилия не может быть меньше 2 символов</span>}
                    {(lastname.isDirty && lastname.notNumbers) && <span style={{color: 'red'}}>В поле не могут быть цифры</span>}
                    <input onChange={e => lastname.onChange(e)} onBlur={e => lastname.onBlur(e)} value={lastname.value} type="text" placeholder='Имя'/>

                    {(surname.isDirty && surname.isEmptyField) && <span style={{color: 'red'}}>Поле не может быть пустым</span>}
                    {(surname.isDirty && surname.minLength) && <span style={{color: 'red'}}>Фамилия не может быть меньше 2 символов</span>}
                    {(surname.isDirty && surname.notNumbers) && <span style={{color: 'red'}}>В поле не могут быть цифры</span>}
                    <input onChange={e => surname.onChange(e)} onBlur={e => surname.onBlur(e)} value={surname.value} type="text" placeholder='Очество'/>

                    {(email.isDirty && email.isEmptyField) && <span style={{color: 'red'}}>Поле не может быть пустым</span>}
                    {(email.isDirty && email.minLength) && <span style={{color: 'red'}}>Email не может быть меньше 2 символов</span>}
                    {(email.isDirty && email.emailError) && <span style={{color: 'red'}}>Некорректный email</span>}
                    <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} type="text" placeholder='Email'/>

                    {(phone.isDirty && phone.isEmptyField) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
                    {(phone.isDirty && phone.maxLength) && <span style={{color: 'red'}}>Номер не может быть болльше 10 символов</span>}
                    {(phone.isDirty && phone.minLength) && <span style={{color: 'red'}}>Номер не может быть меньше 6 символов</span>}
                    {(phone.isDirty && phone.phoneError) && <div style={{color: 'red'}}>Введите в формате 87773332211</div>}
                    <input onChange={e => phone.onChange(e)} onBlur={e => phone.onBlur(e)} value={phone.value} type="text" placeholder='Номер телефона'/>
                </div>
                {(textArea.isDirty && textArea.isEmptyField) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
                <textarea placeholder='Введите текст комментария...'/>
                <button
                    className={classes.commentButton}
                    onClick={sendComment}
                    disabled={
                        !firstname.validInput ||
                        !lastname.validInput ||
                        !surname.validInput ||
                        !email.validInput ||
                        !phone.validInput ||
                        !textArea.validInput
                    }
                >
                    Add comment
                </button>
            </form>
        </div>
    )
}

export default Comments