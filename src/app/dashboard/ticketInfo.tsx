"use client";

import Image from "next/image";
import Card from "@/app/components/card";
import HelpIcon from "@/public/icons/help_orange.svg";
import Button from "../components/button";
import TicketCard from "./ticketCard";
import UserImg from "@/public/images/user.png";

const ticketArray = [
  {
    img: UserImg,
    id: 19273645,
    raiser_name: " Raiser Name",
    status: "Technical Error",
    dapartment: "Healthcare",
    issues: "Acknowledged",
    heading: "I am facing Technical Issue during the Signup process",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];
const TicketInfo = () => {
  return (
    <div className="w-full">
      <Card>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-60 h-60 bg-ghost_white dark:bg-gray-800 rounded-2xl">
            <Image src={HelpIcon} alt="HelpIcon" />
          </div>
          <div>
            <div className="text-dark_grey dark:text-gray-100  text-base font-medium">
              Total tickets
            </div>
            <div className="text-night dark:text-white text-28 font-bold">
              XXX
            </div>
          </div>
          <Button name="Raise a Ticket" style="bg-theme_blue ml-auto" />
        </div>
        <div className="w-full bg-lavender_web rounded-full h-7 my-6">
          <div className="bg-amber h-7 rounded-full w-1/2"></div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-black_opacity_80 dark:text-white text-base font-medium">
            Pending Tickets (03)
          </div>
          <button className="text-theme_blue text-sm font-medium bg-ghost_white px-4 py-1 rounded-full">
            View All
          </button>
        </div>

        {Array.from({ length: 3 }).map((_, repeatIndex) =>
          ticketArray.map((item, index) => {
            return (
              <TicketCard
                key={index}
                img={item.img}
                id={item.id}
                raiser_name={item.raiser_name}
                status={item.status}
                dapartment={item.dapartment}
                issues={item.issues}
                heading={item.heading}
                discription={item.discription}
              />
            );
          })
        )}
      </Card>
    </div>
  );
};

export default TicketInfo;
