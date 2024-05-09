import React from 'react'
import image1 from './images/images (1).jpeg.jpg'
import image2 from './images/images (2).jpeg.jpg'
import image3 from './images/images.jpeg.jpg'

const VotingComp = () => {
  return (
    <div className='flex justify-center items-center px-[20rem] bg-gradient-to-r from-slate-950 to-slate-900 h-screen'>
      <div className='flex gap-10 '>


        <div className="w-full">
        <div className=' bg-slate-900 rounded-xl'>
          <div className="h-64 overflow-hidden">
            <img src={image1} alt="" className='w-full rounded-lg'/>
          </div>
          <button class="btn btn-active mx-5 my-5 btn-primary bg-white text-black border-none hover:bg-purple-100 py-3 px-10">Vote Now</button>
        </div>

          <div className="bg-slate-900 rounded-lg mt-5 p-10 flex text-white">
            <h1>Total number of votes</h1>
            <p className="ml-auto">50</p>
          </div>
        </div>

        <div className='w-full bg-slate-900 rounded-xl'>
          <div className="h-64 overflow-hidden">
            <img src={image2} alt="" className='w-full rounded-lg'/>
          </div>
          <button class="btn btn-active mx-5 my-5 btn-primary bg-white text-black border-none hover:bg-purple-100 py-3 px-10">Vote Now</button>
        </div>

        <div className='w-full bg-blue-950 rounded-xl'>
          <div className="h-64 overflow-hidden">
            <img src={image3} alt="" className='w-full rounded-lg'/>
          </div>
          <button class="btn btn-active mx-5 my-5 btn-primary bg-white text-black border-none hover:bg-purple-100 py-3 px-10">Vote Now</button>
        </div>


      </div>
    </div>
  )
}

export default VotingComp