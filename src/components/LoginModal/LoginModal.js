import React, {useEffect, useState} from 'react'
import classes from './LoginModal.module.css'
import {useDispatch} from 'react-redux'
import {fetchUsers, login} from '../../redux/slices/authSlice'

const LoginModal = ({onClose}) => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const onSubmit = () => {
        dispatch(login(value.toLowerCase()))
        onClose()
    }

    const onCloseModal = (e) => {
        e.stopPropagation()
        onClose()
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            onSubmit()
            onClose()
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={classes.loginModal}>
            <h2>Добро пожаловать админ</h2>
            <input
                type='password'
                placeholder='Введите пароль'
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <div className={classes.buttons}>
                <button onClick={onSubmit}>Войти</button>
                <button onClick={onCloseModal}>Отмена</button>
            </div>
        </div>
    )
}

export default LoginModal