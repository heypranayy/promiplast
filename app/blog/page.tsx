import SectionLayout from "@/app/componnets/SectionLayout";
import React from "react";
import { Metadata } from "next";
import BlogListView from "./BlogListView";

export const metadata: Metadata = {
  title: "Promiplast - Quality UPVC Doors & Windows in Kolkata  - 8336908118",
  description:
    "Promiplast offers high-performance UPVC doors & windows in Kolkata. Enhance your home's beauty, security, and energy efficiency. Get a free quote today!",
  alternates: {
    canonical: "/blog",
  },
};

interface IProps {
  searchParams: { page?: string };
}

export default async function page({ searchParams }: IProps) {
  return (
    <SectionLayout className="w-full pt-36 pb-10 font-poppins max-h-max h-auto">
      <div className="max-w-[1000px] mx-auto space-y-3 mb-10">
        <h2 className="font-bold text-5xl text-gray-800 text-center">
          Read Our Latest Blogs
        </h2>
      </div>

      <React.Suspense
        fallback={
          <div className="py-16 text-center">
            <span className="text-sm text-gray-500 flex items-center gap-y-3 flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="animate-spin lucide lucide-loader-circle-icon lucide-loader-circle"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Loading Blogs...
            </span>
          </div>
        }
      >
        <BlogListView searchParams={searchParams} />
      </React.Suspense>
    </SectionLayout>
  );
}
