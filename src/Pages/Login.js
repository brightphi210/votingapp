import React from 'react'
import Navbar from '../Components/Navbar'
import LoginCom from '../Components/LoginCom'

const Login = ({connectWallet}) => {
  return (
    <div className='custom-bg'>
        <div className='isolate z-50'>
            <Navbar />
        </div>
        
        <div className='isolate z-50'>
          <div className='flex px-[30rem] w-full '>

            <div className='w-full text-center justify-center h-full pt-[10rem] '>
                <h2 className='text-7xl font-semibold leading-tight'>Electoral committee of <br /> Namibia(ECN)</h2>
                <p className='py-5'>Vote securely on the blockchain and protect your vote</p>
                <button onClick = {connectWallet} class="btn btn-active w-1/2 text-white text-lg btn-primary bg-gradient-to-r
                from-sky-500 to-indigo-500 border-none hover:bg-purple-100 py-5 px-10 h-[4rem]">
                    Connect verified wallet
                </button>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Login