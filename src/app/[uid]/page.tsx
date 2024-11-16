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
  return (
    <div>
      <BlogHeader post={post} />
      <div className="flex bg-white px-[30px] pt-[60px] md:pl-[40px] md:pr-[50px]">
        <div className="sticky top-0 flex h-screen flex-col justify-center">
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
        <article className="px-0 md:px-[80px]">
          {post.data.image.url && (
            <div className="relative w-full">
              <Image
                src={post.data.image.url || ""}
                className="object-contain"
                alt={post.data.image.alt || "Blog Image"}
                width={post.data.image.dimensions?.width}
                height={post.data.image.dimensions?.height}
                layout="intrinsic"
              />
            </div>
          )}
          <div>
            <PrismicRichText
              field={post.data.content}
              components={richTextcomponents}
            />
          </div>
          <SliceZone slices={post.data.slices} components={components} />
        </article>
        <div className="sticky top-28 hidden h-full w-full flex-col lg:flex">
          <LatestPosts />
        </div>
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
