import React from 'react'
import classes from './Header.module.css'
import {Link, useLocation} from 'react-router-dom'
import SearchBlock from '../SearchBlock'


const Header = () => {
    const location = useLocation();

    return (
        <header className={classes.header}>
            <Link to='/'>News Blog</Link>
            {location.pathname === '/' && <SearchBlock />}
        </header>
    )
}

export default Header