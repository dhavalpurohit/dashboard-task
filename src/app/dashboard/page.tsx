import Dropdown from "@/app/components/dropdown";
import Button from "@/app/components/button";
import CalendarIcon from "@/public/icons/calendar_month.svg";
import CardInfo from "./cardInfo";
import TicketInfo from "./ticketInfo";
import BarChart from "./barChart";
import ParChart from "./pieChart";
import SectorCard from "../components/sectorCard";
import Card from "../components/card";
import profile from "@/public/images/profile.png";
import s1 from "@/public/images/service/s1.png";
import s2 from "@/public/images/service/s2.png";
import s3 from "@/public/images/service/s3.png";
import s4 from "@/public/images/service/s4.png";

export const metadata = {
  title: "Dashboard",
  description: "This is the home page of the dashboard",
};

const dateList = ["This year", "2024", "2023", "2022"];
const location = ["Mumbai", "Ahmedabad", "Rajkot", "Pune"];
const status = ["Active", "Success", "Failed"];

const serviceInfo = [
  {
    title: "Construction Sector",
    percentage: 200,
    image: s1,
    stats: [profile, profile, profile],
    numberOfContact: 200,
  },
  {
    title: "Health Care Sector",
    percentage: 10.2,
    image: s2,
    stats: [profile, profile, profile],
    numberOfContact: 10,
  },
  {
    title: "Home Services Sector",
    percentage: 9,
    image: s3,
    stats: [profile, profile, profile],
    numberOfContact: 150,
  },
  {
    title: "Pet Care Sector",
    percentage: 5,
    image: s4,
    stats: [profile, profile, profile],
    numberOfContact: 100,
  },
];
const DashboardPage = () => {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Dropdown list={dateList} title="This Year" image={CalendarIcon} />
          <Dropdown list={location} title="Location" />
          <Dropdown list={status} title="Status" />
        </div>
        <div className="flex items-center gap-2">
          <Button name="Assign  Order" style="bg-theme_blue" />
          <Button name=" Add New Service Provider" style="bg-theme_blue" />
        </div>
      </div>
      <div className="flex w-full gap-6 pt-6">
        <div className="flex flex-col gap-4 w-3/4">
          <CardInfo />
          <div className="grid grid-cols-3 w-full gap-4">
            <div>
              <ParChart />
            </div>
            <div className="col-span-2">
              <BarChart />
            </div>
          </div>
          <Card className="mb-4">
            <h1 className="font-bold text-xl text-night dark:text-white">
              Top Service Providers
            </h1>
            <div className="grid grid-cols-4 w-full gap-4 mt-6">
              {serviceInfo.map((item, index) => {
                return (
                  <SectorCard
                    key={index}
                    title={item.title}
                    percentage={item.percentage}
                    image={item.image}
                    stats={item.stats}
                    numberOfContact={item.numberOfContact}
                  />
                );
              })}
            </div>
          </Card>
        </div>
        <div className="w-1/4">
          <TicketInfo />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
