"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import Card from "../components/card";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ParChart = () => {
  const totalOrders = 100;
  const activeOrders = 600;
  const completedOrders = 400;
  const pendingOrders = totalOrders - activeOrders - completedOrders;

  const series = [activeOrders, completedOrders, pendingOrders];
  const labels = ["Active Orders", "Completed Orders", "Pending Orders"];

  const options: ApexOptions = {
    chart: {
      type: "donut" as const,
      width: 200,
      height: 200,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#7158e2", "#f6b93b", "#ff3e3e"],
    },
    stroke: {
      lineCap: "round",
    },
    labels: labels,
  };

  return (
    <Card>
      <h1 className="font-bold text-xl text-night dark:text-white">
        Total Orders
      </h1>
      <div className="relative mt-6">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={200}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="font-nromal text-xs text-ultra_violet dark:text-gray-100">
            Total Orders
          </div>
          <div className="text-lg font-bold text-space_cadet dark:text-white">
            {totalOrders.toLocaleString()}
          </div>
        </div>
      </div>
      <div className="mt-9">
        <div className="flex items-baseline gap-4 translate-x-1/3">
          <hr className="w-6 border-4 rounded-full border-palatinate_blue" />
          <div>
            <span className="font-normal text-ultra_violet dark:text-gray-100 text-xs ">
              Active Orders
            </span>
            <br />
            <span className="font-bold text-space_cadet text-base dark:text-white">
              {activeOrders.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex items-baseline gap-4 translate-x-1/3">
          <hr className="w-6 border-4 rounded-full border-amber" />
          <div>
            <span className="font-normal text-ultra_violet dark:text-gray-100 text-xs ">
              Completed Orders
            </span>
            <br />
            <span className="font-bold text-space_cadet text-base dark:text-white">
              {completedOrders.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ParChart;
