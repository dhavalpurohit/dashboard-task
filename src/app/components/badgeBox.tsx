"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface props {
  boxBgColor: string;
  value: number;
  icon: string;
  badgeBgColor: string;
  data?: string[];
}
const BadgeBox: React.FC<props> = ({
  boxBgColor,
  value,
  icon,
  badgeBgColor,
  data,
}) => {
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
    <div className="relative" ref={dropdownRef}>
      <div
        className={`rounded-xl p-2 relative ${boxBgColor}`}
        onClick={toggleDropdown}
      >
        <Image src={icon} alt="notification" />
        <div
          className={`absolute -top-1.5 -right-1.5 rounded-full text-8 text-lavender w-18 h-18 flex items-center justify-center border-2 border-lavender ${badgeBgColor}`}
        >
          {value}
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-black border border-gray-200 rounded-md shadow-lg z-10">
          <div className="py-1">
            {data?.map((item, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:text-black"
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default BadgeBox;
