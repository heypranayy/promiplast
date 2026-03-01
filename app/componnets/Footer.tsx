import { nav_list } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import OpenDownloadBrochureForm from "./OpenDownloadBrochureForm";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <div className="flex bg-[#1A1A1A]  justify-between sm:flex-col sm:gap-11 text-white py-10 px-[var(--padding-both)]">
        <div className="text-sm">
          <Link className="block" href={"/"}>
            <Image
              className="w-36"
              src="/logo-white.webp"
              alt=""
              height={512}
              width={512}
            />
          </Link>
          <div className="flex flex-col gap-2 pt-11">
            <Link
              className="flex items-start gap-3 w-64"
              href="https://maps.app.goo.gl/6NR2HYWEhbW5HA7p6"
            >
              <span>
                AA-48, Salt Lake, Sec-1, Kol -64. (Near PNB Bus Stop, Beside
                Karur Vysya Bank)
              </span>
            </Link>
            <Link className="underline" href="tel:8336908118">
              <FaPhoneAlt size={12} className="float-left mt-1 mr-4" />
              <span className="underline">8336908118</span>
            </Link>
            <Link
              className="underline"
              href="mailto:promiplastwindow@gmail.com"
            >
              <MdEmail className="float-left mt-1 mr-3" size={15} />
              <span>promiplastwindow@gmail.com</span>
            </Link>
          </div>
        </div>
        <div className="">
          <h2 className="text-xl font-poppins">Useful Links</h2>
          <div className="w-full space-y-2 mt-2">
            {nav_list.map((item) =>
              item.link === "/download-brochure" ? (
                <OpenDownloadBrochureForm key={item.id} className="text-sm">
                  Download Brochure
                </OpenDownloadBrochureForm>
              ) : item.text === "Products" ? null : (
                <Link className="block text-sm" key={item.id} href={item.link}>
                  {item.text}
                </Link>
              )
            )}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-poppins">Products</h2>
          <div className="w-full space-y-2 mt-2">
            {nav_list[2].submenu?.[0].submenu.map((item) =>
              item.text === "WINDOWS" ? null : (
                <Link className="block text-sm" key={item.id} href={item.link}>
                  {item.text}
                </Link>
              )
            )}
            {nav_list[2].submenu?.[1].submenu.map((item) => (
              <Link className="block text-sm" key={item.id} href={item.link}>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-poppins">Stay In Touch</h2>
          <div className="flex items-center gap-3 mt-3">
            <Link
              href={"https://www.facebook.com/promiplastupvc"}
              className="size-10 bg-[#313131] flex-center hover:scale-75 transition-all duration-300"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href={"https://www.instagram.com/promiplast/?hl=en"}
              className="size-10 bg-[#313131] flex-center hover:scale-75 transition-all duration-300"
            >
              <FaInstagram />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/company/38144545/admin/feed/posts/"
              }
              className="size-10 bg-[#313131] flex-center hover:scale-75 transition-all duration-300"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
      <span className="block text-center text-sm border-t py-5">
        Digital Partner :
        <Link
          href={"https://gexart.com/"}
          className="underline pl-1 font-semibold"
        >
          Gexart Digital
        </Link>
      </span>
    </footer>
  );
}
