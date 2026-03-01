import React from "react";
import SectionLayout from "../componnets/SectionLayout";
import SubHeading from "./SubHeading";
import P from "./P";
import DownloadBrochureBtn from "./DownloadBrochureBtn";
import Image from "next/image";

export default function AboutTopHungWindow() {
  return (
    <SectionLayout className="h-auto max-h-full pb-14">
      <SubHeading text="UPVC TOP HUNG WINDOWS" />
      <P text="UPVC top-hung windows utilize a hinge mechanism at the top, allowing them to open outward from the bottom. This design provides excellent ventilation while keeping rain out. Advantages of top-hung uPVC windows include better security, energy efficiency, low maintenance, and enhanced aesthetics, making them a popular choice for modern homes and buildings across Kolkata. On top of that UPVC offers merits such as durability, low maintenance, energy efficiency, sound insulation, and resistance to rot, corrosion, and termites, making it a popular choice for windows and doors across metro cities like Kolkata." />

      <div className="grid grid-cols-2 gap-3 pt-8 sm:grid-cols-1">
        <div className="h-96">
          <Image
            className="size-full object-contain"
            src={"/productsimages/hung.webp"}
            alt="casement window"
            height={1200}
            width={1200}
          />
        </div>
        <div className="h-96">
          <Image
            className="size-full object-contain"
            src={"/productsimages/hung2.jpg"}
            alt="casement window"
            height={1200}
            width={1200}
          />
        </div>
      </div>
      <SubHeading text="SWING UPVC TOP HUNG WINDOW :" />
      <P text="Swing UPVC top-hung windows pivot from the side, offering a unique opening style. They provide excellent ventilation and are easy to operate, making them ideal for areas where space is limited. Advantages of such top-hung windows include enhanced airflow, improved security, energy efficiency, and a sleek, contemporary appearance, enhancing the overall aesthetics of any space." />
      <SubHeading text="PEOPLE OFTEN GET CONFUSED ABOUT THE DIFFERENCE BETWEEN TOP-HUNG AND SIDE-HUNG WINDOW HINGES :" />
      <P text="Top-hung windows open outward from the top, using hinges at the top of the frame, offering excellent ventilation and rain protection. Side-hung windows, on the other hand, pivot from the side, providing a different opening style and allowing for easier cleaning and maintenance while still offering good airflow." />
      <SubHeading text="TOP HUNG ALUMINIUM WINDOWS : " />
      <P text="Top-hung aluminum windows feature a hinge mechanism at the top of the frame, allowing them to open outward from the top. This design provides excellent ventilation while keeping rain out. Aluminum's strength and durability make these windows suitable for various climates, offering longevity and low maintenance for residential and commercial buildings alike." />
      <SubHeading text="DOUBLE TOP HUNG WINDOW : " />
      <P text="Double-top hung windows feature two separate sashes, each hinged at the top, allowing them to open independently. This design provides flexible ventilation options and easy access for cleaning and maintenance." />

      <div className="flex-center">
        <DownloadBrochureBtn />
      </div>

      <SubHeading text="THE TOP-HUNG AND BOTTOM-HUNG DILEMMA:" />
      <P text="Top-hung windows open outward from the top, while bottom-hung windows open inward from the bottom. Top-hung windows offer better rain protection and ventilation, while bottom-hung windows provide easier cleaning and access. The choice depends on preferences, space limitations, and specific requirements of the installation. Both top and bottom-hung windows are ideal for Kolkata weather be it humid summers or chilled winters. " />
      <P text="The ideal elevation for a top-hung window depends on factors such as building design, local climate, and intended purpose. Generally, placing it higher enhances ventilation and security while optimizing aesthetics. Top-hung window elevation needs precise calculation across the dimension of the allocated space. Top hung window price varies according to the elevation and installation costs plus material prices involved. Top-hung window handles are sturdy enough to hold the entire weight of the frame without the risk of breakage. " />
      <P text="UPVC is ideal for Kolkata due to its durability in humid conditions, resistance to corrosion, and low maintenance requirements. Additionally, UPVC windows offer excellent thermal insulation, helping to keep homes cooler in Kolkata's hot climate, while also providing good sound insulation from the city's noise pollution. To invest in UPVC installations, do check out our website, Promiplast, for comprehensive guidelines." />
    </SectionLayout>
  );
}
