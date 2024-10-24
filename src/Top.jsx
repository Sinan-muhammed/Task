import React from 'react'
import Arrow from '../public/Arrow.png' // Import Arrow image
import Horizontal from '../public/horizontal.png' // Import Horizontal image
import Play from '../public/play.png' // Import Play button image
import Features from './cards/Features' // Import Features component

const Top = () => {
  return (
    <div className='md:flex items-center justify-center'>
      {/* Main container, flex layout for medium and larger screens */}
      
      <div className='h-full md:w-[50%] flex md:p-[50px] md:pl-[150px] p-[20px] gap-[12px] md:gap-[40px] flex-col'>
        {/* Left section containing text, play button, and description. Responsive padding and gap settings */}
        
        <div className='pt-[50px]'>
          {/* Container for heading */}
          
          <div className='flex gap-3'>
            {/* First line of the heading with arrow */}
            <h1 className='md:text-[40px] text-[25px] font-bold font-poppins'>We make it the way</h1>
            <img src={Arrow} alt="Arrow" className='md:flex hidden' />
            {/* Arrow is hidden on small screens */}
          </div>

          <div className='flex gap-[5px] font-poppins font-bold text-[25px] md:text-[40px]'>
            {/* Second line of the heading with "child" text highlighted */}
            <h1>your</h1>
            <div className='flex flex-col'>
              <h1 className='text-[#B42AB5]'>child</h1>
              <img src={Horizontal} alt="Horizontal Line" className='hidden md:flex'/>
              {/* Horizontal line is hidden on small screens */}
            </div>
            <h1>loves it</h1>
          </div>
        </div>

        <div className='font-poppins text-[11px] md:text-[15px] text-wrap text-[#616161]'>
          {/* Description text with responsive font size */}
          <h1>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            <br className='md:flex hidden' />
            amet sint. Velit officia consequat duis
          </h1>
          {/* Line break is hidden on smaller screens */}
        </div>

        <div className='flex items-center gap-[20px]'>
          {/* Play button and "Discover now" link */}
          <button className='md:h-[56px] md:w-[56px] h-[50px] w-[50px] bg-[#B42AB5] rounded-full flex items-center justify-center'>
            <img src={Play} alt="Play Button" />
          </button>
          <h1 className='text-[#B42AB5] font-poppins font-semibold text-[14px]'>Discover now</h1>
        </div>
      </div>

      <div className='h-full md:w-[50%] md:p-[90px] md:pt-[190px] pt-[58px]'>
        {/* Right section containing the Features component */}
        <Features/>
      </div>
    </div>
  )
}

export default Top
