"use client";

import React from "react";
import CountText from "./CountText";

const countText = [
  { value: "10000", text: "Projects" },
  { value: "2000", text: "Employees" },
  { value: "05", text: "Stores" },
  { value: "1982", text: "Founded" },
];

export default function Counter() {
  return (
    <div className="grid grid-cols-5 py-8 gap-32 w-full sm:grid-cols-2 sm:pl-10 sm:gap-y-10 sm:gap-x-5">
      {countText.map((item, index) => (
        <div key={index}>
          <CountText totalNum={parseInt(item.value)} />
          <p className="text-sm text-gray-500">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
