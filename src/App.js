import {Routes, Route} from "react-router-dom";
import React from "react";

//components
import Home from "./redux/pages/Home";
import NotFound from "./redux/pages/NotFound";
import Post from "./redux/components/Post";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts/:id' element={<Post />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default App
