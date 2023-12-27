import React from "react";
import logo from "../assets/1.png";
import bg from "../assets/skyscraper-view-city-leader-window-frame_1134-1034 1.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex">
      {/* content */}
      <div
        className="h-screen w-[50vw] max-[850px]:w-screen"
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* green layer */}
        <div className="bg-[#00837496] absolute top-0 left-0 w-[inherit] h-[inherit]"></div>
        {/* logo */}
        <Link to="/">
          <div
            className="absolute w-[156px] h-[32px] left-[58px] top-6"
            style={{ backgroundImage: `url('${logo}')` }}
          ></div>
        </Link>
        {/* text */}
        <div className="text-white w-[42vw] relative top-[50%] left-[58px] translate-y-[-50%] max-[850px]:hidden">
          <h1 className="text-[40px] leading-[54.47px]">
            Welcome to Company name
          </h1>
          <p className="text-[24px] leading-[32.68px] mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      {/* form */}
      <div className="min-[850px]:h-screen w-[50vw] bg-[#008374] flex justify-center items-center max-[850px]:absolute max-[850px]:top-[50%] max-[850px]:left-[50%] max-[850px]:translate-x-[-50%] max-[850px]:translate-y-[-50%] py-10 px-5 min-w-[320px] rounded-md">
        {/* svg */}
        <svg
          className=" absolute bottom-0 right-0 max-[1200px]:w-[50vw] min-[1200px]:h-[35vh] max-[850px]:hidden"
          viewBox="0 0 738 359"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M250 207C94.8 199 17.3333 306.333 0 359H739L736 4.99978C600 -19.0002 519.333 57.6664 496 98.9998C426 223 310.667 205 250 207Z"
            fill="#00796B"
          />
        </svg>
        {/* inputs and btn */}
        <div className="flex flex-col space-y-5 w-[350px]">
          <h1 className="text-center text-[24px] text-white mb-3">Sign In</h1>
          <input
            type="text"
            placeholder="Enter work email"
            className="p-3 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Enter Password"
            className="p-3 rounded-md outline-none"
          />
          <button className="text-[24px] leading-[32.68px] text-white bg-[#24B7A5] py-2 px-3 rounded-md">
            Login
          </button>
          <p className="text-white flex space-x-2 items-center">
            <span className="text-[16px]">You Don’t have an account?</span>
            <a href="#" className="text-[#25FFE5] text-[18px]">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
