import React from 'react'
import logo from './images/ECN_logo-1.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='w-full '>
      <div className='flex w-full px-[20rem] left-0 fixed  my-20 top-0 '>
        <div className='flex items-center w-full px-10 py-1  rounded-full bg-blue-200'>
              <div className='w-24'>
                  <img src={logo} alt="" />
              </div>

              <ul className='flex ml-auto gap-10 items-center'>
                  <Link to={'/'}><li className='cursor-pointer text-black'>Home</li></Link>
                  <Link to={'/dashboard'}>
                    <button class="btn btn-active btn-primary bg-white text-black border-none hover:bg-purple-50 py-3 px-10">Vote Now</button>
                  </Link>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar