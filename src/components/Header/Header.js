import React from 'react'
import classes from './Header.module.css'
import {Link} from 'react-router-dom'
import SearchBlock from '../SearchBlock'


const Header = () => {
    return (
        <header className={classes.header}>
            <Link to='/'>News Blog</Link>
            <SearchBlock />
        </header>
    )
}

export default Header