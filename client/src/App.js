import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register';
import Login from './components/Login';
import Error from './components/Error';
import Edit from './components/Error';

const App = () => {
  return (
    <div>
      <BrowserRouter>     
      <Routes>
        <Route path='/' element={<Home/>}/>       
        <Route path='/register' element={<Register/>}/>       
        <Route path='/login' element={<Login/>}/>       
        <Route path='/edit/:id' element={<Edit/>}/>       
        <Route path='*' element={<Error/>}/>       

      </Routes>     
      
      </BrowserRouter>
    </div>
  )
}

export default App