"use client";
import Image from "next/image";
import Card from "@/app/components/card";

interface props {
  key?: number;
  img?: any;
  id?: number;
  raiser_name?: string;
  status?: string;
  dapartment?: string;
  issues?: string;
  heading?: string;
  discription?: string;
}

const TicketCard: React.FC<props> = ({
  key,
  img,
  id,
  raiser_name,
  status,
  dapartment,
  issues,
  heading,
  discription,
}) => {
  return (
    <div
      className="w-full shadow-commonShadow rounded-2xl my-4 last:mb-0"
      key={key}
    >
      <Card>
        <div className="flex w-full justify-between">
          <div className="flex items-center  gap-4">
            <Image src={img || ""} alt="profile" className="w-46 " />
            <div className="text-sm font-bold text-delft_blue dark:text-white">
              {id}
              <br />
              <span className="text-10px font-medium text-royal_blue dark:text-gray-100 -tracking-2">
                {raiser_name}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center justify-center py-1 px-2 text-jet dark:text-white rounded-full border border-coral_pink bg-coral_pink_10 h-5 text-10px font-medium">
              {issues}
            </div>
            <div className="flex items-center justify-center py-1 px-2 text-jet dark:text-white rounded-full border border-theme_blue bg-theme_blue_10 h-5 text-10px font-medium">
              {dapartment}
            </div>
          </div>
        </div>
        <hr className="my-4 border-ghost_white" />
        <div>
          <h3 className="text-sm text-delft_blue dark:text-white font-medium  -tracking-2">
            {heading}
          </h3>
          <p className="text-xs text-slate_gray dark:text-gray-100 ">
            {discription}
          </p>
          <div className="flex items-center w-fit py-1 px-2 text-jet dark:text-white rounded-full border border-coral_pink bg-coral_pink_10 h-5 text-10px font-medium mt-3">
            Status : {status}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TicketCard;
