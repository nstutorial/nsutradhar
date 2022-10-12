import React from 'react'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className='App'>
        <h2>Home Page</h2>
        <Link to="/register">
        <p>Goto Register Page</p>
      </Link>
    </div>
  )
}

export default Home