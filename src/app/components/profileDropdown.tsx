"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import ProfileImage from "@/public/images/profile.png";
import ArrorIcon from "@/public/icons/Arrow.svg";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2.5  p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none"
      >
        <Image src={ProfileImage} alt="profile" />

        <span className="text-night dark:text-white font-medium">John Doe</span>

        <Image
          src={ArrorIcon}
          alt="arrow"
          className="-rotate-90 dark:bg-white dark:rounded-md"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-black border border-gray-200 rounded-md shadow-lg z-10">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:text-black"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:text-black"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:text-black"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProfileDropdown;
