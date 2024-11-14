import Image from "next/image";
import { BlogPostDocument } from "../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";

function BlogCard({ post }: { post: BlogPostDocument }) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-2 rounded-md border border-gray-300 bg-white px-6 py-4 shadow-lg">
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
      <div className="space-y-2">
        <div className="text-sm text-gray-500">
          <span className="mr-2 rounded-md bg-gray-200 p-1">Author</span>
          {post.data.author}
        </div>

        <PrismicNextLink
          href={post.uid}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          <h3 className="w-full text-lg font-bold text-gray-900">
            {post.data.blog_title}
          </h3>
        </PrismicNextLink>

        <p className="text-sm text-gray-500">{post.data.summary}</p>
      </div>
      <PrismicNextLink
        href={post.uid}
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        Read More →
      </PrismicNextLink>
    </div>
  );
}

export default BlogCard;
