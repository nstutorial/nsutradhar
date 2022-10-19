import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='container'>
        <ul className='nav'>
            <Link to="/">HOME</Link>
            <Link to="/register">REGISTER</Link>
            <Link to="login">LOGIN</Link>
        </ul>

    </div>
    </>
  )
}

export default Navbar