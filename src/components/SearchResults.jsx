import React from "react";
import Result from "./Result";
import dpIcon from "../assets/account-avatar-multimedia-svgrepo-com (1) 2.png";

function SearchResults() {
  return (
    <div>
      <h2 className="text-[24px] my-5">Search Result 10 Record found</h2>
      <Result icon={dpIcon} name="Nishant Saxena" />
      <Result icon={dpIcon} name="Nishant Saxena" />
      <Result icon={dpIcon} name="Nishant Saxena" />
      <Result icon={dpIcon} name="Nishant Saxena" />
      <Result icon={dpIcon} name="Nishant Saxena" />
      <Result icon={dpIcon} name="Nishant Saxena" />
      <Result icon={dpIcon} name="Nishant Saxena" />
      <Result icon={dpIcon} name="Nishant Saxena" />
      <Result icon={dpIcon} name="Nishant Saxena" />
      <Result icon={dpIcon} name="Nishant Saxena" />
    </div>
  );
}

export default SearchResults;
