import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <input type="text" placeholder='search'/>
        </header>
    )
}

export default Header