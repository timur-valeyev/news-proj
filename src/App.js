import {Routes, Route} from "react-router-dom";
import React from "react";

//components
import Home from "./redux/pages/Home";
import NotFound from "./redux/pages/NotFound";
import FullPost from "./redux/components/FullPost";
import Layout from "./redux/components/Layout";


function App() {
  return (
    <div className='container'>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index='/' element={<Home />} />
                <Route path='posts/:id' element={<FullPost />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    </div>
  )
}

export default App
