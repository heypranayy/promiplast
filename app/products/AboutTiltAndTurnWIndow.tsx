import React from "react";
import SectionLayout from "../componnets/SectionLayout";
import SubHeading from "./SubHeading";
import P from "./P";
import ListOptions from "./ListOptions";
import DownloadBrochureBtn from "./DownloadBrochureBtn";
import Image from "next/image";

export default function AboutTiltAndTurnWIndow() {
  return (
    <SectionLayout className="h-auto max-h-full pb-14">
      <SubHeading text="TILT & TURN WINDOWS" />
      <P text="UPVC (Unplasticized Polyvinyl Chloride) is commonly used for tilt and turn windows due to its numerous advantages. Firstly, UPVC is highly durable and resistant to weathering, meaning it can withstand exposure to sunlight, rain, and temperature fluctuations without deteriorating. This durability translates to long-term cost savings as UPVC windows require minimal maintenance over their lifespan. Additionally, UPVC is an excellent insulator, helping to maintain a comfortable indoor temperature by minimizing heat transfer especially needed for hot and humid summers in Kolkata complemented by mild winters.. This can lead to reduced energy consumption for heating and cooling, contributing to lower utility bills and environmental sustainability. " />
      <P text="Furthermore, UPVC tilt and turn windows offer enhanced security features as the material is inherently robust and difficult to break. The tilt and turn uPVC mechanism also allows for versatile ventilation options offering both optimal air circulation and easy cleaning access. Overall, UPVC tilt and turn windows provide a combination of durability, security, energy efficiency, and practical functionality, making them a popular choice for modern buildings." />

      <div className="grid grid-cols-2 gap-3 pt-8 sm:grid-cols-1">
        <div className="h-96">
          <Image
            className="size-full object-contain"
            src={"/productsimages/uPVC-tilt-and-turn-window-1.jpeg"}
            alt="casement window"
            height={1200}
            width={1200}
          />
        </div>
        <div className="h-96">
          <Image
            className="size-full object-contain"
            src={"/productsimages/uPVC-tilt-and-turn-window-2.webp"}
            alt="casement window"
            height={1200}
            width={1200}
          />
        </div>
      </div>

      <SubHeading text="MECHANISM AND MERITS OF UPVC TILT AND TURN WINDOWS " />
      <P text="How to open tilt and turn windows? Well, tilt and turn windows operate on a dual-function mechanism. They can tilt inwards from the top for secure ventilation while maintaining security, and they can also swing open sideways like a door for easy cleaning and emergency escape. This mechanism is controlled by a single handle, offering versatility and convenience in operation" />

      <SubHeading text="TILT WINDOWS OFFER SEVERAL ADVANTAGES: " />
      <P text="They provide excellent ventilation while maintaining security and safety. Their dual-function mechanism allows for inward tilting for secure airflow and sideways opening for easy cleaning and emergency escape. Additionally, tilt and turn windows are energy-efficient, thanks to their tight seal when closed, and they offer enhanced security features due to their robust construction. Overall, they provide versatility, convenience, and improved indoor comfort." />

      <SubHeading text="ALUMINIUM- A UPVC COUNTERPART:" />
      <P text="Aluminum tilt and turn windows operate similarly to their UPVC counterparts but offer unique advantages. The mechanism allows the window to tilt inwards from the top for secure ventilation and swing open sideways like a door for easy cleaning and emergency escape just like uPVC. The tilt function is achieved by pivoting the window at the bottom, while the turn function involves rotating it along its side hinges. " />
      <P text="The advantages of aluminum windows tilt and turn include durability and strength. Aluminum is inherently strong and resistant to corrosion, making it ideal for windows exposed to harsh weather conditions. This durability translates to long-term reliability and reduced maintenance requirements just like uPVC does these days being a modern innovation for door and window installations. " />

      <SubHeading text="LET’S DELVE INTO SOME TILT-AND-TURN WINDOWS PROS AND CONS" />
      <P text="Tilt and turn windows offer several advantages, including versatile ventilation options." />
      <ListOptions
        options={[
          "They can tilt inwards from the top, providing secure airflow while maintaining safety and security.",
          "Additionally, they can swing open sideways like a door, allowing for easy cleaning and emergency escape.",
          "This dual-function mechanism adds convenience and flexibility for users.",
          "Furthermore, tilt and turn windows are energy-efficient, as they provide a tight seal when closed, minimizing heat loss in colder months and reducing the need for heating, ultimately leading to lower energy bills.",
          "They also offer enhanced security features, with robust construction and multi-point locking systems, adding peace of mind for homeowners.",
        ]}
      />

      <P text="However, tilt and turn windows also have some drawbacks. " />
      <ListOptions
        options={[
          "Firstly, they can be more expensive than traditional single-function windows due to their advanced mechanism and materials.",
          "Additionally, the complexity of their design can make repairs more challenging and costly if issues arise.",
          "Furthermore, the inward tilting feature may limit the size of the window opening compared to traditional outward-opening windows.",
          "Lastly, some users may find the operation of tilt and turn windows less intuitive than conventional windows, requiring a learning curve for proper use.",
        ]}
      />

      <div className="flex-center mt-10">
        <DownloadBrochureBtn />
      </div>
      <P text="Despite these drawbacks, the benefits of versatile ventilation, energy efficiency, and enhanced security often outweigh the cons for many homeowners." />
      <P text="To know more about, ‘ what is a tilt and turn window’, scroll through our website, Promiplast. When asked, ‘Can tilt and turn windows open outwards?’ the answer is Yes, and that is exactly what brings most customers close to making this their top choice. UPVC tilt and turn windows are suitable for Kolkata due to their durability, weather resistance, and energy efficiency, ideal for the city’s climate conditions." />
    </SectionLayout>
  );
}
