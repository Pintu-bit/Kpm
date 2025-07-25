import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'

function App() {
  return (
    <div>
      <BrowserRouter basename="/Kpm">
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
