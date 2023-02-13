import {Routes, Route} from "react-router-dom";
import React from "react";

//components
import Home from "./redux/pages/Home";
import NotFound from "./redux/pages/NotFound";
import FullPost from "./redux/components/FullPost";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts/:id' element={<FullPost />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default App
