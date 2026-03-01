"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setContactUsDialogState } from "../redux/slice/contactUsDialogSlice";

export default function OpenPopupAfter10Sec() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      dispatch(
        setContactUsDialogState({ visibility: true, type: "contact-form" })
      );
      clearTimeout(timeoutID);
    }, 10 * 1000);

    return () => clearTimeout(timeoutID);
  }, []);

  return <></>;
}
