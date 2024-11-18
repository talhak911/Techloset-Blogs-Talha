import Image from "next/image";
import { BlogPostDocument } from "../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";

function LatestPostCard({
  post: {
    uid,
    data: { blog_title, image, publication_date },
  },
}: {
  post: BlogPostDocument;
}) {
  return (
    <PrismicNextLink
      href={`/${uid}`}
      className="mb-[10px] mt-[20px] grid grid-cols-10 gap-[20px]"
    >
      <div className="relative col-span-4 h-full w-full">
        <Image
          src={image.url || "/assets/images/bgImage.webp"}
          fill
          alt={blog_title || "blog image"}
          className="object-cover"
        />
      </div>
      <div className="col-span-6">
        <p className="w-full text-[16px] font-medium">{blog_title}</p>
        <span className="pt-[5px] text-[13px] font-medium text-orangeMain">
          {publication_date}
        </span>
      </div>
    </PrismicNextLink>
  );
}

export default LatestPostCard;
