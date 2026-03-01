import React from "react";
import SectionLayout from "../componnets/SectionLayout";
import SubHeading from "./SubHeading";
import P from "./P";
import Image from "next/image";
import DownloadBrochureBtn from "./DownloadBrochureBtn";

export default function AboutFoldingDoor() {
  return (
    <SectionLayout className="h-auto max-h-full pb-14">
      <SubHeading text="UPVC FOLDING DOORS" />
      <P text="UPVC folding doors are a type of door system made from unplasticized polyvinyl chloride (UPVC), a durable and low-maintenance material. These doors consist of multiple panels that fold and stack neatly to one side when opened, creating a wide opening and seamless transition between indoor and outdoor spaces. One of the key features of UPVC folding doors is their versatility. They can be configured in various ways, such as bi-fold or multi-fold, to suit different architectural styles and space requirements." />
      <P text="Additionally, they come in a range of colors and finishes to complement any aesthetic preference.UPVC folding doors offer several advantages, including maximizing space utilization, enhancing natural light, and providing unobstructed views. They also offer excellent thermal insulation, noise reduction, and security when closed. With their durability, weather resistance, and low maintenance requirements, UPVC folding doors are a practical and stylish choice for both residential and commercial applications." />

      <div className="grid grid-cols-2 gap-3 pt-8 sm:grid-cols-1">
        <div className="h-96">
          <Image
            className="size-full object-contain"
            src={"/productsimages/FoldDoors1.avif"}
            alt="casement window"
            height={1200}
            width={1200}
          />
        </div>
        <div className="h-96">
          <Image
            className="size-full object-contain"
            src={"/productsimages/FoldDoors2.png"}
            alt="casement window"
            height={1200}
            width={1200}
          />
        </div>
      </div>

      <SubHeading text="WHY CHOOSE UPVC SLIDING DOORS? " />
      <P text="UPVC folding doors offer numerous advantages that make them a popular choice. Firstly, they maximize space utilization by neatly folding to one side, creating a wide opening and seamless indoor-outdoor transition. Secondly, they enhance natural light and ventilation, contributing to a more comfortable living or working environment. Thirdly, UPVC folding doors provide excellent thermal insulation, noise reduction, and security." />

      <P text="Moreover, they are durable, weather-resistant, and low maintenance, ensuring long-term performance and value. With their versatility in design and customization options, UPVC folding doors offer a practical and stylish solution for both residential and commercial spaces." />

      <SubHeading text="UPVC BI-FOLD DOORS : " />
      <P text="UPVC bi-fold doors operate on a track system that allows the panels to fold and stack neatly to the side when opened. This mechanism maximizes space utilization and provides a wide opening for a seamless indoor-outdoor transition. The advantages include enhanced natural light, ventilation, thermal insulation, and security, making UPVC bi-fold doors a practical and stylish choice for any space." />

      <SubHeading text="UPVC FOLDING KITCHEN DOOR : " />
      <P text="Folding kitchen doors typically operate on a hinge mechanism, allowing them to fold and stack neatly to the side when opened. This mechanism maximizes space utilization and provides easy access between rooms. The advantages include improved traffic flow, enhanced natural light, and the option to open up or close off the kitchen space as needed, making them ideal for both small and large kitchens across compact apartment spaces in Kolkata. " />
      <SubHeading text="UPVC FOLDING GLASS DOORS :" />
      <P text="Folding glass doors operate on a track system that enables the panels to fold and stack neatly to the side when opened. This mechanism maximizes space utilization and offers a wide opening, seamlessly connecting indoor and outdoor spaces. The advantages include enhanced natural light, ventilation, and unobstructed views. Additionally, folding glass doors create a sense of openness and versatility in design, making them a popular choice for modern homes and commercial buildings." />

      <SubHeading text="UPVC FOLDING MESH DOOR : " />
      <P text="Folding mesh doors typically employ a track and hinge mechanism, allowing the mesh panels to fold and stack to the side when opened. This mechanism maximizes ventilation and provides unobstructed views while keeping insects out. The advantages include enhanced airflow, natural light, and the ability to enjoy outdoor scenery without compromising on security or cleanliness, making them ideal for patios, balconies, and verandas. These are mostly popular among commercial builders for their skyscrapers across Kolkata for a mellow view of the city skyline." />

      <SubHeading text="UPVC FOLDING BATHROOM DOOR : " />
      <P text="UPVC folding bathroom doors operate on a hinge mechanism, enabling them to fold and stack neatly to the side when opened. This mechanism maximizes space utilization and offers easy access to the bathroom area. The advantages include efficient use of limited space, improved accessibility, and the ability to create a seamless transition between rooms, making them a practical choice for small bathrooms. Space crunch in apartments in congested localities across Kolkata has to be considered hence, folding bathroom doors are popular and practical. " />

      <SubHeading text="UPVC ALUMINIUM FOLDING DOORS : " />
      <P text="UPVC aluminum folding doors combine the durability of aluminum frames with the versatility of UPVC panels. They operate on a track system, allowing panels to fold and stack neatly when opened. Advantages include durability, weather resistance, and thermal insulation from aluminum, along with low maintenance and customizable designs from UPVC. This combination offers a practical and stylish solution for residential and commercial spaces." />

      <div className="flex-center mt-10">
        <DownloadBrochureBtn />
      </div>

      <SubHeading text="UPVC BALCONY FOLDING DOOR : " />
      <P text="UPVC balcony folding doors maximize space utilization, enhance natural light, and offer seamless indoor-outdoor transition. With their durability, weather resistance, and low maintenance, they provide an ideal solution for balconies. Additionally, UPVC's customization options allow for various designs to complement any architectural style." />
      <P text="Folding door design and uPVC folding door price depend upon desired usage and installation. It also relies on the allocated budget and the quality of the material being used. For a forever fortification across metro cities like Kolkata, you better opt for something sturdy and uPVC serves that purpose seamlessly. " />
    </SectionLayout>
  );
}
