import { Metadata } from "next";
import { createClient } from "@/prismicio";
import BlogCard from "@/components/blogCard/BlogCard";
import { asText } from "@prismicio/client";
import SocialMediaLinks from "@/components/socialMediaLinks/SocialMediaLinks";
import { SOCIAL_ICONS } from "@/constants/constants";

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
      <div className="bg-custom-gradient bg-custom-size h-[256px] w-full object-contain text-white md:h-[230px]">
        <div className="flex flex-col px-[30px] md:flex-row md:justify-between md:px-[60px] md:pt-[120px]">
          <div>
            <h1 className="pt-[20px] text-[25px] font-semibold md:pt-0 md:text-[38px]">
              Techloset blog
            </h1>
            <p className="pb-[55px]">Keep up with the IT news</p>
          </div>

          <div className="flex flex-col items-center self-center md:self-auto">
            <h3 className="text-[16px] font-bold md:text-[20px]">
              Share Blogs
            </h3>
            <div className="mt-[23px] flex gap-2">
              {SOCIAL_ICONS.map((item, index) => (
                <SocialMediaLinks
                  key={index}
                  Icon={item.Icon}
                  bgAfter={item.bgAfter}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid w-11/12 gap-8 p-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {blogs.map((post) => (
          <BlogCard key={post.uid} post={post} />
        ))}
      </div>
    </div>
  );
}
