import React from "react";
import SectionLayout from "../componnets/SectionLayout";
import SubHeading from "./SubHeading";
import P from "./P";
import ListOptions from "./ListOptions";
import DownloadBrochureBtn from "./DownloadBrochureBtn";
import Image from "next/image";

export default function AboutSlidingWindow() {
  return (
    <SectionLayout className="h-auto max-h-full pb-14">
      <SubHeading text="UPVC SLIDING WINDOWS" />
      <P text="uPVC sliding windows are a popular choice for many homeowners due to their durability, low maintenance, and energy efficiency. uPVC, or unplasticized polyvinyl chloride, is a type of rigid plastic that is commonly used in construction because of its strength and resistance to corrosion, rot, and insects. Sliding windows operate by moving horizontally along a track, allowing for easy opening and closing without taking up extra space inside or outside the room." />
      <P text="The frames of uPVC sliding windows are designed to be sleek and slim, maximizing the glass area for better natural light and views. One of the key benefits of uPVC sliding windows is their excellent insulation properties. The material's thermal efficiency helps to keep indoor temperatures stable, reducing the need for heating and cooling and ultimately saving on energy costs. uPVC’s robustness, longevity and sturdiness are what make it gain traction among home builders for both commercial and residential spaces." />
      <div className="grid grid-cols-2 gap-3 pt-8 sm:grid-cols-1">
        <Image
          className="h-96 overflow-hidden"
          src={"/productsimages/slidingWindows.jpg"}
          alt="casement window"
          height={1200}
          width={1200}
        />
        <Image
          className="h-96 overflow-hidden"
          src={"/productsimages/slidingWindows2.jpg"}
          alt="casement window"
          height={1200}
          width={1200}
        />
      </div>
      <SubHeading text="UPVC SLIDING WINDOWS OFFER NUMEROUS ADVANTAGES." />
      <ListOptions
        className="pl-5"
        options={[
          "Firstly, they maximize natural light and views due to their expansive glass area.",
          "Secondly, they are space-saving, ideal for rooms with limited space.",
          "Thirdly, sliding windows provide easy operation, gliding smoothly along tracks for effortless opening and closing.",
          "Fourthly, they offer excellent ventilation control, allowing for precise adjustment of airflow.",
        ]}
      />
      <P text="Additionally, sliding windows often feature modern designs and can be customized to fit various architectural styles. Overall, sliding windows combine functionality, aesthetics, and convenience, making them a popular choice for homeowners seeking practical and stylish window solutions." />
      <SubHeading text="UPVC SLIDING WINDOWS WITH GRILLS OFFER SEVERAL ADVANTAGES." />
      <ListOptions
        className="pl-5"
        options={[
          "Firstly, they enhance security by providing an additional layer of protection against intruders without compromising ventilation or natural light.",
          "Secondly, the grills can be customized to match the aesthetic preferences of the homeowner, adding a decorative element to the window.",
          "Thirdly, they offer peace of mind for families with young children or pets, preventing accidental falls while the window is open.",
          "Fourthly, sliding windows with grills are easy to clean and maintain, typically requiring only occasional wiping to keep them looking their best.",
        ]}
      />
      <div className="flex-center">
        <DownloadBrochureBtn />
      </div>
      <P text="Overall, these windows combine the benefits of sliding functionality with added security and aesthetic appeal, making them a practical and stylish choice for homeowners. Additionally, uPVC sliding windows are often equipped with multi-point locking systems, enhancing security and providing peace of mind for homeowners. Maintenance is minimal with uPVC sliding windows, as they do not require painting or sealing like traditional wooden frames. Regular cleaning with soap and water is usually sufficient to keep them looking their best. " />
      <P text="Overall, uPVC sliding windows offer a practical and stylish solution for homeowners looking for reliable, low-maintenance windows with excellent insulation and security features.  uPVC sliding windows price per square feet ranges from 500 INR to 1000 INR approx depending upon the purchase criteria or quality of material opted for." />
      <P text="uPVC is a popular choice for windows in Kolkata due to its ability to withstand the city's humid and rainy climate. Unlike traditional materials like wood, uPVC does not rot, warp, or corrode in moisture-rich environments, making it ideal for coastal areas too. Additionally, uPVC offers excellent thermal insulation, helping residents stay comfortable year-round while reducing reliance on air conditioning. Its low maintenance requirements and durability against termites and other pests further contribute to its popularity in any metro city, where homeowners seek practical solutions that can withstand the city's environmental challenges. Make sure you compare and contrast the uPVC sliding windows price before making your final purchase because your investment should be an informed and calculated decision. To get the best-suited quotations for uPVC sliding windows price in Kolkata check our website containing optimal information about the cost of uPVC sliding windows." />
    </SectionLayout>
  );
}
