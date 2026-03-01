"use client";

import React from "react";
import { IList } from "@/types";
import { CreateMobileMenu } from "./CreateMobileMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setMobileSliderStateVisibility } from "../redux/slice/mobileSliderSlice";
import OpenDownloadBrochureForm from "./OpenDownloadBrochureForm";

export const my_nav_list: IList[] = [
  { id: "n1", link: "/", text: "Home" },
  { id: "n2", link: "/about-us", text: "About Us" },
  {
    id: "n3",
    link: "#",
    text: "Products",
    submenu: [
      {
        id: "s1",
        text: "WINDOWS",
        link: "#",
        submenu: [
          {
            id: "ss1-1",
            text: "UPVC Casement Windows",
            link: "/products/upvc-casement-windows-in-kolkata",
          },
          {
            id: "ss1-2",
            text: "UPVC Sliding Windows",
            link: "/products/upvc-sliding-windows-in-kolkata",
          },
          {
            id: "ss1-3",
            text: "UPVC Folding Windows",
            link: "/products/upvc-folding-windows-in-kolkata",
          },
          {
            id: "ss1-4",
            text: "UPVC Top Hung Windows",
            link: "/products/upvc-top-hung-windows-in-kolkata",
          },
          {
            id: "ss1-5",
            text: "Tilt & Turn Windows",
            link: "/products/tilt-and-turn-windows-in-kolkata",
          },
        ],
      },
      {
        id: "s1",
        text: "DOORS",
        link: "#",
        submenu: [
          {
            id: "ss2-1",
            text: "UPVC Casement Doors",
            link: "/products/upvc-casement-doors-in-kolkata",
          },
          {
            id: "ss2-2",
            text: "UPVC Sliding Doors",
            link: "/products/upvc-sliding-doors-in-kolkata",
          },
          {
            id: "ss2-3",
            text: "UPVC Folding Doors",
            link: "/products/upvc-folding-doors-in-kolkata",
          },
          {
            id: "ss2-4",
            text: "UPVC Top Hung Doors",
            link: "/products/upvc-top-hung-doors-in-kolkata",
          },
          {
            id: "ss2-5",
            text: "Tilt & Turn Doors",
            link: "/products/tilt-and-turn-doors-in-kolkata",
          },
        ],
      },
    ],
  },
  { id: "n4", link: "/blog", text: "Blogs" },
  { id: "n5", link: "/contact-us", text: "Contact Us" },
];

export default function MobileNavMenu() {
  const mobileSliderVisibility = useSelector(
    (state: RootState) => state.mobileSlider
  );
  const dispatch = useDispatch();

  return (
    <aside
      onClick={() => dispatch(setMobileSliderStateVisibility(false))}
      className={`w-full fixed top-20 h-full z-50 ${
        mobileSliderVisibility
          ? "sm:visible translate-x-0"
          : "invisible -translate-x-full"
      } transition-all duration-500`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[80%] h-full bg-white p-5 space-y-3 overflow-y-auto pb-20"
      >
        {my_nav_list.map((item, index) => (
          <CreateMobileMenu key={item.id} itemInfo={item} index={index} />
        ))}
        <OpenDownloadBrochureForm className="uppercase">Download Brochure</OpenDownloadBrochureForm>
      </div>
    </aside>
  );
}
