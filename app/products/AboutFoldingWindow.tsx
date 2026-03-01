import React from "react";
import SectionLayout from "../componnets/SectionLayout";
import SubHeading from "./SubHeading";
import P from "./P";
import DownloadBrochureBtn from "./DownloadBrochureBtn";
import Image from "next/image";

export default function AboutFoldingWindow() {
  return (
    <SectionLayout className="h-auto max-h-full pb-14">
      <SubHeading text="UPVC FOLDING WINDOWS" />
      <P text="UPVC folding windows are a type of window system made from unplasticized polyvinyl chloride (UPVC), a durable and low-maintenance material. These windows are designed to fold and stack neatly to one side, providing maximum opening space and allowing for unobstructed views. One of the key features of UPVC folding windows is their versatility. They can be configured in various ways, such as bi-fold or multi-fold, to suit different architectural styles and space requirements. Additionally, they come in a range of colours and finishes to complement any aesthetic preference." />

      <P text="These windows are popular for both residential and commercial applications due to their functionality and aesthetics. They are commonly used in areas where space is limited or where a wide opening is desired, such as patios, balconies, and sunrooms. In terms of benefits, UPVC folding windows offer excellent thermal insulation, noise reduction, and security. They are also resistant to rot, corrosion, and fading, making them ideal for long-term use with minimal maintenance. Overall, UPVC folding windows combine practicality, aesthetics, and durability, making them a popular choice for modern building designs. Let’s delve into some varieties and mechanisms across folding window design." />

      <div className="grid grid-cols-2 gap-3 pt-8 sm:grid-cols-1">
        <div className="h-96">
          <Image
            className="size-full object-contain"
            src={"/productsimages/upvcfoldingwindow.webp"}
            alt="casement window"
            height={1200}
            width={1200}
          />
        </div>
        <div className="h-96">
          <Image
            className="size-full object-contain"
            src={"/productsimages/upvcfoldingwindow2.jpg"}
            alt="casement window"
            height={1200}
            width={1200}
          />
        </div>
      </div>

      <SubHeading text="FOLDING WINDOW SHUTTERS :" />
      <P text="Folding windows can be equipped with shutters to enhance functionality and aesthetics. These shutters provide additional privacy, light control, and security when closed. They can be customized to match the window's design and material, such as UPVC or aluminum. With folding window shutters, users can easily adjust ventilation and sunlight levels while maintaining a cohesive look with their windows. Residential homeowners and commercial space builders across Kolkata are often opting for uPVC windows with attached shutters for an uplifted sense of security and peace." />

      <SubHeading text="ALUMINIUM FOLDING WINDOW: " />
      <P text="Aluminum folding windows operate on a track system that allows the panels to fold and stack neatly to the side when opened. This mechanism maximizes space utilization and provides a wide opening for unobstructed views and enhanced ventilation which is a must for humid climates like that of Kolkata. The aluminum construction offers durability, weather resistance, and low maintenance. Additionally, these windows provide excellent thermal insulation and soundproofing. Their sleek and modern appearance adds aesthetic appeal to any space. Overall, aluminum folding windows combine functionality, durability, and aesthetics, making them a popular choice for both residential and commercial buildings." />

      <SubHeading text="FOLDING GLASS WINDOWS : " />
      <P text="Folding glass windows, also known as bi-fold or multi-fold windows, offer several advantages. Their mechanism involves panels of glass that fold and stack neatly to the side when opened, creating a wide opening and unobstructed views. The main advantages include maximizing space utilization, enhancing natural light, and ventilation, and providing a seamless indoor-outdoor connection." />

      <P text="Additionally, folding glass windows are energy-efficient, offering excellent thermal insulation when closed. They also contribute to noise reduction and provide added security. With their sleek and modern design, folding glass windows add aesthetic appeal to any space, making them a popular choice for residential and commercial applications alike. This especially is well favored by commercial skyscrapers for a clear aesthetic view of the Kolkata skyline." />
      <div className="flex-center mt-10">
        <DownloadBrochureBtn />
      </div>
      <SubHeading text="WHY IS UPVC FOLDING WINDOW A TOP CHOICE? " />
      <P text="Folding windows offer several advantages. Firstly, they maximize space utilization by neatly folding to one side, creating a wide opening and unobstructed views. Secondly, they enhance ventilation and natural light, contributing to a more comfortable indoor environment. Thirdly, they provide flexibility in design and configuration, allowing for customization to suit various architectural styles and space requirements. " />
      <P text="Additionally, folding windows are typically made from durable materials like UPVC or aluminum, offering excellent weather resistance, thermal insulation, and security. Finally, they are easy to operate and maintain, making them a practical and attractive choice for both residential and commercial spaces across metro cities like Kolkata." />
    </SectionLayout>
  );
}
