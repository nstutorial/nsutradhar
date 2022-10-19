import React from 'react'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className='App'>
    
        <h1> Login Page</h1>
        <hr/>
        <form method='post'>
        
            <input type="text" placeholder='username' id='username' name='username' /><br/>
            <input type="text" placeholder='password' id='password' name='password' /><br/>
            <input type="submit" value="Submit" />
        </form>
        <Link to="/register">
        <p>Goto Register Page</p>
      </Link>
    </div>
  )
}

export default Home