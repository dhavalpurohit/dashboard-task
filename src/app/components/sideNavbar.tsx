"use client";

import { useState } from "react";
import Image from "next/image";
import HamburgerMenu from "@/public/images/HamburgerMenu.svg";
import ArrowIcon from "@/public/images/Arrow.svg";

interface SidebarProps {
  onToggle: (isOpen: boolean) => void;
}

const SideNavBar: React.FC<SidebarProps> = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState);
  };

  // const onMouseEnter = () => {
  //   setIsOpen(true);
  //   onToggle(true);
  // };

  // const onMouseLeave = () => {
  //   setIsOpen(false);
  //   onToggle(false);
  // };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white text-black transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-16"
      }`}
      // onMouseEnter={onMouseEnter}
      // onMouseLeave={onMouseLeave}
    >
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="p-4 text-gray-400 hover:text-gray-100 focus:outline-none"
      >
        {isOpen ? (
          <Image src={ArrowIcon} alt={"ArrowIcon"} />
        ) : (
          <Image
            src={HamburgerMenu}
            alt={"HamburgerMenu"}
            className="stroke-red-500"
          />
        )}
      </button>

      {/* Menu Items */}
      <div className="mt-8">
        <a
          href="#"
          className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="min-w-6 min-h-6 w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 6h18M3 12h18m-7 6h7"
            />
          </svg>
          <span
            className={`ml-4 ${
              isOpen ? "opacity-100" : "opacity-0"
            } transition-opacity duration-200`}
          >
            Menu 1
          </span>
        </a>
        <a
          href="#"
          className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="min-w-6 min-h-6 w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5v14l11-7z"
            />
          </svg>
          <span
            className={`ml-4 ${
              isOpen ? "opacity-100" : "opacity-0"
            } transition-opacity duration-200`}
          >
            Menu 2
          </span>
        </a>
        {/* Add more menu items as needed */}
      </div>
    </div>
  );
};

export default SideNavBar;
