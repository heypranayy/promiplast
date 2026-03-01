import React from "react";
import SectionLayout from "../componnets/SectionLayout";
import Image from "next/image";
import Button from "../componnets/Button";
import TabMenu from "./TabMenu";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title : "UPVC windows and doors in Kolkata | Promiplast - 8336908118",
  description : "Promiplast offers high-quality, noise-cancelling uPVC windows & doors in Kolkata for homes & businesses. They are durable, weatherproof & energy-efficient. Get a free quote today! 20 year warranty.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function page() {
  return (
    <main>
      <SectionLayout className="h-[90vh] sm:h-[60vh] relative paddingx-0 sm:px-0 overflow-hidden flex-center flex-col">
        <Image
          className="size-full object-cover"
          src="/about-us.jpg"
          alt=""
          width={1200}
          height={1200}
        />
        <div className="size-full bg-[#0000008c] absolute top-0 bottom-0 flex flex-col justify-center px-[var(--padding-both)]">
          <div className="w-[40rem] font-poppins text-slate-100 space-y-6 mt-10 sm:w-full sm:mt-20">
            <h1 className="heading-size font-semibold tracking-wider leading-[4rem] sm:leading-10">
              About Us
            </h1>
            <p className="w-[32rem] leading-6 sm:w-full">
              We specialize in manufacturing high-quality UPVC windows and doors
              in Kolkata, ensuring durability, energy efficiency, and customer
              satisfaction.
            </p>
            <div>
              <Link href={"/contact-us"}>
                <Button
                  animation={true}
                  className="text-gray-700 relative overflow-hidden group/readmore flex items-center gap-2 px-7 py-3"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className="w-full h-[100vh] max-h-[180vh] grid grid-cols-2 place-items-center sm:grid-cols-1 sm:py-8 sm:max-h-full sm:h-full">
        <div className="font-poppins pr-10 sm:pr-0 sm:w-full">
          <h2 className="sub-heading-size font-semibold text-nowrap sm:text-wrap">
            PROMIPLAST WINDOWS KOLKATA
          </h2>
          <p className="text-sm text-justify leading-6 font-poppins mt-5">
            Promiplast UPVC window systems has started in 2016 with ultra-Modern
            Technology with a Large Capacity. Our Vision is to provide customer
            delight high-quality UPVC profiles with surpassing UV resistance and
            all desired Mechanical Properties much beyond the ranges of
            parameters specified by EN12608-1:2016 standards.
          </p>
          <div className="h-[1px] w-full bg-[#c7c7c759] mt-8"></div>
          <TabMenu />
        </div>
        <div className="flex justify-end w-full sm:mt-8">
          <Image
            src="/male-team-illustration.jpg"
            alt=""
            className="w-[28rem] rounded-[2rem] sm:rounded-none"
            height={1200}
            width={1200}
          />
        </div>
      </SectionLayout>
    </main>
  );
}
