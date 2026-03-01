import { wordpressApi } from "./wordpressApi";

export async function fetchAllBlogSlugs(): Promise<string[]> {
  const api = wordpressApi;

  try {
    const res = await api.get("/wp-json/wp/v2/posts", {
      params: {
        per_page: 100,
        status: "publish",
        _fields: "slug",
      },
    });

    return res.data.map((post: any) => post.slug);
  } catch (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }
}