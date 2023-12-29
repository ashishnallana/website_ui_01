import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [mobNav, setmobNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight - 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="text-white text-[35px] flex py-3 fixed top-0 w-full z-50"
      style={{
        backgroundImage:
          scrolled &&
          "linear-gradient(276.87deg, #008374 -69.4%, #2AA395 43.27%, #00796B 98.3%)",
      }}
    >
      <h1 className="min-[1100px]:w-[400px] w-[150px] pl-10">Logo</h1>
      {/* menu btn for small screens */}
      <div className="absolute right-5 top-3 min-[850px]:hidden z-50 cursor-pointer">
        {mobNav ? (
          <CloseIcon fontSize="large" onClick={() => setmobNav(false)} />
        ) : (
          <MenuIcon fontSize="large" onClick={() => setmobNav(true)} />
        )}
      </div>

      {/* links and btns */}
      <div className="text-[16px] flex-1 flex justify-around items-center max-[850px]:hidden">
        <Link>Home</Link>
        <Link to="/dashboard">Dashboard</Link>
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
        <div
          className="text-[16px] flex flex-col top-0 text-white fixed w-full h-full left-0 justify-center items-end space-y-5 p-5 min-[850px]:hidden"
          style={{
            backgroundImage:
              "linear-gradient(276.87deg, #008374 -69.4%, #2AA395 43.27%, #00796B 98.3%)",
          }}
        >
          <Link>Home</Link>
          <Link to="/dashboard">Dashboard</Link>
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
