import Image from "next/image";
import { PrismicNextLink } from "@prismicio/next";
import { LatestPostCardProps } from "@/types/types";

function LatestPostCard({
  uid,
  blogTitle,
  imageUrl,
  publicationDate,
}: LatestPostCardProps) {
  return (
    <PrismicNextLink
      href={`/${uid}`}
      className="mb-[10px] mt-[20px] grid grid-cols-10 gap-[20px]"
    >
      <div className="relative col-span-4 h-[80px] w-full md:min-h-[200px] lg:h-[80px] lg:min-h-max">
        <Image
          src={imageUrl || "/assets/images/bgImage.webp"}
          fill
          alt={blogTitle || "blog image"}
          className="object-cover"
        />
      </div>
      <div className="col-span-6">
        <p className="w-full text-[16px] font-medium">{blogTitle}</p>
        <span className="pt-[5px] text-[13px] font-medium text-orangeMain">
          {publicationDate}
        </span>
      </div>
    </PrismicNextLink>
  );
}

export default LatestPostCard;
