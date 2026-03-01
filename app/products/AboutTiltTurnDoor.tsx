import React from "react";
import SectionLayout from "../componnets/SectionLayout";
import SubHeading from "./SubHeading";
import P from "./P";
import DownloadBrochureBtn from "./DownloadBrochureBtn";
import Image from "next/image";

export default function AboutTiltTurnDoor() {
  return (
    <SectionLayout className="h-auto max-h-full pb-14">
      <SubHeading text="TILT & TURN DOORS" />
      <P text="UPVC tilt-and-turn doors offer a versatile and practical solution for modern homes. Their innovative design allows them to tilt inwards for ventilation or swing open like a traditional door for easy access. This dual-functionality provides excellent control over airflow and security, making them ideal for various climates and security requirements. UPVC, or unplasticized polyvinyl chloride, is a durable and low-maintenance material known for its thermal efficiency and resistance to weathering, rot, and corrosion." />
      <P text="These doors are also highly customisable, and available in various colours, finishes and sizes to suit any architectural style or aesthetic preference. Additionally, UPVC tilt and turn doors typically feature multi-point locking systems for enhanced security providing homeowners with peace of mind. Overall, their combination of functionality and durability, energy efficiency and security make upvc tilt and turn doors a popular choice for modern living spaces." />

      <div className="grid grid-cols-2 gap-3 pt-8 sm:grid-cols-1">
        <div className="h-96">
          <Image
            className="size-full object-contain"
            src={"/productsimages/Tilt-TurnDoor.jpg"}
            alt="casement window"
            height={1200}
            width={1200}
          />
        </div>
        <div className="h-96">
          <Image
            className="size-full object-contain"
            src={"/productsimages/Tilt-TurnDoor2.jpg"}
            alt="casement window"
            height={1200}
            width={1200}
          />
        </div>
      </div>

      <SubHeading text="LET’S EXPLORE AN ARRAY OF USES OF TILT AND TURN SLIDE DOORS :" />
      <P text="UPVC tilt-and-turn slide doors offer a unique blend of convenience, versatility, and aesthetic appeal, making them an excellent choice for various applications. Their innovative design allows them to tilt inward for ventilation, slide horizontally for easy access, or turn inward like a traditional door. This multi-functional capability makes them ideal for spaces where maximizing natural light and airflow is essential, such as living rooms, balconies, or patio areas. UPVC, known for its durability and thermal efficiency, ensures these doors provide excellent insulation, helping to maintain a comfortable indoor environment and reduce energy costs." />
      <P text="The sliding mechanism also saves space compared to traditional swing doors, making them suitable for smaller rooms or areas with limited clearance. With their customizable designs and reliable performance, UPVC tilt and turn slide doors are a practical and stylish choice for modern homes, offering convenience, energy efficiency, and aesthetic appeal in one package." />
      <div className="w-fll flex-center pt-4">
        <DownloadBrochureBtn />
      </div>
      <SubHeading text="WHY USE UPVC FOR DOORS : " />
      <P text="UPVC is chosen for doors due to its durability, low maintenance, and excellent thermal insulation properties. It's resistant to weathering, rot, and corrosion, making it ideal for long-term use. Additionally, UPVC is customizable, offering a range of colours and finishes to suit various architectural styles and preferences. If you are thinking long term, then upvc doors would be the right choice since it does not seem to bend even in the harshest of climatic conditions. The best part is that upvc doors allow flexible personalization almost anytime making it more accessible across time and space." />
      <P text="UPVC tilt and turn doors are suitable for Kolkata due to their ability to provide ventilation, security, and thermal insulation, addressing the city's humid climate while offering convenience and energy efficiency for residents. Tilt and turn upvc doors are ideal for big balconies and also suit small private terraces. Where summers are harsh and winters are mild, upvc is your go-to material for tilt-and-turn doors. With the need for no frequent renovation, double glazing makes it go up to 20-30 years easily. Tilt and turn doors are fancy not only for outdoors but for inside the building too. Get detailed guidance and streamlined quotations on our website, Promiplast. " />
    </SectionLayout>
  );
}
