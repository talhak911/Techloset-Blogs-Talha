import Image from "next/image";
import { PrismicNextLink } from "@prismicio/next";
import { BlogCardProps } from "@/types/types";

function BlogCard({ blogTitle, summary, uid, imageUrl }: BlogCardProps) {
  return (
    <PrismicNextLink
      href={uid}
      className="grid grid-rows-[auto_1fr_auto] rounded-md pt-[30px] md:pt-[50px]"
    >
      <div className="relative h-[190px] sm:h-[300px] w-full">
        <Image
          src={imageUrl || "/assets/images/bgImage.webp"}
          alt="Card img"
          className="h-32 w-32 object-cover"
          fill
          sizes="h-60 w-full"
        />
      </div>
      <div>
        <h3 className="mb-[13px] mt-[20px] w-full text-base font-medium md:text-[20px] lg:mb-[16px]">
          {blogTitle ?? "No title"}
        </h3>
        <p className="text-sm tracking-[.03em] text-lightGrey">
          {summary ?? "No summary"}
        </p>
      </div>
    </PrismicNextLink>
  );
}

export default BlogCard;
