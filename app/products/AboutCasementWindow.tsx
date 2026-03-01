import React from "react";
import SubHeading from "./SubHeading";
import P from "./P";
import ListOptions from "./ListOptions";
import SectionLayout from "../componnets/SectionLayout";
import Image from "next/image";
import DownloadBrochureBtn from "./DownloadBrochureBtn";

export default function AboutCasementWindow() {
  return (
    <SectionLayout className="h-auto max-h-full pb-14">
      <SubHeading text="WHAT IS A CASEMENT WINDOW?" />
      <P text="UPVC windows, short for unplasticized polyvinyl chloride windows, are made from rigid plastic that offers numerous benefits for residential and commercial buildings. Unlike traditional PVC, UPVC does not contain plasticizers, making it more rigid and durable for busy metro cities like Kolkata. These windows are known for their excellent thermal insulation properties, helping to reduce energy costs by maintaining comfortable indoor temperatures. But many are still confused as to, what exactly are casement windows. Well, to break it down, windows that open and close like doors are casement windows. Devoid of a central rail, an unobstructed view is what you enjoy with these windows." />
      <div className="grid grid-cols-2 gap-3 pt-8 sm:grid-cols-1">
        <Image
          src={"/productsimages/casementWindws.jpg"}
          alt="casement window"
          height={1200}
          width={1200}
        />
        <Image
          src={"/productsimages/casementWindws2.jpg"}
          alt="casement window"
          height={1200}
          width={1200}
        />
      </div>
      <SubHeading text="WHY IS THE UPVC CASEMENT WINDOW GAINING TRACTION :" />
      <P text="UPVC casement windows are popular for several reasons. Firstly, they offer excellent insulation, helping to keep homes warm in winter and cool in summer, which can lead to energy savings. They are also durable and low-maintenance, requiring little upkeep compared to other materials like wood. Additionally, UPVC windows come in a variety of styles and colors, allowing homeowners to choose options that complement their home's aesthetic. Furthermore, they provide good security features, often featuring multi-point locking systems. Finally, UPVC casement window design is a cost-effective option, making it an attractive choice for many homeowners looking to upgrade their windows." />
      <P text="Aluminum casement windows are known for their durability among other types of casement windows to choose from. To get an idea about the desired casement window sizes go through our website, Promiplast. The size of casement windows relies on space dimensions and usage purposes. For an educated and informed casement window plan and casement window cost contact our experts. Modern casement windows have a lot to offer when you ask “Are casement windows better.?” " />
      <SubHeading text="WHY CHOOSE FROM A VARIETY OF UPVC CASEMENT WINDOW DIMENSIONS: " />
      <ListOptions
        className="pl-4"
        options={[
          "Promiplast offers noise-proof uPVC windows and doors to live a peaceful life enhancing privacy.",
          "Our advanced uPVC windows and doors provide extreme insulation from rain and wind, keeping a check on the thermoregulation of the space.",
          "Our uPVC does not peel, warp, or crack even when the UV rays are harsh, making it sustainable and durable.",
          "We manufacture recyclable and environment-friendly products for the ultimate elemental care.",
          "Longest durability, we offer optimal  years warranty on an entire range of products",
          "Our uPVC is saltwater and chemical resistant which makes it perfect for coastal homes bringing your beach stay fortifications to reality.",
          "Wide range of products to fulfill all architectural requirements, after all our eyes are seeking for options be it clothes, food or window installations. ",
        ]}
      />
      <SubHeading text="AN ARRAY OF UPVC CASEMENT WINDOWS TO CHOOSE FROM: " />
      <P text="Casement windows come in various styles, offering both functionality and aesthetic appeal. The most common types include:" />
      <ListOptions
        className="pl-4"
        options={[
          "<span class = 'font-semibold'>Single casement window:</span> A single pane hinged on one side, swinging outward. Double casement window: Two panes hinged on opposite sides, swinging outward.",
          "<span class = 'font-semibold'>French casement window:</span> Two panes hinged on the sides, without a vertical frame in the center, providing an unobstructed view when both are open.",
          "<span class = 'font-semibold'>Push-out casement window:</span> Similar to traditional casements but operated by a lever or handle that pushes the window open.",
          "<span class = 'font-semibold'>Top-hung casement window:</span> Hinged at the top, swinging outward from the bottom, ideal for ventilation in rainy weather.",
        ]}
      />
      <div className="flex-center">
        <DownloadBrochureBtn />
      </div>
      <P text="UPVC windows are low-maintenance, and resistant to rotting, fading, and warping, making them suitable for Kolkata’s climate. They come in a range of styles, including casement, sliding, and tilt-and-turn, and are often equipped with modern security features for peace of mind across this metro city. Not compromising on safety and aesthetics, these are the best options that would not burn a hole in your pocket." />
    </SectionLayout>
  );
}
