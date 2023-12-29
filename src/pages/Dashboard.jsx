import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchOptions from "../components/SearchOptions";
import SearchResults from "../components/SearchResults";
import { Link } from "react-router-dom";

function Dashboard() {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState(false);
  const [results, setResults] = useState(false);
  const [menu, setmenu] = useState(false);

  return (
    <div>
      {/* navbar2 */}
      <div className="flex w-screen h-[60px] bg-[#00796B] text-white items-center pl-3">
        <div className="min-[910px]:hidden">
          <MenuIcon
            onClick={() => {
              menu ? setmenu(false) : setmenu(true);
            }}
          />
        </div>

        <h1 className="min-[1100px]:w-[400px] w-[150px] ml-3 text-3xl">
          <Link to="/">Logo</Link>
        </h1>
      </div>
      {/* dashboard content */}
      <div className="flex w-screen">
        {/* menu */}
        <div className="w-[250px] h-[calc(100vh - 60px)] bg-white text-black p-5 flex flex-col space-y-3 max-[910px]:hidden">
          <p>
            <span>Menu One</span>
            <KeyboardArrowRightIcon className="opacity-50" />
          </p>
          <p>
            <span>Menu One</span>
            <KeyboardArrowRightIcon className="opacity-50" />
          </p>
          <p>
            <span>Menu One</span>
            <KeyboardArrowRightIcon className="opacity-50" />
          </p>
          <p>
            <span>Menu One</span>
            <KeyboardArrowRightIcon className="opacity-50" />
          </p>
          <p>
            <span>Menu One</span>
            <KeyboardArrowRightIcon className="opacity-50" />
          </p>
          <p>
            <span>Menu One</span>
            <KeyboardArrowRightIcon className="opacity-50" />
          </p>
        </div>
        {/* menu mobile */}
        {menu && (
          <div className="w-[250px] h-[calc(100vh - 60px)] bg-white text-black p-5 flex flex-col space-y-3 absolute h-[calc(100vh-60px)]">
            <p>
              <span>Menu One</span>
              <KeyboardArrowRightIcon className="opacity-50" />
            </p>
            <p>
              <span>Menu One</span>
              <KeyboardArrowRightIcon className="opacity-50" />
            </p>
            <p>
              <span>Menu One</span>
              <KeyboardArrowRightIcon className="opacity-50" />
            </p>
            <p>
              <span>Menu One</span>
              <KeyboardArrowRightIcon className="opacity-50" />
            </p>
            <p>
              <span>Menu One</span>
              <KeyboardArrowRightIcon className="opacity-50" />
            </p>
            <p>
              <span>Menu One</span>
              <KeyboardArrowRightIcon className="opacity-50" />
            </p>
          </div>
        )}
        {/* main */}
        <div className="flex-1 bg-[#F2FBFA] h-[calc(100vh - 60px)] p-5 overflow-y-scroll">
          {/* hello txt */}
          <div className="text-[#24B7A5]">
            <h1 className="text-[24px]">Hello Shreyansh Jha!</h1>
            <p className="text-[15px]">Let’s start prospecting.</p>
          </div>
          <div className="flex flex-col w-[inherit] justify-center items-center mt-10 bg-white p-5">
            <h3 className="text-[20px] mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </h3>
            <div className="flex">
              <div className="flex space-x-2 mr-3 bg-white items-center px-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_116_128)">
                    <path
                      d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                      fill="#EFE9E9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_116_128">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <input
                  type="text"
                  className="outline-none w-[500px] font-normal max-[1000px]:w-[160px]"
                  placeholder="Enter Linkedin url / email / Search by DIN"
                  onFocus={() => setOptions(true)}
                  onBlur={() => setOptions(false)}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                {options && <SearchOptions />}
              </div>
              <button
                className="flex bg-[#48CEBF] items-center text-white p-2 space-x-3 rounded-md"
                onClick={() => setResults(true)}
              >
                <span>Search</span>
                <KeyboardArrowRightIcon />
              </button>
            </div>
          </div>

          {results ? (
            <SearchResults />
          ) : (
            <div>
              {/* cards */}
              <div className="flex flex-wrap">
                <div className="m-5 flex justify-between items-center bg-[#FFB800A6] w-[260px] text-white rounded-md pl-3 py-3">
                  <div className="flex flex-col items-center">
                    <h3 className="text-[20px]">You are on</h3>
                    <p className="text-[40px]">60</p>
                  </div>
                  <button className="bg-[rgba(0,0,0,0.5)] rounded-tl-full rounded-bl-full px-3 py-1">
                    Upgrade
                  </button>
                </div>
                {/*  */}
                <div className="m-5 flex justify-between items-center bg-[#D36DCF] w-[260px] text-white rounded-md pl-3 py-3">
                  <div className="flex flex-col items-center">
                    <h3 className="text-[20px]">You are on</h3>
                    <p className="text-[40px]">60</p>
                  </div>
                  <button className="bg-[rgba(0,0,0,0.5)] rounded-tl-full rounded-bl-full px-3 py-1">
                    Upgrade
                  </button>
                </div>
                {/*  */}
                <div className="m-5 flex justify-between items-center bg-[#FB5C5C] w-[260px] text-white rounded-md pl-3 py-3">
                  <div className="flex flex-col items-center">
                    <h3 className="text-[20px]">My Team</h3>
                    <p className="text-[40px]">60</p>
                  </div>
                  <button className="bg-[rgba(0,0,0,0.5)] rounded-tl-full rounded-bl-full px-3 py-1">
                    Upgrade
                  </button>
                </div>
                {/*  */}
                <div className="m-5 flex justify-between items-center bg-[#62A0B4] w-[260px] text-white rounded-md pl-3 py-3">
                  <div className="flex flex-col items-center">
                    <h3 className="text-[20px]">Credits Left</h3>
                    <p className="text-[40px]">60</p>
                  </div>
                  <button className="bg-[rgba(0,0,0,0.5)] rounded-tl-full rounded-bl-full px-3 py-1">
                    Upgrade
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
