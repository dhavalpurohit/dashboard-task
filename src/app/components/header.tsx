import BadgeBox from "./badgeBox";
import Search from "./search";
import ProfileDropdown from "./profileDropdown";

import NotificationIcon from "@/public/icons/notification.svg";
import MessageIcon from "@/public/icons/messages.svg";
import SettingRedIcon from "@/public/icons/setting-red.svg";

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
          />
          <BadgeBox
            boxBgColor="bg-lavender"
            badgeBgColor="bg-royal_blue"
            icon={MessageIcon}
            value={21}
          />
          <BadgeBox
            boxBgColor="bg-bittersweet_opacity"
            badgeBgColor="bg-bittersweet"
            icon={SettingRedIcon}
            value={21}
          />
        </div>
        <div className="border-0.5 h-full border-lavender"></div>
        <ProfileDropdown />
      </div>
    </div>
  );
};
export default Header;
