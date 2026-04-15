import Image from "next/image";
import SectionLayout from "./componnets/SectionLayout";
import { FaArrowDownLong } from "react-icons/fa6";
import Link from "next/link";
import Button from "./componnets/Button";
import { categorys_list, testimonials } from "@/constant";
import { IoMdStar } from "react-icons/io";
import HomePageContactForm from "./componnets/HomePageContactForm";
import { ArrayWithNum } from "@/utils/ArrayWithNum";
import IntersectionObserverComponent from "./componnets/IntersectionObserverComponent";
import OpenContactUsDialogBtn from "./componnets/OpenContactUsDialogBtn";
import { Metadata } from "next";
import ShimmerImage from "./componnets/ShimmerImage";

const products_list = [
  {
    id: "p1",
    catname: "Living Room",
    image:
      "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-brown-sofa.png",
    productname: "Brown Living Room Sofa",
  },
  {
    id: "p2",
    catname: "Home Office",
    image:
      "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/egyptian-brown-vase.png",
    productname: "Egyptian Vase",
  },
  {
    id: "p3",
    catname: "Living Room",
    image:
      "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-green-sofa.png",
    productname: "Green Living Room Sofa",
  },
  {
    id: "p4",
    catname: "Chair",
    image:
      "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/furniture-green-fabric-chair.png",
    productname: "Modern Emerald Fabric Chair",
  },
];

const our_services = [
  {
    id: "s1",
    image: "/configuration.png",
    text: "Customization",
    subtext:
      "Tailored to your exact specifications, our windows offer endless possibilities to match your unique style and needs.",
  },
  {
    id: "s2",
    image: "/durability.png",
    text: "Durability",
    subtext:
      "Built to endure the elements, our windows are designed to withstand harsh weather conditions and retain their integrity for years to come.",
  },
  {
    id: "s3",
    image: "/low-volume.png",
    text: "Noise Reduction",
    subtext:
      "Enjoy a quieter indoor environment with our windows' superior sound insulation, creating a tranquil oasis in your home.",
  },
  {
    id: "s4",
    image: "/tools.png",
    text: "Expert Installation",
    subtext:
      "Our team of skilled professionals ensures flawless installation, guaranteeing optimal performance and longevity for your windows.",
  },
];

const hungingWindows = [
  "/hunging-windows/top-hung.jpg",
  "/hunging-windows/top-hung-2.jpg",
  "/hunging-windows/top-hung-3.jpg",
];

