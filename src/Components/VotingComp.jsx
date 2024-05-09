import React from 'react'
import image1 from './images/images (1).jpeg.jpg'
import image2 from './images/images (2).jpeg.jpg'
import image3 from './images/images.jpeg.jpg'

const VotingComp = () => {
  return (
    <div className='flex justify-center items-center px-[20rem] pt-[10rem] bg-gradient-to-r from-slate-950 to-slate-900 h-screen'>
      <div className='flex gap-12 '>


      <div className="w-full">
          <div className=' bg-slate-900 rounded-xl'>
            <div className="h-64 overflow-hidden">
              <img src={image1} alt="" className='w-full rounded-lg'/>
            </div>

            <div className="px-5 py-5 flex items-center">
              <h2 className="text-white text-lg">Amadi John</h2>
              <button class="btn btn-active  btn-primary 
                bg-white text-black border-none 
                hover:bg-purple-100 py-3 px-10 ml-auto">
                  Continue to vote
              </button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-lg mt-5 p-10 flex items-center ">
            <h1 className="text-white">Total number of votes</h1>
            <p className="text-white ml-auto flex justify-center items-center py-3 px-5 rounded-full bg-cyan-500">50</p>
          </div>
        </div>

        <div className="w-full">
          <div className=' bg-slate-900 rounded-xl'>
            <div className="h-64 overflow-hidden">
              <img src={image2} alt="" className='w-full rounded-lg'/>
            </div>

            <div className="px-5 py-5 flex items-center">
              <h2 className="text-white text-lg">Amadi John</h2>
              <button class="btn btn-active  btn-primary 
                bg-white text-black border-none 
                hover:bg-purple-100 py-3 px-10 ml-auto">
                  Continue to vote
              </button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-lg mt-5 p-10 flex items-center ">
            <h1 className="text-white">Total number of votes</h1>
            <p className="text-white ml-auto flex justify-center items-center py-3 px-5 rounded-full bg-cyan-500">50</p>
          </div>
        </div>

        <div className="w-full">
          <div className=' bg-slate-900 rounded-xl'>
            <div className="h-64 overflow-hidden">
              <img src={image3} alt="" className='w-full rounded-lg'/>
            </div>

            <div className="px-5 py-5 flex items-center">
              <h2 className="text-white text-lg">Amadi John</h2>
              <button onClick={()=>document.getElementById('my_modal_3').showModal()} class="btn btn-active  btn-primary 
                bg-white text-black border-none 
                hover:bg-purple-100 py-3 px-10 ml-auto">
                  Continue to vote
              </button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-lg mt-5 p-10 flex items-center ">
            <h1 className="text-white">Total number of votes</h1>
            <p className="text-white ml-auto flex justify-center items-center py-3 px-5 rounded-full bg-cyan-500">50</p>
          </div>
        </div>


          <dialog id="my_modal_3" className="modal">
            <div className="modal-box h-[32rem] max-w-[40rem]">
              <h3 className="font-bold text-lg pt-10">Hello!, Please Vote below</h3>
              <form method="dialog">
                <select className="select w-full border border-slate-300 mt-5">
                  <option disabled selected>Select your constituency!</option>
                  <option>Khomas</option>
                  <option>Ohangwena</option>
                  <option>Omusati</option>
                  <option>Oshikoto</option>
                  <option>Oshana</option>
                </select>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>

              <div className="pt-5">
                <div className='flex border-y border-slate-200 pt-6 pb-6'>
                  <h2>Amadi John</h2>
                  <input type="radio" name="radio-2" className="radio radio-primary ml-auto" />
                </div>


                <div className='flex border-b border-slate-200 pt-6 pb-6'>
                  <h2>Amadi John</h2>
                  <input type="radio" name="radio-2" className="radio radio-primary ml-auto" />
                </div>

                <div className='flex border-b border-slate-200 pt-6 pb-6'>
                  <h2>Amadi John</h2>
                  <input type="radio" name="radio-2" className="radio radio-primary ml-auto" />
                </div>
                
                <button class="btn btn-active  btn-primary 
                  bg-slate-900 text-white border-none 
                  hover:bg-slate-800 py-3 px-10 mt-5 w-full">
                  Vote Now
              </button>
              </div>
            </div>
          </dialog>


      </div>
    </div>
  )
}

export default VotingComp