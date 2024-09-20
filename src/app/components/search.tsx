"use client";

import SearchIcon from "@/public/icons/search.svg";
import Image from "next/image";

const Search = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-3 gap-3 max-w-306">
      <Image src={SearchIcon} alt={"search"} />
      <input
        type="text"
        placeholder="Search anything..."
        className="w-full border-none focus:outline-none text-gray-700"
      />
    </div>
  );
};
export default Search;
