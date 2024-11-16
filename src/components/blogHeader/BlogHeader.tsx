import Image from "next/image";
import { BlogPostDocument } from "../../../prismicio-types";

function BlogHeader({ post }: { post: BlogPostDocument }) {
  return (
    <div className="relative flex w-full flex-col items-center bg-custom-gradient bg-custom-size object-contain px-[30px] text-white lg:px-[60px]">
      <Image
        src={post.data.image.url || "/assets/images/bgImage.webp"} 
        alt=""
        fill
        className="-z-50 object-cover"
      />
      {post.data.category && (
        <span className="xsm:mt-[50px] mb-[11px] mt-[20px] size-fit border-[0.6px] px-[10px] py-[5px] text-[11px] md:text-[15px]">
          {post.data.category}
        </span>
      )}
      <h1 className="xsm:text-[30px] mt-[10px] text-center text-[25px] md:mt-[30px] md:text-[36px] lg:text-[38px]">
        {post.data.blog_title}
      </h1>
      <span className="mb-[30px] mt-[20px] flex flex-col items-center gap-2 text-[14px] md:mb-[60px] md:mt-[30px] md:flex-row">
        By {post.data.author}
        <span className="hidden md:block">|</span>
        <span>{post.data.publication_date}</span>
      </span>
    </div>
  );
}

export default BlogHeader;
