import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import Image from "next/image";
import BlogHeader from "@/components/blogHeader/BlogHeader";
import { SOCIAL_ICONS_BLOG } from "@/constants/constants";
import SocialMediaLinks from "@/components/socialMediaLinks/SocialMediaLinks";
import { BlogPageParams } from "@/types/types";
import LatestPosts from "@/components/lastestPosts/LatestPosts";
import { components } from "@/slices";
import { richTextcomponents } from "@/slices/RichText";

export async function generateMetadata({
  params,
}: {
  params: Promise<BlogPageParams>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("blog_post", uid).catch(() => notFound());

  return {
    title: page.data.blog_title,
    description: page.data.summary,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<BlogPageParams>;
}) {
  const { uid } = await params;
  const client = createClient();
  const post = await client.getByUID("blog_post", uid).catch(() => notFound());
  const latestPosts = await client.getAllByType("blog_post", {
    orderings: { field: "first_publication_date", direction: "desc" },
  });
  return (
    <div>
      <BlogHeader
        author={post.data.author}
        blogTitle={post.data.blog_title}
        category={post.data.category}
        imageUrl={post.data.image.url}
        publicationDate={post.data.publication_date}
      />
      <div className="flex w-full justify-center bg-white pb-[30px] pt-[60px] md:py-[60px] md:pl-[40px] md:pr-[50px]">
        <div className="sticky top-0 flex max-h-screen flex-col justify-center">
          <div className="hidden flex-col gap-4 lg:flex">
            {SOCIAL_ICONS_BLOG.map((item, index) => (
              <SocialMediaLinks
                key={index}
                Icon={item.Icon}
                bgAfter={item.bgAfter}
                link={item.link}
                bgBefore="orangeMain"
                iconColorBefore="white"
              />
            ))}
          </div>
        </div>
        <article className="w-10/12 px-0 lg:px-[80px]">
          <div className="relative flex w-full justify-center">
            <Image
              src={post.data.image.url || "/assets/images/bgImage.webp"}
              className="object-contain"
              alt={post.data.image.alt || "Blog Image"}
              width={post.data.image.dimensions?.width || 2000}
              height={post.data.image.dimensions?.height || 800}
            />
          </div>
          <div>
            <PrismicRichText
              field={post.data.content}
              components={richTextcomponents}
            />
          </div>
          <SliceZone slices={post.data.slices} components={components} />
        </article>
        <div className="sticky top-28 hidden h-full flex-col lg:flex lg:w-1/4">
          <LatestPosts posts={latestPosts} />
        </div>
      </div>
      <div className="block bg-white px-[30px] pb-[60px] lg:hidden">
        <LatestPosts posts={latestPosts} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog_post");
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
