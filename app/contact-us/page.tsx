import React from "react";
import SectionLayout from "../componnets/SectionLayout";
import Link from "next/link";
import ContactUsForm from "./ContactUsForm";
import { Metadata } from "next";

const grid_info_list = [
  {
    title: "Location",
    subtitle:
      "AA-48, Salt Lake, Sec-1, Kol -64. (Near PNB Bus Stop, Beside Karur Vysya Bank)",
  },
];

export const metadata: Metadata = {
  title : "Contact Promiplast | UPVC Doors Manufacturers in Kolkata  - 8336908118",
  description : "Promiplast, leading UPVC French Doors manufacturer in Kolkata. Get a free quote & enquire about our windows, doors & other products. Contact us today!",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function page() {
  return (
    <SectionLayout className="bg-[#E7F0FF] relative h-[1200px] sm:max-h-[900px] sm:h-[900px] sm:pt-6 sm:pb-20 grid grid-cols-2 overflow-hidden sm:grid-cols-1">
      <div className="flex flex-col justify-center items-end">
        <div className="w-auto">
          <h1 className="heading-size font-poppins font-semibold text-gray-800">
            Contact Us
          </h1>
          <div className="font-poppins text-sm text-gray-600 space-y-3">
            <p className="w-[60%] sm:w-full">
              Email, call or complete the form and we will contact you as soon
              as possible.
            </p>
            <Link href="mailto:subrata.ash@gmail.com" className="block">
              <span className="font-semibold">Email ID :</span>{" "}
              subrata.ash@gmail.com
            </Link>
            <Link href="tel:8336908118" className="block">
              <span className="font-semibold">Contact :</span> 8336908118
            </Link>
          </div>
          <div className="font-poppins space-y-1 mt-3">
            <h2 className="text-sm font-semibold">Office Location</h2>
            <p className="text-sm text-gray-600 text-justify w-[50%]">
              AA-48, Salt Lake, Sec-1, Kol -64. (Near PNB Bus Stop, Beside Karur
              Vysya Bank)
            </p>
          </div>
        </div>

        {/* <ul className="grid grid-cols-2 mt-6 w-full gap-10 place-items-center">
          {grid_info_list.map((item) => (
            <li className="font-poppins space-y-1">
              <h2 className="text-sm font-semibold">{item.title}</h2>
              <p className="text-xs text-gray-600 text-justify">
                {item.subtitle}
              </p>
            </li>
          ))}
        </ul> */}
      </div>
      <div className="flex items-center justify-center z-10 mt-14 sm:mb-0">
        <ContactUsForm className="sm:shadow-none sm:w-full sm:rounded-none sm:absolute sm:left-0" type="contact-form"/>
      </div>
      <div className="w-[45rem] h-[30rem] sm:hidden elementor-contact-us bg-black absolute right-0 top-0 bottom-0"></div>
    </SectionLayout>
  );
}
