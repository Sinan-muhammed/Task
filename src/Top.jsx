import React from 'react'
import Arrow from '../public/Arrow.png'
import Horizontal from '../public/horizontal.png'
import Play from '../public/play.png'
import Features from './cards/Features'

const Top = () => {
  return (
    <div className='md:flex items-center justify-center md:pb-[260px]'>
      <div className='h-full  md:w-[50%] flex md:p-[100px] p-[20px] gap-[12px] md:gap-[40px] flex-col'>
        <div className='md:pt-[200px] pt-[100px] '>
           <div className=' flex gap-3'>
            <h1 className='md:text-[40px] text-[25px] font-bold font-poppins'>We make it the way </h1>
            <img src={Arrow} alt="" className='md:flex hidden' />
           </div>
           <div className='flex gap-[5px] font-poppins font-bold text-[25px] md:text-[40px]'>
            <h1>your</h1>
            <div className='flex flex-col  '>     
            <h1 className='text-[#B42AB5]'>child</h1>
            <img src={Horizontal} alt="" className='hidden md:flex'/>
            </div>
            <h1>loves it</h1>
           </div>
        </div>
        <div className='font-poppins text-[11px] md:text-[15px] text-wrap  text-[#616161]'>  
            <h1>Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br className='md:flex hidden' /> amet sint. Velit officia consequat duis </h1> 
        </div>
        <div className='flex items-center gap-[20px]'>
           <button className='md:h-[56px] md:w-[56px] h-[50px] w-[50px] bg-[#B42AB5] rounded-full flex items-center justify-center'>
            <img src={Play} alt="" />
           </button>
           <h1 className='text-[#B42AB5] font-poppins font-semibold text-[14px] '>Discover now</h1>
        </div>
      </div>
      <div className='h-full md:w-[50%] md:p-[90px] md:pt-[190px] pt-[58px]'>
         <Features/>
      </div>
    </div>
  )
}

export default Top