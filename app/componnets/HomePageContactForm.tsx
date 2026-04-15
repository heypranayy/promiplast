"use client";

import React, { useState, useTransition } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import { sendMail } from "@/utils/sendMail";
import SpinnerSvg from "./SpinnerSvg";
import { FormEvent } from "react";

export default function HomePageContactForm() {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    startTransition(async () => {
      setResponse(null);
      const { response: res } = await sendMail<string, Error>({
        Name: data.get("name"),
        Email: data.get("email"),
        Number: data.get("number"),
        Message: data.get("message"),
      });
      setResponse(
        res === "Successfully Submitted"
          ? "Thank you! Your form has been submitted successfully."
          : res
      );
    });
  };
  return (
    <form onSubmit={handleSubmitForm} className="w-[80%] space-y-3 sm:w-full">
      <Input required name="name" placeholder="Full Name" />
      <Input required name="email" type="email" placeholder="Email" />
      <Input
        required
        name="number"
        placeholder="Contact Number"
        maxLength={10}
        pattern="[0-9\s]{10}"
        title="Please enter a 10 digit valid mobile number"
      />
      <Textarea name="message" placeholder="Your Requirements" />
      <Button disabled={isPending} className="w-full py-[.65rem] flex-center">
        {isPending ? <SpinnerSvg size="1rem" /> : <span>SUBMIT</span>}
      </Button>

      <p
        className={`${
          response ? "opacity-100 text-green-700" : "opacity-0 text-red-700"
        } text-center text-sm text-gray-800 transition-all duration-500`}
      >
        {response || "Thank you! Your form has been submitted successfully."}
      </p>
    </form>
  );
}
