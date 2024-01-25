import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'

// import NotFound from './utils/NotFound'


export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />

            {/* <Route path='*' element={<NotFound/>} /> */}
        </Routes>
     </Router>
  )
}