import React from 'react'
import Yellow from '../../public/yellow.png'
import Guidance from '../../public/Guidance.png'
import Vertical from '../../public/vertical.png'
import Experience from  '../../public/Experience.png'
import Decision from '../../public/Decision.png'
import Pink from '../../public/pink.png'
const Features = () => {
  return (
    <div className='flex flex-col md:flex-row sm:  md:h-[670px] gap-[6px] md:gap-[20px]'>
        <div className=' h-full md:w-[40%]  md:flex md:flex-col md:gap-[17px]  items-center md:pl-[39px] justify-center'>
            <div className='md:flex hidden justify-end  md:w-full '>
            <img src={Yellow} alt="" />
            </div>
            <div className='w-full'>
            <div className='md:h-[238px] md:w-[218px]  bg-[#344AC1] p-[23px] flex flex-col gap-[22px]'>
                <div>
                <img src={Guidance} />
                </div>
                <div className='flex flex-col gap-[10px]'>
                   <h1 className='font-poppins text-white text-[13px] font-semibold'>Guidance</h1>
                   <h2 className='font-poppins text-white text-[13px] font-light'>Amet minim mollit non <br className='hidden md:flex'/> deserunt ullamco est sit <br className='hidden md:flex'/> aliqua dolor do amet sint. <br className='hidden md:flex'/> Velit officia consequat <br className='hidden md:flex'/> duis enim velit mollit. </h2>
                </div>
            </div>           
               <img src={Vertical} alt="" className='pl-[43%] hidden md:flex'/>
            </div>
        </div> 
        <div className=' md:w-[60%]  md:pr-[90px] flex flex-col md:gap-0 gap-[6px]'>
               <div className='h-[50%] w-full '>
                <div className='bg-[#388A7C] p-[30px] flex flex-col gap-[22px]'>
                <div>
                 <img src={Experience} alt="" />
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h1 className='font-poppins text-white text-[13px] font-semibold'>Exploring skills</h1>
                    <h2 className='font-poppins text-white text-[13px] font-light'>Amet minim mollit non deserunt <br className='hidden md:flex'/> ullamco est sit aliqua dolor do <br className='hidden md:flex'/> amet sint. Velit officia consequat <br className='hidden md:flex'/> duis enim velit mollit. <br className='hidden md:flex'/> 
Amet minim mollit non deserunt <br className='hidden md:flex'/> ullamco est sit aliqua dolor do <br className='hidden md:flex'/> amet sint. Velit officia consequat <br className='hidden md:flex'/> duis enim velit mollit. </h2>
                </div>
                </div>
               </div>
               <div className='h-[50%] w-full flex gap-[10%]'>
                 <div className='md:h-[80%] h-full w-full md:w-[80%] bg-[#151517] p-[26px] flex flex-col gap-[22px]'>
                    <div>
                        <img src={Decision} alt="" />
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <h1 className='font-poppins text-white text-[13px] font-semibold'>Decision making</h1>
                        <h2 className='font-poppins text-white text-[13px] font-light'>Amet minim mollit non <br className='hidden md:flex'/> deserunt ullamco est sit <br className='hidden md:flex'/> aliqua dolor do amet sint. <br className='hidden md:flex'/> Velit officia consequat <br className='hidden md:flex'/> duis enim velit mollit. </h2>
                    </div>
                 </div>
                 <div className='md:flex md:flex-col hidden'>
                    <img src={Pink} alt="" />
                 </div>
               </div>
        </div>
    </div>
  )
}

export default Features