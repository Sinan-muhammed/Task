import React from "react";
import Bottomline from "../public/bottomline.png";
import Certificate from '../public/certificate.png'

const Bottom = () => {
  return (
    <div className="Bottom  md:h-567 w-full flex md:flex-row flex-col p-[20px] md:pl-[150px] md:pb-[117px] md:gap-[75px]">
      <div className=" flex flex-col gap-[35px] md:pt-[120px] pt-[75px]">
      <div className=" flex flex-col gap-[18px]">
        <div className="md:text-[40px] text-[25px] font-bold font-poppins">
          <div className="flex md:gap-[10px]">
            <div>
              <h1>Much enjoyable</h1>
            </div>
            <div>
              <h1 className="text-[#B42AB5] ml-[8px]"> sessions </h1>
              <img src={Bottomline} alt="" className="hidden md:flex" />
            </div>
          </div>
          <div>
            <h1> wraps in</h1>
          </div>
        </div>
        <div className="font-poppins text-[11px] md:text-[15px] text-wrap  text-[#616161]">
          <h1>Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br /> amet sint. Velit officia consequat duis </h1>
        </div>
        </div>
        <div className="flex items-center text-[#B42AB5] font-poppins font-semibold text-[14px] gap-[18px]">
          <img src={Certificate} alt="" />
          <h1>Certificate included</h1>
        </div>
      </div>
      <div className="h-full md:w-[50%] pt-[50px] md:pt-[107px] md:p-[50px] flex items-center justify-center ">
          <div className="Coupon p-[50px] ">
              <div className="flex flex-col justify-center items-center gap-[30px]">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-[15px]">
                    <h1 className="text-white text-[50px] font-bold">₹</h1>
                    <h1 className="text-white font-poppins text-[50px] font-bold"> 199</h1>
                    </div>
                    <h1 className="font-poppins text-[20px] text-white font-light">Per head</h1>
                  </div>
                  <div>
                  <div className="border w-[72px] h-[27px] rounded-[25px] flex items-center justify-center  border-[#fdd30060]">
                    <h1 className="text-[13px] font-poppins text-[#FDD400]">60% OFF</h1>
                  </div>
                  </div>
              </div>
              <div className="pt-[70px] flex items-center justify-center">
                <a href="" className="font-poppins text-[18px] text-white tracking-wide">GET NOW</a>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Bottom;
