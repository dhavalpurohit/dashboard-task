"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import Card from "../components/card";
import { useTheme } from "@/services/ThemeContext";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const BarChart = () => {
  const { theme } = useTheme();

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {},
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "28px",
        distributed: true,
      },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "left",
      fontSize: "14px",
      labels: {
        colors: theme === "dark" ? "#FFFFFF" : "#808080",
      },
      itemMargin: {
        horizontal: 24,
        vertical: 16,
      },
      markers: {
        shape: "circle",
      },
    },
    xaxis: {
      categories: [
        "Active Service Provider",
        "Service Provider Retention Rate",
        "New Service Provider",
        "Service Completion Rate",
        "Total Service Provider",
        "Average Rating",
      ],
      labels: {
        show: false,
      },
    },
    colors: ["#FF6347", "#4682B4", "#48CFAF", "#CD7ED9", "#FFCF50", "#722391"],
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}`,
        style: {
          colors: theme === "dark" ? "#fff" : "#0D0D0D",
          fontSize: "12px",
        },
      },
    },
  };

  const series = [
    {
      name: "Performance Metrics",
      data: [28, 80, 55, 60, 45, 70],
    },
  ];

  return (
    <Card>
      <h1 className="font-bold text-xl text-night dark:text-white">
        Sector Performance
      </h1>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </Card>
  );
};

export default BarChart;
