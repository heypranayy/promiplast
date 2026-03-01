import React from "react";
import SectionLayout from "../componnets/SectionLayout";
import SubHeading from "./SubHeading";
import P from "./P";
import ListWithHeading from "./ListWithHeading";
import DownloadBrochureBtn from "./DownloadBrochureBtn";
import Image from "next/image";

export default function AboutSlidingDoors() {
  return (
    <SectionLayout className="h-auto max-h-full pb-14">
      <SubHeading text="UPVC SLIDING DOORS" />
      <P text="uPVC sliding doors are a popular choice for modern homes and commercial spaces due to their functionality, aesthetics, and durability. These doors are crafted from unplasticized polyvinyl chloride (uPVC), a rigid material known for its strength and resistance to weathering, making it ideal for outdoor applications. The design of uPVC sliding doors typically features one or more panels that slide horizontally along tracks, allowing for smooth and effortless operation. They offer a sleek and contemporary appearance, enhancing the overall look of any space while maximizing natural light and providing unobstructed views of the outdoors. One of the key advantages of uPVC sliding doors is their energy efficiency." />

      <div className="grid grid-cols-2 gap-3 pt-8 sm:grid-cols-1">
        <div className="h-96">
          <Image
            className="size-full object-contain"
            src={"/productsimages/slidingDoor1.jpg"}
            alt="casement window"
            height={1200}
            width={1200}
          />
        </div>
        <div className="h-96">
          <Image
            className="size-full object-contain"
            src={"/productsimages/slidingDoor3.avif"}
            alt="casement window"
            height={1200}
            width={1200}
          />
        </div>
      </div>

      <SubHeading text="LET’S EXPLORE SOME VARIETY AND FUNCTIONAL SPACES TO INSTALL THESE SLIDING DOORS. " />
      <ListWithHeading
        options={[
          {
            heading: "uPVC sliding doors with mesh",
            text: "uPVC sliding doors with mesh provide insect protection, improved ventilation, enhanced privacy, dust reduction, and safety. The mesh acts as a barrier against insects while allowing airflow and maintaining privacy. It also helps filter out dust and debris and adds an extra layer of security.",
          },
          {
            heading: "uPVC sliding doors with grill",
            text: "uPVC sliding doors with grills offer added security and durability. The grill provides a physical barrier against intrusion while allowing airflow and maintaining aesthetics. It enhances the overall strength of the door, making it more resistant to forced entry. Additionally, the grill design can complement various architectural styles, adding to the visual appeal of the space.",
          },
          {
            heading: "uPVC sliding doors for balconies",
            text: "uPVC sliding doors for balconies are gaining traffic from buyers and sellers because ‘slide and fold uPVC doors’ enhance comfort and style, especially for private terraces or farmhouse balconies. uPVC balcony sliding doors are gaining traction for several reasons. They maximize space efficiency by sliding horizontally, allowing for unobstructed views and easy access to outdoor areas. Additionally, they provide excellent insulation, helping to maintain indoor temperatures and reduce noise from outside, enhancing comfort and energy efficiency.",
          },
          {
            heading: "uPVC sliding folding doors",
            text: "uPVC sliding folding doors typically operate on a track system with multiple panels that fold and slide along the track. Each panel is connected to the next via hinges, allowing them to fold and stack neatly to one side when opened. This mechanism enables the door to be fully opened, providing a wide opening and seamless transition between indoor and outdoor spaces, maximizing flexibility and convenience.",
          },
        ]}
      />

      <div className="flex-center mb-10">
        <DownloadBrochureBtn />
      </div>

      <P text="The uPVC material provides excellent insulation, helping to maintain indoor temperatures and reduce heating and cooling costs. Additionally, uPVC sliding doors are low maintenance, requiring minimal upkeep to keep them looking and performing their best. Another benefit of uPVC sliding doors is their security features. Many models come equipped with multi-point locking systems, providing enhanced security and peace of mind for homeowners and business owners alike. Overall, uPVC sliding doors offer a versatile, stylish, and practical solution for both residential and commercial applications, combining aesthetic appeal with functionality, durability, energy efficiency, and security. uPVCs hold the future since it is absolutely easy to work with. The harmless installation makes it a favorite among all." />
      <P text="You can find detailed and comprehensive information about uPVC sliding door prices in Kolkata on our website, Promiplast. uPVC sliding door price varies according to the uPVC sliding door design you choose to install. uPVC sliding door cost varies depending on several factors. These include the size and style of the doors or windows, the quality and thickness of the uPVC material, additional features such as double glazing or security enhancements, installation complexity, and the supplier or manufacturer. Additionally, geographic location and market demand can influence prices. Overall, factors such as size, style, quality, features, installation, and market conditions all play a role in determining the cost of uPVC sliding doors. " />
    </SectionLayout>
  );
}