export const metadata: Metadata = {
  title: "UPVC Windows & Doors Manufacturer in Kolkata | Promiplast",
  description:
    "Upgrade your Kolkata home with Promiplast's premium UPVC doors and windows. Enhance style and durability with our quality products. Contact now!!",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="w-full h-auto">
      <SectionLayout className="h-screen paddingx-0 sm:px-0 relative overflow-hidden">
        <ShimmerImage
          className="size-full absolute -z-10"
          src={"/home-banner.webp"}
          alt="Home page banner"
          height={1200}
          width={1200}
        />
        <div className="size-full bg-[#302f2fb4] pt-20 flex space-y-8 flex-col justify-center px-[var(--padding-both)]">
          <div className="flex items-center gap-5">
            <div className="w-5 h-[1px] bg-[#EDB932]"></div>
            <span className="text-[#EDB932] text-[16px] tracking-wider">
              WINDOWS TO A BETTER TOMORROW
            </span>
          </div>

          <div className="w-[80%] space-y-10 sm:w-full">
            <div className="space-y-3">
              <h1 className="heading-size font-poppins font-bold text-white tracking-wide sm:text-wrap">
                UPVC WINDOWS & DOORS MANUFACTURER IN KOLKATA
              </h1>
              <p className="text-white p-size italic text-justify leading-[1.8rem] sm:leading-6 w-[64%] sm:w-full">
                Your trusted partner for premium UPVC windows and doors in
                Kolkata. Combining durability, style, and energy efficiency to
                enhance the beauty and security of your home.
              </p>
            </div>
            <div>
              <Link href={"/contact-us"}>
                <Button
                  animation={true}
                  className="uppercase overflow-hidden relative flex-center group/readmore gap-2"
                >
                  CONTACT US NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className="py-20 sm:h-full sm:max-h-full grid grid-cols-2 sm:grid-cols-1">
        <IntersectionObserverComponent
          className="duration-1000"
          beforeAnimation="-translate-x-full opacity-0 overflow-hidden blur-3xl"
          afterAnimation="translate-x-0 opacity-100 blur-none"
        >
          <Image
            src="/hp-sliding-windows.webp"
            alt="sliding windows"
            width={1200}
            height={1200}
          />
        </IntersectionObserverComponent>

        <IntersectionObserverComponent
          beforeAnimation="translate-x-full opacity-0 blur-3xl"
          afterAnimation="translate-x-0 opacity-100 blur-none"
          className="pl-20 space-y-8 sm:pl-0 sm:mt-10"
        >
          <div className="flex items-center gap-3">
            <div className="w-20 h-[1px] bg-[#EDB932]"></div>
            <span className="text-[#EDB932] text-[16px] tracking-wider">
              NEW COLLECTION
            </span>
          </div>
          <h2 className="sub-heading-size font-semibold font-poppins leading-[3rem] text-gray-900 tracking-wider">
            UPVC Sliding Windows
          </h2>
          <p className="text-[16px] leading-7 text-justify">
            Slide into style with our UPVC sliding windows! Effortless, secure,
            and space-saving, they&apos;re the perfect upgrade for modern homes.
            Elevate your space with sleek functionality.
          </p>
          <div>
            <Link href={"/products/upvc-sliding-windows-in-kolkata"}>
              <Button animation={true} className="sm:w-full">
                EXPLORE NOW
              </Button>
            </Link>
          </div>
        </IntersectionObserverComponent>
      </SectionLayout>
      {/* <SectionLayout className="sm:h-full sm:max-h-full sm:mt-48">
        <ProductsList products_list={products_list} />
      </SectionLayout> */}
      <SectionLayout className="w-full paddingx-0 sm:h-full sm:max-h-full sm:px-0">
        <div className="grid grid-cols-4 sm:grid-cols-1">
          {categorys_list.map((item, index) => (
            <IntersectionObserverComponent
              style={{ transitionDelay: `${index * 100}ms` }}
              beforeAnimation="translate-x-full opacity-0 blur-2xl"
              afterAnimation="translate-x-0 opacity-100 blur-none"
              key={item.image}
              className="w-full relative h-[28rem] overflow-hidden group/cat"
            >
              <Link href={item.link} className="block size-full">
                <Image
                  className="object-cover size-full"
                  src={item.image}
                  alt=""
                  width={1200}
                  height={1200}
                />
                <div className="bg-[#07070798] group-hover/cat:bg-transparent absolute top-0 bottom-0 size-full flex items-end py-5 px-5 transition-all duration-500">
                  <span className="flex items-center transition-all duration-300 gap-2 uppercase font-poppins text-white hover:text-[#edb932]">
                    <span>{item.catname}</span>
                    <FaArrowDownLong className="-rotate-90" />
                  </span>
                </div>
              </Link>
            </IntersectionObserverComponent>
          ))}
        </div>
      </SectionLayout>
      <SectionLayout className="max-h-full h-full sm:pb-16">
        <div className="grid grid-cols-2 mb-10 sm:grid-cols-1 sm:mt-10">
          <div className="flex-grow space-y-5 sm:flex-grow-0">
            <div className="flex items-center gap-5">
              <div className="w-20 h-[1px] bg-[#EDB932]"></div>
              <span className="text-[#EDB932] text-[16px] tracking-wider">
                BEST SELLER
              </span>
            </div>
            <h2 className="font-poppins sub-heading-size font-semibold text-gray-800">
              UPVC Top Hung Windows
            </h2>
          </div>
          <div className="flex justify-end items-end sm:items-start sm:justify-start sm:mt-5">
            <Button animation={true}>EXPLORE NOW</Button>
          </div>
        </div>
        {/* <ProductsList products_list={products_list} />
        <ProductsList products_list={products_list.slice(0, 3)} /> */}
        <div className="grid grid-cols-3 gap-10 sm:grid-cols-1">
          {hungingWindows.map((src) => (
            <div
              key={src}
              className="w-full size-96 border-2 relative object-cover  overflow-hidden shadow-md rounded-2xl"
            >
              <Image
                className="object-cover size-full z-0"
                src={src}
                alt=""
                height={1200}
                width={1200}
              />
              <OpenContactUsDialogBtn className="absolute bottom-5 right-5">
                <button className="bg-[#EDB932] px-5 py-[0.7rem] button-shdow  tracking-wider hover:bg-[#e4c576] transition-all duration-300 rounded-md text-gray-800 text-xs font-semibold font-poppins">
                  Get Quote
                </button>
              </OpenContactUsDialogBtn>
            </div>
          ))}
        </div>
      </SectionLayout>
      <SectionLayout className="overflow-hidden h-auto my-16 mt-20 sm:hidden">
        <div className="promo-banner h-[40rem] flex items-center">
          <div className="promo-card-shdow ml-24 top-0 bg-white py-10 px-16 w-[35rem]">
            <h2 className="text-[40px] font-semibold font-poppins text-nowrap">
              Get Amazing Discount
            </h2>
            <p className="pt-4 text-gray-700 leading-7 text-justify">
              Unlock incredible savings with our amazing discounts on your first
              call – because your satisfaction begins with exceptional value.
            </p>
            <Link href={"/contact-us"}>
              <Button animation={true} className="text-[12px] uppercase mt-10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout
        // style={{ height: "420px" }}
        className="h-[420px] sm:max-h-full sm:h-full sm:py-10"
      >
        <div className="space-y-5">
          <div className="flex items-center gap-5">
            <div className="w-20 h-[1px] bg-[#EDB932]"></div>
            <span className="text-[#EDB932] uppercase text-[16px] tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="font-poppins sub-heading-size font-semibold text-gray-800">
            What People Thinks About Us
          </h2>
        </div>
        <ul className="grid grid-cols-3 mt-10 gap-10 sm:grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <IntersectionObserverComponent
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`duration-300`}
              beforeAnimation="translate-x-full opacity-0 blur-2xl"
              afterAnimation="translate-x-0 opacity-100 blur-none"
            >
              <li
                key={testimonial.username}
                className="bg-white promo-card-shdow py-9 px-10 rounded-3xl"
              >
                <div className="flex items-center gap-3">
                  {/* <div className="size-12 rounded-full bg-slate-200"></div> */}
                  <div>
                    <h2 className="font-poppins leading-none">
                      {testimonial.username}
                    </h2>
                    <div className="flex items-center gap-1 pt-1">
                      <IoMdStar color="#EDB932" />
                      <IoMdStar color="#EDB932" />
                      <IoMdStar color="#EDB932" />
                      <IoMdStar color="#EDB932" />
                      <IoMdStar color="#EDB932" />
                    </div>
                  </div>
                </div>
                <p className="font-poppins text-sm text-gray-600 pt-4 text-justify">
                  {testimonial.message}
                </p>
              </li>
            </IntersectionObserverComponent>
          ))}
        </ul>
      </SectionLayout>
      <SectionLayout className="h-full max-h-full">
        <div className="flex-grow space-y-5 pt-0">
          <div className="flex items-center gap-5">
            <div className="w-20 h-[1px] bg-[#EDB932]"></div>
            <span className="text-[#EDB932] text-[16px] tracking-wider">
              IF YOU WONDER
            </span>
          </div>
          <h2 className="font-poppins sub-heading-size font-semibold text-gray-800 border-b border-gray-200 pb-4">
            Why Choose Us
          </h2>
        </div>
        <ul className="grid grid-cols-4 gap-6 mt-8 sm:grid-cols-1">
          {our_services.map((service) => (
            <li key={service.id} className="w-full px-6">
              <Image
                className="w-[3rem] mb-2"
                src={service.image}
                alt=""
                height={720}
                width={720}
              />
              <span className="font-semibold text-[16px] tracking-wider font-poppins">
                {service.text}
              </span>
              <p className="text-[#6C6C6C] pt-1 text-[16px]">
                {service.subtext}
              </p>
            </li>
          ))}
        </ul>
      </SectionLayout>
      <SectionLayout className="h-auto mt-20 py-10 max-h-auto bg-slate-100 paddingx-0 grid grid-cols-2 sm:grid-cols-1">
        <div>
          <Image
            alt=""
            src="/newsletter-banner-img.jpg"
            height={1200}
            width={1200}
          />
        </div>
        <div className="w-full px-16 sm:px-3 sm:pt-10">
          <div className="flex-grow space-y-5">
            <div className="flex items-center gap-5">
              <div className="w-5 h-[1px] bg-[#EDB932]"></div>
              <span className="text-[#b39343] text-[16px] tracking-wider">
                CONTACT US AND WE WILL GET YOU SOON
              </span>
            </div>
          </div>
          <div className="w-full mt-10">
            <HomePageContactForm />
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className="h-auto py-16 sm:h-full sm:max-h-full">
        <div className="flex-grow space-y-5 sm:flex-grow-0">
          <div className="flex items-center gap-5">
            <div className="w-20 h-[1px] bg-[#EDB932]"></div>
            <span className="text-[#EDB932] text-[16px] tracking-wider uppercase">
              Go Green & Save Tree
            </span>
          </div>
          <h2 className="font-poppins sub-heading-size font-semibold text-gray-800">
            Our Certifications
          </h2>
        </div>

        <div className="flex items-center flex-wrap justify-center sm:flex-none sm:grid sm:grid-cols-2 gap-9 mt-6">
          {ArrayWithNum(8).map((_, index) => (
            <IntersectionObserverComponent
              key={index}
              style={{ transitionDelay: `${index * 10}ms` }}
              className="duration-500"
              beforeAnimation="translate-x-full"
              afterAnimation="translate-x-0"
            >
              <div className="border w-36 overflow-hidden object-cover">
                <Image
                  className="object-contain"
                  src={`/certificats/client_${index + 1}.webp`}
                  alt={`client_${index + 1}`}
                  height={1200}
                  width={1200}
                />
              </div>
            </IntersectionObserverComponent>
          ))}
        </div>
      </SectionLayout>
    </main>
  );
}
