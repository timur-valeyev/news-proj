import React from 'react'
import classes from './Header.module.css'
import {Link, useLocation} from 'react-router-dom'
import SearchBlock from '../SearchBlock'
import {useState} from 'react'
import Modal from '../Modal'
import LoginModal from '../LoginModal'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../../redux/slices/authSlice'


const Header = () => {
    const location = useLocation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.auth.login)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header className={classes.header}>
            <Link to='/'>News Blog</Link>
            {location.pathname === '/' && <SearchBlock/>}
            <div>
                {loggedIn ? <button onClick={logoutHandler}>Выйти</button> :
                    <button onClick={handleOpenModal}>Вход для админа</button>
                }
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <LoginModal onClose={handleCloseModal}/>
            </Modal>
        </header>
    )
}

export default Header