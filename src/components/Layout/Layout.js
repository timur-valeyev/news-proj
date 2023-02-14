import React from 'react'
import {Outlet} from 'react-router-dom'
import classes from './Layout.module.css'

//components
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
    return (
      <>
          <Header />
          <main className={classes.main}>
              <Outlet />
          </main>
          <Footer />
      </>
    )
}

export default Layout