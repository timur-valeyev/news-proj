import React, {useEffect, useRef, useState} from 'react'
import classes from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    const [searchValue, setSearchValue] = useState('')
    const inputRef = useRef()

    const handleSearch = (event) => {
        setSearchValue(event.target.value)
    }

    const onSearch = () => {
        console.log('click')
        setSearchValue('')
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') onSearch()
    }

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()
    }, [])

    return (
        <header className={classes.header}>
            <div>
                <Link to='/' >News Blog</Link>
            </div>
            <div className={classes.inputBlock}>
                <input
                    className={classes.input}
                    ref={inputRef}
                    type="text"
                    placeholder='Please enter something here...'
                    value={searchValue}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                />
                <button className={classes.button} onClick={onSearch}>Search</button>
            </div>
        </header>
    )
}

export default Header