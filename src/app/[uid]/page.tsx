import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";

type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("blog_post", uid).catch(() => notFound());

  return {
    title: page.data.blog_title,
    description: page.data.summary,
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  console.log("the uid is ", uid);
  const client = createClient();
  const post = await client.getByUID("blog_post", uid).catch(() => notFound());
  console.log(post);
  return (
    <article className="mx-auto max-w-2xl space-y-12 px-6 py-24 dark:bg-gray-100 dark:text-gray-900">
      <div className="mx-auto w-full space-y-4 text-center">
        <p className="text-xs font-semibold tracking-wider">#TechlosetBlog</p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          {post.data.blog_title}
        </h1>
        <p className="text-sm dark:text-gray-600">
          by &nbsp;
          <span className="underline dark:text-violet-600">
            <span itemProp="name">{post.data.author}</span>
          </span>
          &nbsp; on &nbsp;
          <time dateTime="2021-02-12 15:34:18-0200">
            {post.data.publication_date}
          </time>
        </p>
      </div>
      <div className="dark:text-gray-800">
        <PrismicRichText
          field={post.data.content}
          components={{
            heading2: ({ children }) => (
              <h2 className="pt-2 text-2xl">{children}</h2>
            ),
            heading3: ({ children }) => <h2 className="pt-2">{children}</h2>,
            paragraph: ({ children }) => <p className="py-3"> {children}</p>,
          }}
        />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog_post");
  console.log("All the pages are ", pages);

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
