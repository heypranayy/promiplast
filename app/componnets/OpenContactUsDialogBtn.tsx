"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { setContactUsDialogState } from "../redux/slice/contactUsDialogSlice";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function OpenContactUsDialogBtn({
  children,
  className,
}: IProps) {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(
      setContactUsDialogState({ visibility: true, type: "contact-form" })
    );
  };
  return (
    <button onClick={handleButtonClick} className={className}>
      {children}
    </button>
  );
}
