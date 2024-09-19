import { useState } from "react";
import Image from "next/image";

import ProfileImage from "@/public/images/profile.png";
import ArrorIcon from "@/public/icons/Arrow.svg";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2.5  p-2 rounded-lg hover:bg-gray-200 focus:outline-none"
      >
        <Image src={ProfileImage} alt="profile" />

        <span className="text-night font-medium">John Doe</span>

        <Image src={ArrorIcon} alt="arrow" className="-rotate-90" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
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
