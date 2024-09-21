"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import ArrowIcon from "@/public/icons/Arrow.svg";

interface props {
  image?: any;
  list: string[];
  title: string;
}

const Dropdown: React.FC<props> = ({ image, list, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(title);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item: string) => {
    setSelectedValue(item);
    setIsOpen(false);
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
        className="flex items-center space-x-2.5  p-2 rounded-lg bg-white dark:bg-black hover:bg-gray-200 focus:outline-none border-0.5 border-jordy_blue dark:border-gray-200"
      >
        {image && <Image src={image} alt="image" className="w-5 h-5" />}

        <span className="text-night dark:text-white font-medium">
          {selectedValue}
        </span>

        <Image src={ArrowIcon} alt="arrow" className="-rotate-90 " />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-black border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1">
            {list.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => handleSelectItem(item)}
                  className="block px-4 py-2 text-gray-700 dark:text-white dark:hover:text-black hover:bg-gray-100"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
