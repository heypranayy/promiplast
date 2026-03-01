import React from "react";
import SectionLayout from "../../componnets/SectionLayout";
import Button from "../../componnets/Button";
import Link from "next/link";
import ContactUsForm from "../../contact-us/ContactUsForm";
import { eachproductpageinfo } from "@/constant";
import SubHeading from "../SubHeading";
import ListOptions from "../ListOptions";
import { MdAddCall } from "react-icons/md";
import OpenDownloadBrochureForm from "@/app/componnets/OpenDownloadBrochureForm";
import ShimmerImage from "@/app/componnets/ShimmerImage";
import { notFound } from "next/navigation";

const services_type = [
  {
    icon: "/expert-employes.png",
    text: "Expert Employes",
    subtext:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt provident.",
  },
  {
    icon: "/global-freight.png",
    text: "Global Flight",
    subtext:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt provident.",
  },
  {
    icon: "/warehouse.png",
    text: "Warehouse",
    subtext:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt provident.",
  },
  {
    icon: "/Insurance.png",
    text: "Insurance",
    subtext:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt provident.",
  },
];

interface IProps {
  params: {
    catname: string;
  };
}

export default function page({ params }: IProps) {
  const pageContent = eachproductpageinfo.filter(
    (item) => item.url === `/${params.catname}`
  );

  if (pageContent.length === 0) return notFound();

  const component = pageContent[0].details;

  return (
    <>
      <head>
        <title>{pageContent[0].meta?.title}</title>
        <meta name="description" content={pageContent[0].meta?.description} />
        <link rel="canonical" href={pageContent[0].meta?.canonical} />
      </head>
      <main>
        <SectionLayout className="h-full max-h-screen sm:h-[90vh] relative paddingx-0 sm:px-0 overflow-hidden">
          <ShimmerImage
            className="size-full object-cover"
            src={pageContent[0].hero_banner}
            alt=""
            width={1200}
            height={1200}
          />
          <div className="size-full bg-[#0000008c] absolute top-0 bottom-0 flex flex-col justify-center px-[var(--padding-both)]">
            <div className="w-[40rem] font-poppins text-slate-100 space-y-6 mt-10 sm:w-full sm:mt-20">
              <h1 className="heading-size font-semibold tracking-wider leading-[4rem] sm:leading-10">
                {/* Flexible Transport And Logistics Services */}
                {pageContent[0].hero_heading}
              </h1>
              <p className="w-[32rem] leading-6 sm:w-full">
                {pageContent[0].hero_subtext}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link href={"/contact-us"}>
                  <Button
                    animation={true}
                    className="text-gray-700 sm:flex-grow relative overflow-hidden group/readmore flex items-center gap-2 px-7 py-3"
                  >
                    Contact Us
                  </Button>
                </Link>
                <OpenDownloadBrochureForm>
                  <Button
                    animation={true}
                    className="bg-slate-200 text-gray-700 relative overflow-hidden group/readmore flex items-center gap-2 px-7 py-3"
                  >
                    Download Brochure
                  </Button>
                </OpenDownloadBrochureForm>
              </div>
            </div>
          </div>
        </SectionLayout>
        <SectionLayout className="h-full sm:max-h-full flex justify-center sm:flex-col">
          {/* <ul className="grid grid-cols-2 w-[28rem] h-[28rem] py-10 sm:size-full">
          {services_type.map((item) => (
            <li key={item.icon}>
              <div className="">
                <div className="size-16 w-16 flex-center bg-gray-100 rounded-lg">
                  <Image
                    className="w-9"
                    src={item.icon}
                    alt=""
                    height={512}
                    width={512}
                  />
                </div>
                <h2 className="text-sm font-poppins mt-3 font-[600] text-gray-700 tracking-wider">
                  {item.text}
                </h2>
                <p className="mt-1 text-xs pr-10">{item.subtext}</p>
              </div>
            </li>
          ))}
        </ul> */}
          <div>
            <SubHeading text="WHY PROMIPLAST UPVC DOORS & WINDOWS?" />
            <ListOptions
              className="space-y-[10px] pt-[15px]"
              options={[
                "Promiplast offers noise proof uPVC windows and doors to live a peaceful life",
                "Our advanced uPVC windows and doors provide extreme insulation from rain and wind",
                "Our uPVC does not peel, warp, or crack even when the UV rays are harsh",
                "We manufacture recyclable and environment friendly products",
                "Longest durability, we offer 20 years warranty on entire range of products",
                "Our uPVC is saltwater and chemical resistant which makes it perfect for coastal homes",
                "Wide range of products to fulfil all architectural requirements",
              ]}
            />
            <div>
              <Link href={"tel:8336908118"}>
                <Button
                  animation={true}
                  icon={
                    <MdAddCall
                      size={14}
                      className="group-hover/readmore:text-white z-10"
                    />
                  }
                  className="flex items-center button-shdow rounded-md"
                >
                  <span>Call Us Now</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center sm:w-full">
            {/* <form className="bg-white contact-form-shdow sm:shadow-none w-[28rem] sm:bg-transparent sm:w-full sm:px-0 space-y-3 py-10 px-10 -translate-y-24 rounded-3xl sm:translate-y-0">
            <div>
              <h2 className="text-2xl font-poppins font-semibold text-gray-800">
                Submit Your Query
              </h2>
              <p className="text-gray-600 text-xs">
                And we will contact you soon
              </p>
            </div>
            <Input placeholder="Name" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
              <Input placeholder="Email" />
              <Input placeholder="Phone" />
            </div>
            <Textarea placeholder="Your Message" />
            <Button className="w-full py-[0.6rem]">SUBMIT</Button>
            <h2 className="font-poppins text-center text-gray-600 text-sm">
              Or Give Us A Call{" "}
              <Link href="tel:8336908118" className="text-orange-500">
                +91 8336908118
              </Link>
            </h2>
          </form> */}
            <ContactUsForm
              type="contact-form"
              className="bg-white contact-form-shdow sm:shadow-none sm:bg-transparent sm:w-full sm:px-0 space-y-3 py-10 px-10 -translate-y-24 rounded-3xl sm:translate-y-0"
            ></ContactUsForm>
          </div>
        </SectionLayout>
        {component()}
        {/* <SectionLayout className="servicesListBg sm:max-h-full h-full space-y-3 flex items-center justify-start flex-col py-20">
        <span className="bg-[#edb932] px-2 py-1 text-[0.70rem] rounded-full uppercase">
          Our Services
        </span>
        <h2 className="sub-heading-size font-poppins font-semibold sm:text-center">
          Wide Variety of Logistics Services
        </h2>
        <p className="text-center w-[32rem] text-sm sm:w-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur,
          reprehenderit explicabo omnis vel modi ducimus.
        </p>
        <ServicesSlider />
      </SectionLayout> */}
      </main>
    </>
  );
}
