import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ExpenseProvider from './contexts/ExpenseProvider';
function App() {

  return (
    <div className="app">

      <ExpenseProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ExpenseProvider >
    </div>
  )
}

export default App
