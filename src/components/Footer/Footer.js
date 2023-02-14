import React from 'react'
import {Link} from "react-router-dom";
import classes from './Footer.module.css'


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <Link to='https://github.com/timur-valeyev/news-proj' target="_blank">GitHub</Link>
        </footer>
    )
}

export default Footer