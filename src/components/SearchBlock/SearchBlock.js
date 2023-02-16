import React, {useEffect, useRef, useState} from 'react'
import {useDispatch} from "react-redux"
import classes from './SearchBlock.module.css'

//components
import {searchPost} from "../../redux/slices/postsSlice"


const SearchBlock = () => {
    const [searchValue, setSearchValue] = useState('')
    const inputRef = useRef()
    const dispatch = useDispatch()

    const handleSearch = (event) => {
        setSearchValue(event.target.value)
    }

    const onSearch = () => {
        if (searchValue !== '') dispatch(searchPost(searchValue))
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') onSearch()
    }

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()
    }, [])


    return (
        <div className={classes.searchBlock}>
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
    )
}

export default SearchBlock