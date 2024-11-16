import { LatestPostsCardProps } from "@/types/types";
import Image from "next/image";

function LatestPostCard({ imageUrl, title, date }: LatestPostsCardProps) {
  return (
    <div className="mb-[10px] mt-[20px] grid grid-cols-10 gap-[20px]">
      <div className="relative col-span-4 h-full w-full">
        <Image src={imageUrl} fill alt={title}
        
        className="object-cover" />
      </div>
      <div className="col-span-6">
        <p className="w-full text-[16px] font-medium">{title}</p>
        <span className="pt-[5px] text-[13px] font-medium text-orangeMain">
          {date}
        </span>
      </div>
    </div>
  );
}

export default LatestPostCard;
