"use client";

import React, { useState, useTransition } from "react";
import Input from "../componnets/Input";
import Textarea from "../componnets/Textarea";
import Button from "../componnets/Button";
import { sendMail } from "@/utils/sendMail";
import SpinnerSvg from "../componnets/SpinnerSvg";
import { ContactFormType } from "../redux/slice/contactUsDialogSlice";
import { IApiResponse } from "@/types";
import { FormEvent } from "react";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  type: ContactFormType;
}

export default function ContactUsForm({ children, className, type }: IProps) {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    startTransition(async () => {
      setResponse(null);
      if (type === "contact-form") {
        const { response: res } = await sendMail<string, Error>({
          Name: data.get("first-name") + " " + data.get("last-name"),
          Email: data.get("email"),
          Number: data.get("number"),
          Message: data.get("message"),
        });
        setResponse(
          res === "Successfully Submitted"
            ? "Thank you! Your form has been submitted successfully."
            : res
        );
      } else {
        try {
          const response = await fetch("/api/get-brochure", {
            method: "POST",
            body: JSON.stringify({
              "first-name": data.get("first-name"),
              "last-name": data.get("last-name"),
              email: data.get("email"),
              number: data.get("number"),
            }),
          });
          const result = (await response.json()) as IApiResponse<string>;
          const atag = document.createElement("a");
          atag.href = `/api/download-brochure/${result.data}`;
          atag.download = "Promiplast-Products.pdf";
          atag.click();
          setResponse("Thank you! Your form has been submitted successfully.");
        } catch (error) {
          const err = error as Error;
          setResponse(err.message);
        }
      }
    });
  };

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleSubmitForm}
      className={`bg-white w-96 contact-form-shdow relative rounded-2xl font-poppins p-10 ${className}`}
    >
      <h2 className="text-2xl font-semibold">Get in Touch</h2>
      <p className="text-sm">You can reach us anytime</p>
      <div className="space-y-3 mt-3">
        <div
          className={`grid gap-4 ${
            type === "contact-form" ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          <Input
            required
            name="first-name"
            placeholder="First name *"
            className="text-xs border-[#f0f0f0] py-1"
          />
          <Input
            required
            name="last-name"
            placeholder="Last name *"
            className="text-xs border-[#f0f0f0] py-1"
          />
        </div>
        <Input
          required
          name="email"
          type="email"
          placeholder="Your email *"
          className="text-xs border-[#f0f0f0] py-1"
        />
        <Input
          required
          type="text"
          name="number"
          maxLength={10}
          pattern="[0-9\s]{10}"
          title="Please enter a 10 digit valid mobile number"
          placeholder="Your phone number *"
          className="text-xs border-[#f0f0f0] py-1"
        />
        {type === "contact-form" ? (
          <Textarea
            name="message"
            placeholder="How can we help you ?"
            className="text-xs border-[#f0f0f0] py-1"
          />
        ) : null}

        <Button
          disabled={isPending}
          className="bg-[#1279ff] relative flex-center group/submitbtn text-gray-200 w-full py-1 rounded-full overflow-hidden"
        >
          {isPending ? (
            <SpinnerSvg size="1rem" className="text-gray-900" />
          ) : (
            <>
              <span className="z-10 absolute text-gray-900 group-hover/submitbtn:text-white transition-all duration-500">
                {type === "contact-form" ? "Submit" : "Submit & Download"}
              </span>
              <div className="z-0 bg-red-800 size-full absolute top-0 bottom-0 -left-full group-hover/submitbtn:left-0 transition-all duration-500"></div>
              <span className="z-10 invisible">
                {type === "contact-form" ? "Submit" : "Submit & Download"}
              </span>
            </>
          )}
        </Button>

        <p
          className={`text-xs text-center absolute left-0 right-0 ${
            response ? "opacity-100 text-green-700" : "opacity-0 text-red-700"
          } transition-all duration-500
          `}
        >
          {response || "Thank you! Your form has been submitted successfully."}
        </p>
      </div>
      {children}
    </form>
  );
}
