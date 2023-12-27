import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [mobNav, setmobNav] = useState(false);

  return (
    <div className="text-white text-[35px] flex py-3 fixed top-0 w-full z-50">
      <h1 className="min-[1100px]:w-[400px] w-[150px] pl-10">Logo</h1>
      {/* menu btn for small screens */}
      {/* <MenuIcon
        fontSize="large"
        className="absolute right-5 top-6 max-[850px]:hidden z-50"
        // onClick={() => setmobNav(false)}
      /> */}
      {/* {mobNav ? (
        <CloseIcon
          fontSize="large"
          className="absolute right-5 top-6 min-[850px]:hidden z-50"
          onClick={() => setmobNav(true)}
        />
      ) : (
        <MenuIcon
          fontSize="large"
          className="absolute right-5 top-6 max-[850px]:hidden z-50"
          onClick={() => setmobNav(false)}
        />
      )} */}

      {/* links and btns */}
      <div className="text-[16px] flex-1 flex justify-around items-center max-[850px]:hidden">
        <Link>Home</Link>
        <Link>Dashboard</Link>
        <Link>Pricing</Link>
        <Link>Resource</Link>
        <div className="flex space-x-5">
          <Link className="bg-[#E82222] px-5 py-3 rounded-full shadow-md">
            Start Free Trial
          </Link>
          <Link className="bg-[#3811775E] px-5 py-3 rounded-full shadow-md">
            Schedule Demo
          </Link>
        </div>
      </div>

      {/* navbar for mobile screens */}
      {mobNav && (
        <div className="h-full w-full absolute top-0 bg-[rgba(255,255,255,0.3)] blur-md min-[850px]:hidden"></div>
      )}

      {mobNav && (
        <div className="text-[16px] flex flex-col text-white absolute top-0 w-full h-full left-0 justify-center items-end space-y-5 p-5 min-[850px]:hidden">
          <Link>Home</Link>
          <Link>Dashboard</Link>
          <Link>Pricing</Link>
          <Link>Resource</Link>
          <Link className="bg-[#E82222] px-5 py-3 rounded-full shadow-md w-[200px]">
            Start Free Trial
          </Link>
          <Link className="bg-[#3811775E] px-5 py-3 rounded-full shadow-md w-[200px]">
            Schedule Demo
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
