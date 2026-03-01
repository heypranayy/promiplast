"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";

const original_services_list = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ServicesSlider() {
  const [current, setCurrent] = useState(0);

  const [services_list, setServicesList] = useState<number[][]>([]);

  useEffect(() => {
    if (window.innerWidth < 639) {
      const newList: number[][] = [];
      original_services_list.forEach((eachItem) => {
        newList.push([eachItem]);
      });
      setServicesList(newList);
    } else {
      const newList: number[][] = [];
      let count = 0;
      original_services_list.forEach((eachItem, index) => {
        if (!newList[count]) {
          newList[count] = [eachItem];
        } else {
          newList[count].push(eachItem);
        }
        if ((index + 1) % 3 === 0) {
          count++;
        }
      });
      setServicesList(newList);
    }
  }, []);

  const goNext = () => {
    setCurrent((preState) => {
      if (preState === services_list.length - 1) return 0;
      return preState + 1;
    });
  };

  const goPrev = () => {
    setCurrent((preState) => {
      if (preState === 0) return services_list.length - 1;
      return preState - 1;
    });
  };

  return (
    <>
      <div className="flex overflow-hidden w-full">
        {services_list.map((eachArray, index) => (
          <ul
            key={index}
            style={{ translate: `-${current * 100}%`}}
            className="w-full flex items-center flex-shrink-0 justify-center gap-9 overflow-hidden transition-all duration-500"
          >
            {eachArray.map((info) => (
              <li
                key={info}
                //   style={{translate : `-${current * 100}%`}}
                className={`h-[18rem] w-[18rem] flex-shrink-0 relative rounded-sm overflow-hidden`}
              >
                <Image
                  className="size-full object-cover"
                  src="/service2.jpg"
                  alt=""
                  height={1200}
                  width={1200}
                />
                <div className="size-full bg-[#67b5e249] hover:pb-8 transition-all duration-500 absolute top-0 bottom-0 space-y-1 flex flex-col justify-end px-4 py-5">
                  <h2 className="text-gray-200 text-lg font-poppins tracking-wider font-semibold">
                    Ocean Freight {info}
                  </h2>
                  <p className="text-sm text-gray-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <Link
                    href={""}
                    className="text-xs text-[#ffd364] flex items-center"
                  >
                    <span>Read more</span>
                    <MdNavigateNext size={18} />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
      {/* <ul className="w-full flex items-center justify-center gap-9 overflow-hidden">
        {services.map((info, index) => {
          return (
            <li
              key={info}
            //   style={{translate : `-${current * 100}%`}}
              className={`h-[18rem] w-[18rem] flex-shrink-0 relative rounded-sm overflow-hidden transition-all duration-300`}
            >
              <Image
                className="size-full object-cover"
                src="/service2.jpg"
                alt=""
                height={1200}
                width={1200}
              />
              <div className="size-full bg-[#67b5e249] hover:pb-8 transition-all duration-500 absolute top-0 bottom-0 space-y-1 flex flex-col justify-end px-4 py-5">
                <h2 className="text-gray-200 text-lg font-poppins tracking-wider font-semibold">
                  Ocean Freight
                </h2>
                <p className="text-sm text-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Link
                  href={""}
                  className="text-xs text-[#ffd364] flex items-center"
                >
                  <span>Read more</span>
                  <MdNavigateNext size={18} />
                </Link>
              </div>
            </li>
          );
        })}
      </ul> */}
      <div className="flex-center gap-5">
        <button
          onClick={goPrev}
          className="navigationBtnBorder navigationBtnBorder rounded-full size-8 flex-center"
        >
          <MdNavigateNext className="rotate-180" size={20} />
        </button>
        <button
          onClick={goNext}
          className="navigationBtnBorder navigationBtnBorder rounded-full size-8 flex-center"
        >
          <MdNavigateNext size={20} />
        </button>
      </div>
    </>
  );
}
