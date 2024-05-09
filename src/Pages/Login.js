import React from 'react'
import Navbar from '../Components/Navbar'
import LoginCom from '../Components/LoginCom'

const Login = () => {
  return (
    <div className='custom-bg'>
        <div className='isolate z-50'>
            <Navbar />
        </div>
        
        <div className='isolate z-50'>
            <LoginCom />
        </div>
    </div>
  )
}

export default Login