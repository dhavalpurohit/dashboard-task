import BadgeBox from "./badgeBox";
import Search from "./search";
import ProfileDropdown from "./profileDropdown";

import NotificationIcon from "@/public/icons/notification.svg";
import MessageIcon from "@/public/icons/messages.svg";
import SettingRedIcon from "@/public/icons/setting-red.svg";

import { useTheme } from "@/services/ThemeContext";

const Header = () => {
  const { toggleTheme, theme } = useTheme();

  const NotifcationData = [
    "Notification 1",
    "Notification 2",
    "Notification 3",
  ];
  const ChatData = ["Chat 1", "Chat 2", "Chat 3"];
  const SettingData = ["SettingData 1", "SettingData 2", "SettingData 3"];

  return (
    <div className="h-90 bg-white dark:bg-black py-4 px-10 flex items-center border-b border-lavender dark:border-gray-800">
      <Search />
      <div className="flex items-center ml-auto gap-5 h-full">
        <div className="flex items-center gap-5">
          <BadgeBox
            boxBgColor="bg-lavender"
            badgeBgColor="bg-royal_blue"
            icon={NotificationIcon}
            value={21}
            data={NotifcationData}
          />
          <BadgeBox
            boxBgColor="bg-lavender"
            badgeBgColor="bg-royal_blue"
            icon={MessageIcon}
            value={21}
            data={ChatData}
          />
          <BadgeBox
            boxBgColor="bg-bittersweet_opacity"
            badgeBgColor="bg-bittersweet"
            icon={SettingRedIcon}
            value={21}
            data={SettingData}
          />
        </div>
        <div className="border-0.5 h-full border-lavender"></div>
        <ProfileDropdown />
        <button onClick={toggleTheme} className="dark:text-white">
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M19 9.199h-.98c-.553 0-1 .359-1 .801c0 .441.447.799 1 .799H19c.552 0 1-.357 1-.799c0-.441-.449-.801-1-.801M10 4.5A5.483 5.483 0 0 0 4.5 10c0 3.051 2.449 5.5 5.5 5.5c3.05 0 5.5-2.449 5.5-5.5S13.049 4.5 10 4.5m0 9.5c-2.211 0-4-1.791-4-4c0-2.211 1.789-4 4-4a4 4 0 0 1 0 8m-7-4c0-.441-.449-.801-1-.801H1c-.553 0-1 .359-1 .801c0 .441.447.799 1 .799h1c.551 0 1-.358 1-.799m7-7c.441 0 .799-.447.799-1V1c0-.553-.358-1-.799-1s-.801.447-.801 1v1c0 .553.359 1 .801 1m0 14c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1c.441 0 .799-.447.799-1v-1c0-.553-.358-1-.799-1m7.365-13.234c.391-.391.454-.961.142-1.273s-.883-.248-1.272.143l-.7.699c-.391.391-.454.961-.142 1.273s.883.248 1.273-.143zM3.334 15.533l-.7.701c-.391.391-.454.959-.142 1.271s.883.25 1.272-.141l.7-.699c.391-.391.454-.961.142-1.274s-.883-.247-1.272.142m.431-12.898c-.39-.391-.961-.455-1.273-.143s-.248.883.141 1.274l.7.699c.391.391.96.455 1.272.143s.249-.883-.141-1.273zm11.769 14.031l.7.699c.391.391.96.453 1.272.143c.312-.312.249-.883-.142-1.273l-.699-.699c-.391-.391-.961-.455-1.274-.143s-.248.882.143 1.273"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.741 20.917a9.4 9.4 0 0 1-1.395-.105a9.141 9.141 0 0 1-1.465-17.7a1.18 1.18 0 0 1 1.21.281a1.27 1.27 0 0 1 .325 1.293a8.1 8.1 0 0 0-.353 2.68a8.27 8.27 0 0 0 4.366 6.857a7.6 7.6 0 0 0 3.711.993a1.242 1.242 0 0 1 .994 1.963a9.15 9.15 0 0 1-7.393 3.738M10.261 4.05a.2.2 0 0 0-.065.011a8.137 8.137 0 1 0 9.131 12.526a.22.22 0 0 0 .013-.235a.23.23 0 0 0-.206-.136a8.6 8.6 0 0 1-4.188-1.116a9.27 9.27 0 0 1-4.883-7.7a9.1 9.1 0 0 1 .4-3.008a.29.29 0 0 0-.069-.285a.18.18 0 0 0-.133-.057"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
export default Header;
