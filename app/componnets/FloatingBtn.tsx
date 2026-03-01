import React from "react";
import { RiMessage3Line } from "react-icons/ri";
import { VscCallOutgoing } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import OpenContactUsDialogBtn from "./OpenContactUsDialogBtn";
import Link from "next/link";

export default function FloatingBtn() {
  return (
    <div className="fixed bottom-10 right-10 space-y-4 z-40 sm:right-5 sm:bottom-3">
      <Link href={"https://api.whatsapp.com/send/?phone=%2B918336908118&text&type=phone_number&app_absent=0"} className="size-11 bg-[#EDB932] hover:scale-90 transition-all duration-300 flex-center rounded-xl">
        <FaWhatsapp size={18} color="black" />
      </Link>
      <Link href={"tel:8336908118"} className="size-11 bg-[#EDB932] flex-center rounded-xl hover:scale-90 transition-all duration-300">
        <VscCallOutgoing size={18} color="black" />
      </Link>
      <OpenContactUsDialogBtn className="size-11 bg-[#EDB932] flex-center rounded-xl hover:scale-90 transition-all duration-300">
        <RiMessage3Line size={18} color="black" />
      </OpenContactUsDialogBtn>
    </div>
  );
}
