import React from 'react'
import Arrow from '../public/Arrow.png'
import Horizontal from '../public/horizontal.png'
import Play from '../public/play.png'
import Features from './cards/Features'

const Top = () => {
  return (
    <div className='flex items-center justify-center pb-[260px]'>
      <div className='h-full  w-[50%] flex p-[100px] bg-slate-400 gap-[40px] flex-col'>
        <div className='pt-[200px]'>
           <div className=' flex gap-3'>
            <h1 className='text-[40px] font-bold font-poppins'>We make it the way </h1>
            <img src={Arrow} alt="" />
           </div>
           <div className='flex gap-[5px] font-poppins font-bold text-[40px]'>
            <h1>your</h1>
            <div className='flex flex-col  '>     
            <h1 className='text-[#B42AB5]'>child</h1>
            <img src={Horizontal} alt="" />
            </div>
            <h1>loves it</h1>
           </div>
        </div>
        <div className='font-poppins text-[15px] text-[#616161]'>  
            <h1>Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br /> amet sint. Velit officia consequat duis </h1> 
        </div>
        <div className='flex items-center gap-[20px]'>
           <div className='h-[56px] w-[56px] bg-[#B42AB5] rounded-full flex items-center justify-center'>
            <img src={Play} alt="" />
           </div>
           <h1 className='text-[#B42AB5] font-poppins font-semibold text-[14px] '>Discover now</h1>
        </div>
      </div>
      <div className='h-full w-[50%] '>
         <Features/>
      </div>
    </div>
  )
}

export default Top