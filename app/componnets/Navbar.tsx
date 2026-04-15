"use client";

import { nav_list } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineDoorSliding } from "react-icons/md";
import { AiOutlineWindows } from "react-icons/ai";
import { usePathname } from "next/navigation";
import OpenDownloadBrochureForm from "./OpenDownloadBrochureForm";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSliderStateVisibility } from "../redux/slice/mobileSliderSlice";
import { RootState } from "../redux/store";

interface IProps {
  pReferral: React.RefObject<HTMLDivElement>;
}

const productsSubItems = [
  { name: "WINDOWS", icon: "", link: "#" },
  { name: "DOORS", icon: "", link: "#" },

  {
    name: "UPVC Casement Windows",
    icon: <AiOutlineWindows />,
    link: "upvc-casement-windows-in-kolkata",
  },
  {
    name: "UPVC Casement Doors",
    icon: <MdOutlineDoorSliding />,
    link: "upvc-casement-doors-in-kolkata",
  },
  {
    name: "UPVC Sliding Windows",
    icon: <AiOutlineWindows />,
    link: "upvc-sliding-windows-in-kolkata",
  },
  {
    name: "UPVC Sliding Doors",
    icon: <MdOutlineDoorSliding />,
    link: "upvc-sliding-doors-in-kolkata",
  },
  {
    name: "UPVC Folding Windows",
    icon: <AiOutlineWindows />,
    link: "upvc-folding-windows-in-kolkata",
  },
  {
    name: "UPVC Folding Doors",
    icon: <MdOutlineDoorSliding />,
    link: "upvc-folding-doors-in-kolkata",
  },
  {
    name: "UPVC Top Hung Windows",
    icon: <AiOutlineWindows />,
    link: "upvc-top-hung-windows-in-kolkata",
  },
  {
    name: "UPVC Top Hung Doors",
    icon: <MdOutlineDoorSliding />,
    link: "upvc-top-hung-doors-in-kolkata",
  },
  {
    name: "Tilt & Turn Windows",
    icon: <AiOutlineWindows />,
    link: "tilt-and-turn-windows-in-kolkata",
  },
  {
    name: "Tilt & Turn Doors",
    icon: <MdOutlineDoorSliding />,
    link: "tilt-and-turn-doors-in-kolkata",
  },
];

export default function Navbar({ pReferral }: IProps) {
  const pathname = usePathname();
  const isRestrictedPath = () => {
    // const index = nav_list.find((value) => value.link === pathname);
    if (pathname.includes("contact-us") || pathname.includes("blog")) {
      return true;
    }

    // if (pathname.includes("contact-us")) {
    //   return true;
    // }

    return false;
  };

  const [needToChnageHeaderBg, setNeedToChnageHeaderBg] = useState(false);
  // const [isMobileNavVisiable, setIsMobileNavVisiable] = useState(false);

  const mobileSliderVisibility = useSelector(
    (state: RootState) => state.mobileSlider
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = pReferral.current?.scrollTop || 0;

      // setIsMobileNavVisiable(false);
      if (currentScrollPosition > 0) {
        // if (!needToChnageHeaderBg) {
        setNeedToChnageHeaderBg(true);
        // }
      } else {
        // if (needToChnageHeaderBg) {
        setNeedToChnageHeaderBg(false);
        // }
      }
    };

    pReferral.current?.addEventListener("scroll", handleScroll);

    return () => pReferral.current?.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed max-w-[1500px] w-full flex items-center h-20 px-[var(--padding-both)] border-b border-[#bbbbbb62] ${
        needToChnageHeaderBg || isRestrictedPath()
          ? "bg-[#ffffffa6] backdrop-blur-2xl text-gray-700"
          : "text-white"
      } transition-all duration-300 z-20`}
    >
      <Link href={"/"} className="flex-grow">
        <Image
          className="w-44"
          src={`${
            needToChnageHeaderBg || isRestrictedPath()
              ? "/logo-black.webp"
              : "/logo-white.webp"
          }`}
          alt="logo"
          height={500}
          width={500}
        />
      </Link>

      <nav
        className={`flex items-center justify-end gap-10 sm:hidden ${
          mobileSliderVisibility ? "sm:absolute" : "sm:hidden"
        } sm:flex-col sm:right-0 sm:top-20 sm:text-sm sm:left-0 z-20 sm:bg-[#000000] sm:text-white sm:backdrop-blur-md sm:gap-3 sm:items-start sm:px-[var(--padding-both)] sm:py-5`}
      >
        {nav_list.map((item) =>
          item.link === "/download-brochure" ? (
            <OpenDownloadBrochureForm
              key={item.id}
              className="uppercase border-b border-t border-transparent hover:border-yellow-400 transition-all duration-500"
            >
              {item.text}
            </OpenDownloadBrochureForm>
          ) : item.link === "#" ? (
            <div
              className="font-poppins sm:block sm:w-full relative border-b border-t border-transparent hover:border-yellow-400 transition-all duration-500 group/products cursor-default"
              key={item.id}
            >
              {item.text.toUpperCase()}
              <div
                className={`absolute -right-44 invisible group-hover/products:visible sm:w-full sm:right-0 sm:left-0`}
              >
                <div
                  className={`py-6 w-[32rem] sm:rounded-sm sm:w-full shadow-2xl gap-y-5 mt-[1.9rem] opacity-0 translate-y-5 group-hover/products:translate-y-0 group-hover/products:opacity-100 text-gray-800 bg-white rounded-br-[5rem] grid grid-cols-2 transition-all duration-1000`}
                >
                  {productsSubItems.map((item, index) =>
                    index === 0 || index === 1 ? (
                      <span
                        key={item.name}
                        className="pl-[83px] font-semibold text-[18px] text-yellow-500"
                      >
                        {item.name}
                      </span>
                    ) : (
                      <Link
                        key={item.name}
                        className={`flex items-center hover:opacity-60 transition-all duration-300 text-[12.5px] font-semibold gap-2 text-gray-500 pl-10`}
                        href={`/products/${item.link}`}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Link
              className={`font-poppins sm:block sm:w-full relative border-b border-t border-transparent hover:border-yellow-400 transition-all duration-500 ${
                item.link === "#" ? "group/products cursor-default" : ""
              }`}
              key={item.id}
              href={item.link}
            >
              {item.text.toUpperCase()}
            </Link>
          )
        )}
      </nav>
      <div className="flex-grow hidden sm:flex justify-end ">
        {mobileSliderVisibility ? (
          <AiOutlineClose
            onClick={() => dispatch(setMobileSliderStateVisibility(false))}
            color={needToChnageHeaderBg || isRestrictedPath() ? "#000" : "#fff"}
            size={23}
          />
        ) : (
          <VscMenu
            onClick={() => dispatch(setMobileSliderStateVisibility(true))}
            color={needToChnageHeaderBg || isRestrictedPath() ? "#000" : "#fff"}
            size={23}
          />
        )}
      </div>
    </header>
  );
}
