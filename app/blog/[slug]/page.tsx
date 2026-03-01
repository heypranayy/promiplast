import { wordpressApi } from "@/lib/wordpressApi";
import { Metadata } from "next";
import { cache } from "react";
import Image from "next/image";
import "@/app/blog_content.css";

interface ISingleBlogPost {
  id: number;
  title: { rendered: string };
  slug: string;
  content: { rendered: string };
  date: string;
  featured_media: number;
}

const getSingleBlogInfo = cache(async (slug: string) => {
  const api = wordpressApi;

  const res = await api.get("/wp-json/wp/v2/posts", {
    params: {
      slug,
      _embed: true,
    },
  });

  return res.data[0];
});

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getSingleBlogInfo(params.slug);

  return {
    title: post?.title?.rendered || "Blog",
    description: post?.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "",
  };
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getSingleBlogInfo(params.slug);

  if (!post) {
    return <div>Blog not found</div>;
  }

  const featuredImage =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <section className="py-20 bg-white flex justify-center">
      <div className="max-w-[800px] w-full space-y-6">

        {featuredImage && (
          <Image
            src={featuredImage}
            alt={post.title.rendered}
            width={1200}
            height={600}
            className="rounded-lg object-cover"
          />
        )}

        <h1
          className="text-3xl font-bold"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <div
          className="blog_content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </section>
  );
}