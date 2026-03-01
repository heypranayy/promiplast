"use client";

import React, { useRef } from "react";
import Navbar from "../componnets/Navbar";
import { Provider } from "react-redux";
import { store } from "./store";
import Footer from "../componnets/Footer";
import FloatingBtn from "../componnets/FloatingBtn";
import ContactDialog from "../componnets/ContactDialog";
import MobileNavMenu from "../componnets/MobileNavMenu";
import OpenPopupAfter10Sec from "../componnets/OpenPopupAfter10Sec";

function MyProvider({ children }: { children: React.ReactNode }) {
  const scrollbarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={scrollbarRef}
        className="h-screen overflow-hidden w-full overflow-y-scroll"
      >
        <div className="w-full max-w-[1500px] mx-auto">
          <Provider store={store}>
            <OpenPopupAfter10Sec />
            <FloatingBtn />
            <MobileNavMenu />
            <ContactDialog />
            <Navbar pReferral={scrollbarRef} />
            {children}
            <Footer />
          </Provider>
        </div>
      </div>
    </>
  );
}

export default MyProvider;
