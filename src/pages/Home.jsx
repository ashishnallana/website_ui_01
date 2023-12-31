import React from "react";
import Navbar from "../components/Navbar";
import Section1 from "./HomeParts/Section1";
import Section2 from "./HomeParts/Section2";
import Section3 from "./HomeParts/Section3";
import Section4 from "./HomeParts/Section4";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <Section1 />

      {/* 2nd section */}
      <Section2 />

      {/* 3rd section */}
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default Home;
// className="bg-[#48CEBF] p-3 rounded-full"
