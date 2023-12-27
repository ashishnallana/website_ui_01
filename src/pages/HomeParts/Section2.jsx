import React from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import microsoftLogo from "../../assets/microsoft.png";
import tataAiaLogo from "../../assets/tata-aia.png";
import ndtvLogo from "../../assets/ndtv.png";
import oyoLogo from "../../assets/oyo.png";
import amazonLogo from "../../assets/amazon.png";
import audiLogo from "../../assets/audi.png";

function Section2() {
  return (
    <div className="flex flex-col items-center py-10 px-5">
      <h2 className="flex items-center text-[30px]">
        <svg
          className="mr-5"
          width="61"
          height="9"
          viewBox="0 0 61 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="15" height="9" rx="4.5" fill="#CDC8FD" />
          <rect x="26" width="35" height="9" rx="4.5" fill="#CDC8FD" />
        </svg>

        <span>Lorem ipsum dolor amet, consectetur adipiscing</span>
      </h2>
      <p className="mx-10 my-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        pulvinar, dui ut pharetra luctus, erat metus ultrices eros, non euismod
        nunc tortor vel dolor. Quisque molestie rutrum dui, non pharetra neque
        tincidunt vel. Suspendisse tempus rhoncus pulvinar. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc
        et lacinia elit. Suspendisse hendrerit in dui eu laoreet. Sed tincidunt
        ut lectus id tristique. Morbi sodales porta dui et lobortis.
      </p>

      <button className="flex justify-center text-[22px] items-center text-white px-5 py-3 rounded-md bg-[#269588]">
        <span>Lorem ipsum dolor sit amet </span>
        <ExpandLessIcon className="rotate-90 ml-2" fontSize="large" />
      </button>

      {/* customer brands */}
      <div className="px-10 mt-20 max-[1150px]:px-0">
        <div className="text-[28px] text-center py-10 shadow-lg rounded-md max-[1150px]:w-[100vw] max-[1150px]:px-5">
          <h3>
            More than 280,000+ businesses trust EasyLeadz for their prospecting
            needs
          </h3>
          {/* company logos */}
          <div className="mt-10 flex overflow-x-hidden justify-center max-[850px]:overflow-x-scroll max-[850px]:justify-start">
            <img
              src={microsoftLogo}
              alt=""
              className="h-[50px] max-w-[100px] mx-10"
            />
            <img
              src={tataAiaLogo}
              alt=""
              className="h-[50px] max-w-[100px] mx-10"
            />
            <img
              src={ndtvLogo}
              alt=""
              className="h-[50px] max-w-[100px] mx-10"
            />
            <img
              src={oyoLogo}
              alt=""
              className="h-[50px] max-w-[100px] mx-10"
            />
            <img
              src={amazonLogo}
              alt=""
              className="h-[50px] max-w-[100px] mx-10"
            />
            <img
              src={audiLogo}
              alt=""
              className="h-[50px] max-w-[100px] mx-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
