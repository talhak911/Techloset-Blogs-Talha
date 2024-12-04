import { BlogHeaderProps } from "@/types/types";
import Image from "next/image";
import AnimatedContent from "./AnimatedContent";

function BlogHeader({
  imageUrl,
  category,
  blogTitle,
  author,
  publicationDate,
}: BlogHeaderProps) {
  return (
    <div className="relative flex w-full flex-col items-center bg-custom-gradient bg-custom-size object-contain px-[30px] text-white lg:px-[60px]">
      <Image
        src={imageUrl || "/assets/images/bgImage.webp"}
        alt={blogTitle || "Blog featured Image"}
        fill
        className="-z-50 object-cover"
      />
      {category && (
        <span className="mb-[11px] mt-[20px] size-fit border-[0.6px] px-[10px] py-[5px] text-[11px] xsm:mt-[50px] md:text-[15px]">
          {category}
        </span>
      )}
      <AnimatedContent title={blogTitle ?? "No Title"}/>
      {author && (
        <span className="mb-[30px] mt-[20px] flex flex-col items-center gap-2 text-[14px] md:mb-[60px] md:mt-[30px] md:flex-row">
          By {author}
          <span className="hidden md:block">|</span>
          <span>{publicationDate}</span>
        </span>
      )}
    </div>
  );
}

export default BlogHeader;
