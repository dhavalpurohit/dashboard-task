import Dropdown from "@/app/components/dropdown";
import Button from "@/app/components/button";
import CalendarIcon from "@/public/icons/calendar_month.svg";
import CardInfo from "./cardInfo";
import TicketInfo from "./ticketInfo";
import BarChart from "./barChart";

export const metadata = {
  title: "Dashboard",
  description: "This is the home page of the dashboard",
};

const dateList = ["This year", "2024", "2023", "2022"];
const location = ["Mumbai", "Ahmedabad", "Rajkot", "Pune"];
const status = ["Active", "Success", "Failed"];
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
        <div className="w-3/4">
          <CardInfo />
          <BarChart />
        </div>
        <div className="w-1/4">
          <TicketInfo />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
