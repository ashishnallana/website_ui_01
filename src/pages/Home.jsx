import React from "react";
import Navbar from "../components/Navbar";
import Section1 from "./HomeParts/Section1";
import Section2 from "./HomeParts/Section2";
import Section3 from "./HomeParts/Section3";

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Section1 />

      {/* 2nd section */}
      <Section2 />

      {/* 3rd section */}
      <Section3 />
    </div>
  );
}

export default Home;
// className="bg-[#48CEBF] p-3 rounded-full"
