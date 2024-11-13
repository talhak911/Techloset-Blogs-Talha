import Image from "next/image";
import { BlogPostDocument } from "../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
function BlogCard({ post }: { post: BlogPostDocument }) {
  return (
    <div className="-mx-4 flex flex-wrap">
      <div className="mb-8 flex w-full max-w-full flex-col px-4 sm:w-1/2 lg:w-1/3">
        <Image
          src={post.data.image.url || ""}
          alt="Card img"
          className="h-48 w-full object-cover object-center"
          width={2}
          height={3}
        />
        <div className="flex flex-grow">
          <div className="triangle" />
          <div className="text flex flex-col justify-between border border-gray-400 bg-white px-4 py-6">
            <div>
            <div className="flex gap-3  items-center mb-4">
                <p className="text-xs font-medium bg-slate-300 p-2 rounded-xl">Author</p>
            <p
            
            className=" inline-block border-b-2 border-blue-600 text-xs font-bold capitalize hover:text-blue-600"
          >
            {post.data.author}
          </p>
            </div>
              <PrismicNextLink
                href={post.uid}
                className="mb-4 block text-2xl font-black leading-tight hover:text-blue-600 hover:underline"
              >
                {post.data.blog_title}
              </PrismicNextLink>
              <p className="mb-4">{post.data.summary}</p>
            </div>
            <div>
              <a
                href="#"
                className="mt-2 inline-block border-b border-transparent pb-1 text-base font-black uppercase text-blue-600 hover:border-blue-600"
              >
                Read More -&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
