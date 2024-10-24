import React from "react";
import Yellow from "../../public/yellow.png"; // Import Yellow image
import Guidance from "../../public/Guidance.png"; // Import Guidance image
import Vertical from "../../public/vertical.png"; // Import Vertical image
import Experience from "../../public/Experience.png"; // Import Experience image
import Decision from "../../public/Decision.png"; // Import Decision image
import Pink from "../../public/pink.png"; // Import Pink image

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row sm: md:h-[670px] gap-[6px] md:gap-[20px]">
      {/* Main container, responsive for both column and row layouts, with gap adjustments for smaller and larger screens */}

      <div className="h-full md:w-[40%] md:flex md:flex-col md:gap-[17px] items-center md:pl-[39px] justify-center">
        {/* Left section with responsive width, containing the first card and additional visuals */}

        <div className="md:flex hidden justify-end md:w-full">
          {/* Yellow image only visible on larger screens */}
          <img src={Yellow} alt="Yellow decoration" />
        </div>

        <div className="w-full">
          {/* Container for Guidance card and Vertical image */}

          <div className="md:h-[238px] md:w-[218px] bg-[#344AC1] p-[23px] flex flex-col gap-[22px]">
            {/* Card with Guidance content */}

            <div>
              <img src={Guidance} alt="Guidance Icon" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-poppins text-white text-[13px] font-semibold">
                Guidance
              </h1>
              <h2 className="font-poppins text-white text-[13px] font-light">
                Amet minim mollit non <br className="hidden md:flex" />
                deserunt ullamco est sit <br className="hidden md:flex" />
                aliqua dolor do amet sint. <br className="hidden md:flex" />
                Velit officia consequat <br className="hidden md:flex" />
                duis enim velit mollit.
              </h2>
              {/* Guidance text, responsive with hidden line breaks on small screens */}
            </div>
          </div>

          <img
            src={Vertical}
            alt="Vertical decoration"
            className="pl-[43%] hidden md:flex"
          />
          {/* Vertical line only visible on medium and larger screens */}
        </div>
      </div>

      <div className="md:w-[60%] md:pr-[90px] flex flex-col md:gap-0 gap-[6px]">
        {/* Right section with two cards stacked vertically */}

        <div className="h-[50%] w-full">
          {/* Upper card section (Exploring skills) */}

          <div className="bg-[#388A7C] p-[30px] flex flex-col gap-[22px]">
            <div>
              <img src={Experience} alt="Experience Icon" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-poppins text-white text-[13px] font-semibold">
                Exploring skills
              </h1>
              <h2 className="font-poppins text-white text-[13px] font-light">
                Amet minim mollit non deserunt <br className="hidden md:flex" />
                ullamco est sit aliqua dolor do{" "}
                <br className="hidden md:flex" />
                amet sint. Velit officia consequat{" "}
                <br className="hidden md:flex" />
                duis enim velit mollit. <br className="hidden md:flex" />
                Amet minim mollit non deserunt <br className="hidden md:flex" />
                ullamco est sit aliqua dolor do{" "}
                <br className="hidden md:flex" />
                amet sint. Velit officia consequat{" "}
                <br className="hidden md:flex" />
                duis enim velit mollit.
              </h2>
              {/* Exploring skills text with responsiveness (line breaks hidden on smaller screens) */}
            </div>
          </div>
        </div>

        <div className="h-[50%] w-full flex gap-[10%]">
          {/* Lower card section (Decision making) */}

          <div className="md:h-[80%] h-full w-full md:w-[80%] bg-[#151517] p-[26px] flex flex-col gap-[22px]">
            <div>
              <img src={Decision} alt="Decision Icon" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-poppins text-white text-[13px] font-semibold">
                Decision making
              </h1>
              <h2 className="font-poppins text-white text-[13px] font-light">
                Amet minim mollit non <br className="hidden md:flex" />
                deserunt ullamco est sit <br className="hidden md:flex" />
                aliqua dolor do amet sint. <br className="hidden md:flex" />
                Velit officia consequat <br className="hidden md:flex" />
                duis enim velit mollit.
              </h2>
              {/* Decision making text, with responsive line breaks */}
            </div>
          </div>

          <div className="md:flex md:flex-col hidden">
            {/* Pink image visible only on larger screens */}
            <img src={Pink} alt="Pink decoration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
