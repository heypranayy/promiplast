"use client";

import React, { useState } from "react";
import Button from "../componnets/Button";

const tabmenu = [
  {
    tabname: "Mission",
    content:
      "Our mission is to craft high-quality, energy-efficient UPVC windows & doors, enhancing comfort, sustainability, and value for homes and businesses in Kolkata.",
  },
  {
    tabname: "Vision",
    content:
      "We aim to become Kolkata's leading UPVC windows & doors manufacturer, renowned for innovation, quality, and sustainable solutions that transform living spaces.",
  },
  {
    tabname: "Our Voice",
    content:
      "Our voice is dedicated to delivering premium, energy-efficient UPVC windows & doors, enhancing the quality and sustainability of Kolkata's homes and businesses.",
  },
];

export default function TabMenu() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <>
      <div className="flex items-center gap-3 font-poppins mt-5 sm:w-full sm:flex-wrap"> 
        {tabmenu.map((item, index) => (
          <Button
            onClick={() => setCurrentTabIndex(index)}
            key={index}
            className={`text-[13px] ${
              index === currentTabIndex ? "bg-[#edb83291]" : "bg-transparent"
            } transition-all duration-300`}
          >
            {item.tabname}
          </Button>
        ))}
      </div>
      <div className="text-sm flex items-start text-justify pt-5 leading-5 text-gray-600 transition-all duration-500">
        <p>{tabmenu[currentTabIndex].content}</p>
      </div>
    </>
  );
}
