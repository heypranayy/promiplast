"use client";

import React from "react";

export default function CountText({ totalNum }: { totalNum: number }) {
  return <p className="font-semibold text-2xl text-gray-700">{totalNum}+</p>;
}
