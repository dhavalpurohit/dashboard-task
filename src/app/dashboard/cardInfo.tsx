"use client";

import Image from "next/image";
import Card from "@/app/components/card";
import SalesIcon from "@/public/icons/sales.svg";
import Customer from "@/public/icons/customer.svg";
import Order from "@/public/icons/order.svg";
import ChartLine from "@/app/Icons/ChartLin";

const CardInfo = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-60 h-60 bg-ghost_white  dark:bg-gray-800 rounded-2xl">
            <Image src={SalesIcon} alt="SalesIcon" />
          </div>
          <div>
            <div className="text-dark_grey dark:text-gray-100 text-base font-medium">
              Total Sales
            </div>
            <div className="text-night dark:text-white text-28 font-bold">
              Rs. xxx.xx
            </div>
          </div>
        </div>
        <hr className="my-4 border-silver" />
        <div className="flex w-full gap-4">
          <ChartLine stroke="stroke-amber" />
          <p className="text-sm text-dark_grey dark:text-gray-100 max-w-92">
            <span className="text-amber">+ 5%</span> more from last week
          </p>
        </div>
      </Card>
      <Card>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-60 h-60 bg-ghost_white dark:bg-gray-800 rounded-2xl">
            <Image src={Customer} alt="Customer" />
          </div>
          <div>
            <div className="text-dark_grey dark:text-gray-100 text-base font-medium">
              Total Customers
            </div>
            <div className="text-night dark:text-white text-28 font-bold">
              xxx
            </div>
          </div>
        </div>
        <hr className="my-4 border-silver" />
        <div className="flex w-full gap-4">
          <ChartLine stroke="stroke-light_bittersweet" />
          <p className="text-sm text-dark_grey dark:text-gray-100 max-w-92">
            <span className="text-light_bittersweet">- 10%</span> more from last
            week
          </p>
        </div>
      </Card>
      <Card>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-60 h-60 bg-ghost_white dark:bg-gray-800 rounded-2xl">
            <Image src={Order} alt="Order" />
          </div>
          <div>
            <div className="text-dark_grey dark:text-gray-100 text-base font-medium">
              Total Orders
            </div>
            <div className="text-night dark:text-white text-28 font-bold">
              xxxx
            </div>
          </div>
        </div>
        <hr className="my-4 border-silver" />
        <div className="flex w-full gap-4">
          <ChartLine stroke="stroke-mint" />
          <p className="text-sm text-dark_grey dark:text-gray-100 max-w-92">
            <span className="text-mint">+ 15%</span> more from last week
          </p>
        </div>
      </Card>
      <Card>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-60 h-60 bg-ghost_white dark:bg-gray-800 rounded-2xl">
            <Image src={SalesIcon} alt="SalesIcon" />
          </div>
          <div>
            <div className="text-dark_grey dark:text-gray-100 text-base font-medium">
              Total Sales
            </div>
            <div className="text-night dark:text-white text-28 font-bold">
              Rs. xxx.xx
            </div>
          </div>
        </div>
        <hr className="my-4 border-silver" />
        <div className="flex w-full gap-4">
          <ChartLine stroke="stroke-amber" />
          <p className="text-sm text-dark_grey dark:text-gray-100 max-w-92">
            <span className="text-amber">+ 5%</span> more from last week
          </p>
        </div>
      </Card>
      <Card>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-60 h-60 bg-ghost_white dark:bg-gray-800 rounded-2xl">
            <Image src={Customer} alt="Customer" />
          </div>
          <div>
            <div className="text-dark_grey dark:text-gray-100 text-base font-medium">
              Total Customers
            </div>
            <div className="text-night dark:text-white text-28 font-bold">
              xxx
            </div>
          </div>
        </div>
        <hr className="my-4 border-silver" />
        <div className="flex w-full gap-4">
          <ChartLine stroke="stroke-light_bittersweet" />
          <p className="text-sm text-dark_grey dark:text-gray-100 max-w-92">
            <span className="text-light_bittersweet">- 10%</span> more from last
            week
          </p>
        </div>
      </Card>
      <Card>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-60 h-60 bg-ghost_white dark:bg-gray-800 rounded-2xl">
            <Image src={Order} alt="Order" />
          </div>
          <div>
            <div className="text-dark_grey dark:text-gray-100 text-base font-medium">
              Total Orders
            </div>
            <div className="text-night dark:text-white text-28 font-bold">
              xxxx
            </div>
          </div>
        </div>
        <hr className="my-4 border-silver" />
        <div className="flex w-full gap-4">
          <ChartLine stroke="stroke-mint" />
          <p className="text-sm text-dark_grey dark:text-gray-100 max-w-92">
            <span className="text-mint">+ 15%</span> more from last week
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CardInfo;
