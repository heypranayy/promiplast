"use client";

import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import ContactUsForm from "../contact-us/ContactUsForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setContactUsDialogState } from "../redux/slice/contactUsDialogSlice";
import Image from "next/image";
import IntersectionObserverComponent from "./IntersectionObserverComponent";

export default function ContactDialog() {
  const { visibility: contactUsDialogVisibility, type } = useSelector(
    (state: RootState) => state.contactUsDialog
  );
  const dispatch = useDispatch();
  const closeDialog = () => {
    dispatch(
      setContactUsDialogState({ visibility: false, type: "contact-form" })
    );
  };
  return (
    <div
      onClick={closeDialog}
      className={`size-full fixed z-[60] bg-[#00000091] ${
        contactUsDialogVisibility ? "flex-center" : "hidden"
      }`}
    >
      <IntersectionObserverComponent
        beforeAnimation={`${type === "contact-form" ? "translate-y-[90%]" : "translate-y-[50%]"}`}
        afterAnimation="-translate-y-4"
        className="absolute w-80 -top-3 flex-center left-[38%] sm:left-[8%]"
      >
        <Image
          className={`-rotate-2`}
          src={"/avater-men-removebg.png"}
          alt="avater men"
          height={1200}
          width={1200}
        />
      </IntersectionObserverComponent>
      <ContactUsForm type={type} className={`sm:w-full sm:mx-3 z-50 ${type === "contact-form" ? " mt-32" : "mt-20"}`}>
        <IoCloseOutline
          onClick={closeDialog}
          size={20}
          className="absolute top-7 cursor-pointer right-9"
        />
      </ContactUsForm>
    </div>
  );
}
