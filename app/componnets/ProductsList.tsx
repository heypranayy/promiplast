import React from "react";
import ProductsItem from "./ProductsItem";
import { IProducts } from "@/types";

interface IProps {
  products_list: IProducts[];
}

export default function ProductsList({ products_list }: IProps) {
  return (
    <ul className="grid grid-cols-4 gap-4 sm:grid-cols-1 sm:gap-0">
      {products_list.map((product) => (
        <ProductsItem key={product.id} products_info={product} />
      ))}
    </ul>
  );
}
