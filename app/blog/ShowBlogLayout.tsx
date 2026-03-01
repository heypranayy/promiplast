import React from "react";
import { GrUserManager } from "react-icons/gr";
import { CiCalendarDate } from "react-icons/ci";
import Image from "next/image";
import { blogdata } from "./blogdata";

interface IPorps {
  index: number;
  children: React.ReactNode;
}

export default function ShowBlogLayout({ index, children }: IPorps) {
  const info = blogdata[index];
  const blog_info = [
    { title: "Published:", value: info.date, icon: <CiCalendarDate /> },
    {
      title: "Author:",
      value: info.author || "Promiplast windows",
      icon: <GrUserManager size={14} />,
    },
  ];

  return (
    <section className="py-32 bg-[#FAF8FF] flex items-start justify-center font-poppins">
      <div className="max-w-[800px] w-[800px] read-blog-shdow sm:shadow-none bg-white rounded-xl py-10 sm:max-w-full sm:px-5">
        <div className="max-w-[660px] mx-auto space-y-5 sm:max-w-full">
          <Image
            src={info.thumbnail}
            className="object-cover aspect-video rounded-t-xl"
            alt={info.altTag || ""}
            height={1200}
            width={1200}
          />
          <h1 className="text-3xl uppercase font-bold tracking-widest text-gray-800">
            {info.heading}
          </h1>
          <div className="flex items-center gap-5 flex-wrap">
            {blog_info.map((info) => (
              <span key={info.title} className="flex-center gap-2">
                {info.icon}
                <span className="font-medium text-xs pt-[2px]">
                  {info.title}{" "}
                  <span className="font-extralight text-gray-500">
                    {info.value}
                  </span>
                </span>
              </span>
            ))}
          </div>
          <div className="h-2"></div>
          {children}
        </div>
      </div>
    </section>
  );
}
