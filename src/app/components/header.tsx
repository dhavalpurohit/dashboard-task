import BadgeBox from "./badgeBox";
import Search from "./search";
import ProfileDropdown from "./profileDropdown";

import NotificationIcon from "@/public/icons/notification.svg";
import MessageIcon from "@/public/icons/messages.svg";
import SettingRedIcon from "@/public/icons/setting-red.svg";

const NotifcationData = ["Notification 1", "Notification 2", "Notification 3"];
const ChatData = ["Chat 1", "Chat 2", "Chat 3"];
const SettingData = ["SettingData 1", "SettingData 2", "SettingData 3"];
const Header = () => {
  return (
    <div className="h-90 bg-white py-4 px-10 flex items-center ">
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
      </div>
    </div>
  );
};
export default Header;
