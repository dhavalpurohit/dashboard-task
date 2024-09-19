import Image from "next/image";

interface props {
  boxBgColor: string;
  value: number;
  icon: string;
  badgeBgColor: string;
}
const BadgeBox: React.FC<props> = ({
  boxBgColor,
  value,
  icon,
  badgeBgColor,
}) => {
  return (
    <div className={`rounded-xl p-2 relative ${boxBgColor}`}>
      <Image src={icon} alt="notification" />
      <div
        className={`absolute -top-1.5 -right-1.5 rounded-full text-8 text-lavender w-18 h-18 flex items-center justify-center border-2 border-lavender ${badgeBgColor}`}
      >
        {value}
      </div>
    </div>
  );
};
export default BadgeBox;
