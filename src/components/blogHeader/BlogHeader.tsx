import Image from "next/image";
import { BlogPostDocument } from "../../../prismicio-types";

function BlogHeader({ post }: { post: BlogPostDocument }) {
  return (
    <div className="bg-custom-gradient px-[30px] lg:px-[60px] bg-custom-size relative flex flex-col  w-full items-center object-contain text-white">
      <Image
        src={post.data.image.url || ""}
        alt=""
        fill
        className="-z-50 object-cover"
      />
      {post.data.category && (
        <span className="mb-[11px] mt-[20px] size-fit border-[0.6px] px-[10px] py-[5px] text-[11px] md:mt-[50px] md:text-[15px]">
          {post.data.category}
        </span>
      )}
      <h1 className="text-center mt-[10px] text-[30px] md:text-[36px] lg:text-[38px]">
        {post.data.blog_title}
      </h1>
      <span className=" flex gap-2 items-center flex-col md:flex-row mb-[30px] mt-[20px] md:mb-[60px] md:mt-[30px] text-[14px]">
By {post.data.author}
<span className="hidden md:block">|</span>
      <span>{post.data.publication_date}</span>
      
      </span>
    </div>
  );
}

export default BlogHeader;
