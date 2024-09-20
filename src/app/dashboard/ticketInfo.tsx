"use client";

import Image from "next/image";
import Card from "@/app/components/card";
import SalesIcon from "@/public/icons/sales.svg";
import ChartLine from "@/app/Icons/ChartLin";

const TicketInfo = () => {
  return (
    <div className="w-full">
      <Card>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-60 h-60 bg-ghost_white rounded-2xl">
            <Image src={SalesIcon} alt="SalesIcon" />
          </div>
          <div>
            <div className="text-dark_grey text-base font-medium">
              Total Sales
            </div>
            <div className="text-night text-28 font-bold">Rs. xxx.xx</div>
          </div>
        </div>
        <hr className="my-4 border-silver" />
        <div className="flex w-full gap-4">
          <ChartLine stroke="stroke-amber" />
          <p className="text-sm text-dark_grey max-w-92">
            <span className="text-amber">+ 5%</span> more from last week
          </p>
        </div>
      </Card>
    </div>
  );
};

export default TicketInfo;
