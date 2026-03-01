import React from "react";
import SectionLayout from "../componnets/SectionLayout";
import SubHeading from "./SubHeading";
import P from "./P";
import ListOptions from "./ListOptions";
import DownloadBrochureBtn from "./DownloadBrochureBtn";
import Image from "next/image";

export default function AboutHungDoor() {
  return (
    <SectionLayout className="h-auto max-h-full pb-14">
      <SubHeading text="UPVC TOP HUNG DOORS" />
      <P text="UPVC (Unplasticized Polyvinyl Chloride) top-hung doors utilize a mechanism where the hinges are positioned at the top of the frame, allowing the door to swing outward. This design offers several advantages. Firstly, it maximizes floor space as the door swings outward, making it ideal for areas with limited space. Secondly, it provides better ventilation by allowing the top portion of the door to be opened while keeping the bottom part closed, enhancing airflow without compromising security. " />
      <P text="Additionally, UPVC top-hung doors are known for their durability and low maintenance requirements. They are resistant to rot, corrosion, and weathering, making them suitable for various climates. Moreover, UPVC material offers excellent thermal insulation properties, helping to keep indoor spaces comfortable and energy-efficient." />
      <P text="Overall, UPVC top-hung doors combine practicality, functionality, and durability, making them a popular choice for both residential and commercial applications. Top-hung uPVC doors are gaining traction worldwide, especially in Kolkata because of their seamless installation and practical usage convenience. Top-hung UPVC doors operate with hinges positioned at the top of the frame, allowing the door to swing outward leveraging its flexibility. " />

      <div className="grid grid-cols-2 gap-3 pt-8 sm:grid-cols-1">
        <div className="h-96">
          <Image
            className="size-full object-contain"
            src={"/productsimages/hungDoor.webp"}
            alt="casement window"
            height={1200}
            width={1200}
          />
        </div>
        <div className="h-96">
          <Image
            className="size-full object-contain"
            src={"/productsimages/hungDoor2.webp"}
            alt="casement window"
            height={1200}
            width={1200}
          />
        </div>
      </div>

      <SubHeading text="TOP-HUNG SLIDING DOORS" />
      <P text="Top-hung sliding door systems operate with rollers attached to the top of the door, allowing it to glide along a track mounted above the opening. This mechanism supports smooth and effortless operation, minimizing friction and wear. The top-hung design also ensures stability and prevents the door from sagging over time. This system is popular for its space-saving benefits and aesthetic appeal, making it a preferred choice for modern interior and exterior designs." />
      <SubHeading text="TOP-HUNG INTERNAL BIFOLD DOORS" />
      <P text="Top-hung internal bi-fold doors feature a mechanism where the panels are suspended from a track mounted on the top of the door frame. This allows the panels to fold and slide smoothly along the track, maximizing space efficiency. The top-hung design ensures stability and prevents the doors from dragging on the floor, enhancing durability. One advantage is their versatility; they can be used to divide rooms or create flexible living spaces. Additionally, bi-fold doors allow for easy access to wider openings compared to traditional doors, promoting seamless indoor-outdoor flow." />
      <P text="They also offer enhanced natural light penetration and ventilation, contributing to a brighter and more comfortable living environment.  To sort the best-suited and optimal quality top-hung bifold door hardware do consider the following- " />

      <ListOptions
        options={[
          "Top track",
          "RollersHinges",
          "Pivot brackets",
          "Floor guide (if applicable)",
          "Handles or knobs",
          "Screws and fasteners",
        ]}
      />
      <div className="flex-center mb-10">
        <DownloadBrochureBtn />
      </div>
      <P text="In fact, it is not that difficult to find good quality top-hung sliding door gear these days; and you can always scroll through our website, Promiplast for comprehensive guidance. UPVC top-hung doors are suitable for Kolkata due to their durability and weather resistance. The city experiences high humidity levels and frequent rainfall, which can cause wooden doors to warp or rot over time. UPVC material is resistant to moisture, rot, and corrosion, making it ideal for withstanding Kolkata's climate. Additionally, UPVC doors offer excellent thermal insulation, helping to keep indoor spaces cool during hot summers and warm during cooler months." />
    </SectionLayout>
  );
}
