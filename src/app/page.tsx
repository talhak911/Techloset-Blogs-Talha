import { Metadata } from "next";
import { createClient } from "@/prismicio";
import BlogCard from "@/components/blogCard/BlogCard";
import { asText } from "@prismicio/client";
import HomeHeader from "@/components/homeHeader/HomeHeader";

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
  return (
    <div className="bg-bgLightBlue">
      <HomeHeader />
      <div className="flex flex-col items-center p-[30px] md:items-start md:p-[60px]">
        <h1 className="group relative text-2xl font-medium md:text-4xl">
          <span className="border-orangeMain absolute -bottom-1 right-0 w-5/12 transform border-b-2 duration-500 ease-in group-hover:w-full" />
          Latest Posts
        </h1>
        <div className="grid gap-[24px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          {blogs.map((post) => (
            <BlogCard key={post.uid} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
