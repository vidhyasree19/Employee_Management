import React from 'react'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './components/home/Home'
import Register from './components/register/Register'
import Login from './components/login/Login'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
