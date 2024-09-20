"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "@/public/icons/HamburgerMenu.svg";
import ArrowIcon from "@/public/icons/Arrow.svg";
import HomeIcon from "@/public/icons/home.svg";
import BoxIcon from "@/public/icons/box.svg";
import ChatIcon from "@/public/icons/chat.svg";
import SettingIcon from "@/public/icons/setting.svg";
import HelpIcon from "@/public/icons/help.svg";

interface SidebarProps {
  onToggle: (isOpen: boolean) => void;
}

const SideNavBar: React.FC<SidebarProps> = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState);
  };

  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
  };

  const MenuItems = [
    {
      title: "Dashboard",
      Icon: HomeIcon,
      href: "/dashboard",
    },
    {
      title: "Product",
      Icon: BoxIcon,
      href: "/product",
    },
    {
      title: "Chat",
      Icon: ChatIcon,
      href: "/chat",
    },
  ];

  const onMouseEnter = () => {
    setIsOpen(true);
    onToggle(true);
  };
  const onMouseLeave = () => {
    setIsOpen(false);
    onToggle(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white text-black transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-16"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center gap-2">
        <button
          onClick={handleToggle}
          className="p-4 text-gray-400 hover:text-gray-100 focus:outline-none"
        >
          {isOpen ? (
            <Image
              src={ArrowIcon}
              alt={"ArrowIcon"}
              className="min-w-6 min-h-6 w-6 h-6"
            />
          ) : (
            <Image
              src={HamburgerMenu}
              alt={"HamburgerMenu"}
              className="min-w-6 min-h-6 w-6 h-6"
            />
          )}
        </button>
        {isOpen && <h1 className="text-2xl">Logo</h1>}
      </div>

      {/* Menu Items */}
      <div className="flex flex-col py-20 h-full">
        <div>
          {MenuItems.map((item, index) => {
            return (
              <Link
                href={item.href}
                key={index}
                className={`relative flex items-center p-4 hover:bg-light_grey transition-colors duration-200 ${
                  activeIndex === index
                    ? "bg-light_grey before:absolute before:h-full before:w-1.5 before:bg-black before:left-0 before:rounded-e-md"
                    : ""
                }`}
                onClick={() => handleMenuClick(index)}
              >
                <Image src={item.Icon} alt={"Home"} />
                <span
                  className={`ml-4 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-200`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-auto">
          <Link
            href="/help"
            className="relative flex items-center p-4 hover:bg-light_grey transition-colors duration-200"
          >
            <Image src={HelpIcon} alt={"help"} />
            <span
              className={`ml-4 ${
                isOpen ? "opacity-100" : "opacity-0"
              } transition-opacity duration-200`}
            >
              Help
            </span>
          </Link>
          <Link
            href="/setting"
            className="relative flex items-center p-4 hover:bg-light_grey transition-colors duration-200"
          >
            <Image src={SettingIcon} alt={"setting"} />
            <span
              className={`ml-4 ${
                isOpen ? "opacity-100" : "opacity-0"
              } transition-opacity duration-200`}
            >
              Setting
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
