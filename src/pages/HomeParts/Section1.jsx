import React from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import vector from "../../assets/Vector 1.png";
import hero1 from "../../assets/hero1.png";

function Section1() {
  return (
    <div className="h-screen w-full">
      <div
        className="h-[100vh] w-[100vw] absolute top-0 left-0 flex flex-row-reverse max-[850px]:flex-col"
        style={{
          backgroundImage: `url('${vector}')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        {/* landing screen img */}
        <div className="w-[50vw] flex justify-center items-center max-[850px]:w-[100vw] max-[850px]:h-[50vh] max-[850px]:items-end">
          <img src={hero1} alt="" className="h-[400px] max-[850px]:h-[250px]" />
        </div>
        {/* landing screen text */}
        <div className="w-[50vw] p-10 flex flex-col justify-center max-[850px]:w-[100vw]">
          <h1 className="text-[50px] text-white font-[700] leading-[68.09px] max-[850px]:text-3xl">
            Lorem ipsum dolor sit <br />
            Lorem ipsum dolor amet.
          </h1>
          <p className="text-white mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            pulvinar, dui ut erat metus ultrices eros, non euismod nunc tortor
            vel dolor.
          </p>
          <button className="flex w-[280px] justify-center text-[30px] items-center text-white px-5 py-3 rounded-md mt-20 max-[850px]:mt-10 bg-[#269588]">
            <span>Get Started </span>
            <ExpandLessIcon className="rotate-90 ml-2" fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
