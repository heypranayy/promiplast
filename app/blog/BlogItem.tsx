import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../componnets/Button";
import { IBlogItem } from "@/types";

interface IBlogInfo {
  info: IBlogItem;
}

export default function BlogItem({ info }: IBlogInfo) {
  return (
    <li>
      <Link
        href={info.url}
        className="block overflow-hidden flex-grow max-w-[360px] blog-item-shdow "
      >
        <Image
          className="aspect-video w-full object-cover"
          src={info.thumbnail}
          alt={info.altTag ?? ""}
          height={1200}
          width={1200}
        />
        <div className="w-full py-6 space-y-3 px-6">
          <h2 className="font-semibold uppercase text-sm tracking-widest line-clamp-2 text-gray-700">
            {info.heading}
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-xs">{info.date}</span>{" "}
            <div className="size-1 bg-[#EDB932]"></div>
            <span className="text-xs">
              {info.author || "Promiplast windows"}
            </span>
          </div>
          <p className="line-clamp-2 text-sm text-gray-600">
            {info.description}
          </p>

          {/* <Link className="inline-flex items-center gap-3 text-xs bg-[#EDB932] py-2 px-4" href={"#"}>Read more <GrLinkNext /></Link> */}
          <Button className="py-[8px] px-[20px]" animation={true}>
            Read more
          </Button>
        </div>
      </Link>
    </li>
  );
}
