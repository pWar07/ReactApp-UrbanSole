import React from 'react'
import NavBar from '../header/nav'
import Product from '../products/prodPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Collection = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/category' element={Product}/>
      </Routes>
    </Router>
  )
}

export default Collection