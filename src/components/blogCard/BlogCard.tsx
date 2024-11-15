import Image from "next/image";
import { BlogPostDocument } from "../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";

function BlogCard({ post }: { post: BlogPostDocument }) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] rounded-md pt-[30px] md:pt-[50px]">
      <div className="relative h-60 w-full">
        {post.data.image.url ? (
          <Image
            src={post.data.image.url}
            alt="Card img"
            className="h-32 w-32 object-cover"
            fill
            sizes="h-60 w-full"
          />
        ) : (
          <p>No Image</p>
        )}
      </div>
      <div>
        <PrismicNextLink href={post.uid} className="text-sm font-medium">
          <h3 className="mb-[13px] mt-[20px] w-full text-base md:text-[20px] lg:mb-[16px]">
            {post.data.blog_title}
          </h3>
        </PrismicNextLink>

        <p className="text-lightGrey text-sm tracking-[.03em]">
          {post.data.summary}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
