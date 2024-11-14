import { Metadata } from "next";
import { createClient } from "@/prismicio";
import BlogCard from "@/components/blogCard/BlogCard";
import { asText } from "@prismicio/client";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  const client = createClient();
  const blogs = await client.getAllByType("blog_post");
  console.log(blogs);
  return (
    <div className="mx-auto grid w-11/12 gap-8 p-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {blogs.map((post) => (
        <BlogCard key={post.uid} post={post} />
      ))}
    </div>
  );
}
