import React from "react";
import SectionLayout from "../componnets/SectionLayout";
import SubHeading from "./SubHeading";
import P from "./P";
import ListOptions from "./ListOptions";
import DownloadBrochureBtn from "./DownloadBrochureBtn";
import Image from "next/image";

export default function AboutCasementDoor() {
  return (
    <SectionLayout className="h-auto max-h-full pb-14">
      <SubHeading text="UPVC CASEMENT DOORS" />
      <P text="UPVC casement doors are made from unplasticized polyvinyl chloride, a durable and low-maintenance material. These doors feature a hinged mechanism, allowing them to swing open and shut like traditional doors. UPVC casement doors offer excellent thermal insulation, helping to maintain a comfortable indoor temperature and reduce energy costs. They are also highly secure, often equipped with multi-point locking systems for added safety across cities like Kolkata. To obtain more details across casement doors definition go through our website, Promiplast with industry-specific and relevant information nuggets curated by experts. Additionally, UPVC is resistant to rot, rust, and corrosion, making these doors ideal for various environments, including coastal areas. Their versatility in design and color options makes them suitable for both modern and traditional architectural styles.  From a variety of hues, glass materials, handles, and mesh designs to choose from Promiplast offers you lucrative alternatives. To get an accurate estimation of casement door price ranges, consult our industry experts for a detailed insight into what your budget allocation should look like. " />
      <div className="grid grid-cols-2 gap-3 pt-8 sm:grid-cols-1">
        <Image
          className="h-96 object-cover"
          src={"/productsimages/casementDoors.jpg"}
          alt="casement window"
          height={1200}
          width={1200}
        />
        <Image
          className="h-96 object-cover"
          src={"/productsimages/casementDoors2.jpg"}
          alt="casement window"
          height={1200}
          width={1200}
        />
      </div>

      <SubHeading text="VARIOUS SORTS TO CHOOSE FROM - " />
      <SubHeading className="text-[14px]" text="1. French casement doors:" />
      <P text=" French casement doors are characterized by their elegant and timeless design. Unlike traditional casement doors, French casement doors lack a center mullion, providing unobstructed views and a seamless transition between indoor and outdoor spaces. French casement doors add a touch of sophistication to any interior or exterior, making them a popular choice for both residential and commercial applications." />
      <SubHeading className="text-[14px]" text="2. Double casement doors:" />
      <div className="pl-4">
        <P
          className="mt-1"
          text="These are the popular sorts among this lot. Let’s explore the pros-"
        />
        <ListOptions
          className="mt-0"
          options={[
            "Enhanced Ventilation: With two panels, double-casement doors provide better airflow and ventilation compared to single-panel doors.",
            "Natural Light: The larger glass area of double casement doors allows more natural light into the space, creating a brighter and more inviting atmosphere.",
            "Flexible Opening Options: Each panel of the double door can be opened independently, providing flexibility in controlling airflow and access.",
            "Aesthetic Appeal: Double casement doors often have a symmetrical and balanced design, enhancing the aesthetic appeal of the space.",
            "Energy Efficiency: When properly sealed, double casement doors offer improved insulation, helping to maintain a comfortable indoor temperature and reduce energy costs.",
            "Versatility: They are suitable for various architectural styles, from traditional to modern, making them a versatile choice for residential and commercial buildings alike.",
          ]}
        />
      </div>
      <SubHeading className="text-[14px]" text="3. Steel casement doors:" />
      <P text="ement doors are chosen for their unparalleled strength and security. Steel doors are also highly durable, and able to withstand extreme weather conditions, making them suitable for outdoor applications." />
      <SubHeading className="text-[14px]" text="4. Aluminium casement door:" />
      <P text="Aluminium casement doors are versatile and widely used in residential, commercial, and industrial settings. Their robust construction makes them suitable for high-traffic areas such as entrances and exits. Their ability to withstand harsh weather conditions makes them popular choices for both interior and exterior spaces, including homes, offices, retail establishments, and educational institutions." />
      <P text="Casement door cabinets are also much sought after these days owing to their multifaceted functionality and enhanced convenience." />
      <P text="UPVC, or unplasticized polyvinyl chloride, is a popular choice for windows and doors in Kolkata due to its durability, low maintenance, and ability to withstand the city's humid climate and monsoon seasons. It doesn't warp or rot like wood, making it ideal for areas prone to moisture. Additionally, UPVC provides good insulation, which helps in maintaining comfortable indoor temperatures despite weather fluctuations. Kolkata being a booming metro city, UPVC doors will be your best friend in infrastructural endeavors. UPVC will offer you Long-term durability and hassle-less maintenance. " />
      <div className="flex-center mt-10">
        <DownloadBrochureBtn />
      </div>
    </SectionLayout>
  );
}
