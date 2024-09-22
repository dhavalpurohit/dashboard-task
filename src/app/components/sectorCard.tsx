import Image from "next/image";
import { StaticImageData } from "next/image";

interface CardProps {
  key?: number;
  title?: string;
  percentage?: number;
  image?: StaticImageData | any;
  stats?: StaticImageData[] | any;
  numberOfContact?: number;
}

const SectorCard: React.FC<CardProps> = ({
  key,
  title,
  percentage,
  image,
  stats,
  numberOfContact,
}) => {
  return (
    <div
      className="bg-white dark:bg-black rounded-2xl p-2.5 border flex flex-col gap-2.5"
      key={key}
    >
      <Image className="w-full h-auto object-cover" src={image} alt="image2" />
      <h2 className="text-sm font-bold text-night dark:text-white">{title}</h2>
      <div className="flex items-center gap-1">
        <div className="flex -space-x-2.5">
          {stats.map((stat: any, index: number) => (
            <div
              key={index}
              className="flex items-center border w-8 h-8 rounded-full text-green-500"
            >
              <Image
                className="w-full h-ful rounded-full"
                src={stat}
                alt="Stat"
              />
            </div>
          ))}
        </div>
        <span className="text-night dark:text-white text-8 font-bold">
          + {numberOfContact}
        </span>
        <div className="text-xs font-medium text-mint px-2 py-1 rounded-lg bg-honeydew ml-auto">
          +{percentage}%
        </div>
      </div>
    </div>
  );
};
export default SectorCard;
