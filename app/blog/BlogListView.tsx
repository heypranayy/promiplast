import { wordpressApi } from "@/lib/wordpressApi";
import { IBlogItem } from "@/types";
import { blogdata } from "./blogdata";
import Pagination from "../componnets/Pagination";
import BlogItem from "./BlogItem";

interface IProps {
  searchParams: { page?: string };
}

export default async function BlogListView({ searchParams }: IProps) {
  const NUMBER_OF_BLOGS_SHOW = 12;
  const currentPage = parseInt(searchParams?.page || "1");

  let blogList: IBlogItem[] = [];
  let totalPages = 1;

  try {
    const response = await wordpressApi.get<IBlogItem[]>(
      `/wp-json/custom/promiplast/v1/posts?page=${currentPage}&per_page=12`
    );

    blogList = response.data;
    const WORDPRESS_DATA_LENGTH = blogList.length;
    let WORDPRESS_TOTAL_PAGES = Number(response.headers["x-wp-totalpages"]);
    totalPages = WORDPRESS_TOTAL_PAGES;

    if (WORDPRESS_DATA_LENGTH < NUMBER_OF_BLOGS_SHOW) {
      blogList.push(
        ...blogdata
          .sort((a, b) => b.id - a.id)
          .slice(
            Math.round(
              (currentPage - 1) * (NUMBER_OF_BLOGS_SHOW - WORDPRESS_DATA_LENGTH)
            ),
            currentPage * (NUMBER_OF_BLOGS_SHOW - WORDPRESS_DATA_LENGTH)
          )
      );

      totalPages =
        blogdata.length / NUMBER_OF_BLOGS_SHOW +
        WORDPRESS_DATA_LENGTH / NUMBER_OF_BLOGS_SHOW;
    }
  } catch {
    // WordPress API unavailable — fall back to local static blog data
    const sorted = blogdata.sort((a, b) => b.id - a.id);
    totalPages = Math.ceil(sorted.length / NUMBER_OF_BLOGS_SHOW);
    blogList = sorted.slice(
      (currentPage - 1) * NUMBER_OF_BLOGS_SHOW,
      currentPage * NUMBER_OF_BLOGS_SHOW
    );
  }

  return (
    <>
      <ul className="w-full h-full flex items-start gap-10 border-t border-[#eeeeee] pt-8 flex-wrap justify-center">
        {blogList.map((blog, index) => (
          <BlogItem
            key={index}
            info={{
              ...blog,
              url: blog.url.includes("/blog/")
                ? blog.url
                : `/blog/${blog.url}`,
            }}
          />
        ))}
      </ul>

      <div className="pt-10">
        <Pagination page={currentPage} totalPage={totalPages} />
      </div>
    </>
  );
}