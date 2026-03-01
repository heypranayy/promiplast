import { IProducts } from "@/types";
import Image from "next/image";
import React from "react";
import Button from "./Button";

interface IProps {
  products_info : IProducts
}

function ProductsItem({products_info} : IProps) {
  return (
    <div className="w-full hover:shadow-2xl py-10 transition-all duration-500 px-4">
      <Image
        alt="products-image"
        className="object-cover w-full"
        src={products_info.image}
        height={1200}
        width={1200}
      />
      <div className="flex-center flex-col gap-3">
        <span className="text-[13.6px] font-thin text-[#6C6C6C]">
          {products_info.catname}
        </span>
        <h2 className="text-[#BC9167] font-poppins text-[16px]">
          {products_info.productname}
        </h2>
        <Button className="uppercase">Get Quote</Button>
      </div>
    </div>
  );
}

export default ProductsItem;
