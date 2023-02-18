import {Routes, Route} from 'react-router-dom'
import React from 'react'

//components
import NotFound from './pages/NotFound'
import FullPost from './components/FullPost'
import Layout from './components/Layout'
import Posts from "./components/Posts";


function App() {
  return (
    <div className='container'>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index='/' element={<Posts />} />
                <Route path='post/:id' element={<FullPost />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    </div>
  )
}

export default App
