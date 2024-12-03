import { Metadata } from "next";
import { createClient } from "@/prismicio";
import BlogCard from "@/components/blogCard/BlogCard";
import { asText } from "@prismicio/client";
import HomeHeader from "@/components/homeHeader/HomeHeader";
import AnimatedContent from "./AnimatedContent";

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
    <div>
      <HomeHeader />
      <div className="flex flex-col items-center bg-bgLightBlue p-[30px] md:items-start md:p-[60px]">
        <AnimatedContent />
        <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <BlogCard
              key={post.uid}
              blogTitle={post.data.blog_title}
              summary={post.data.summary}
              uid={post.uid}
              imageUrl={post.data.image.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
