import AboutCasementDoor from "./app/products/AboutCasementDoor";
import AboutCasementWindow from "./app/products/AboutCasementWindow";
import AboutFoldingDoor from "./app/products/AboutFoldingDoor";
import AboutFoldingWindow from "./app/products/AboutFoldingWindow";
import AboutHungDoor from "./app/products/AboutHungDoor";
import AboutSlidingDoors from "./app/products/AboutSlidingDoors";
import AboutSlidingWindow from "./app/products/AboutSlidingWindow";
import AboutTiltAndTurnWIndow from "./app/products/AboutTiltAndTurnWIndow";
import AboutTiltTurnDoor from "./app/products/AboutTiltTurnDoor";
import AboutTopHung from "./app/products/AboutTopHungWindow";

export const nav_list = [
  { id: "n1", link: "/", text: "Home" },
  { id: "n2", link: "/about-us", text: "About Us" },
  {
    id: "n3",
    link: "#",
    text: "Products",
    submenu: [
      {
        id: "s1",
        text: "WINDOWS",
        link: "#",
        submenu: [
          {
            id: "ss1-1",
            text: "UPVC Casement Windows",
            link: "/products/upvc-casement-windows-in-kolkata",
          },
          {
            id: "ss1-2",
            text: "UPVC Sliding Windows",
            link: "/products/upvc-sliding-windows-in-kolkata",
          },
          {
            id: "ss1-3",
            text: "UPVC Folding Windows",
            link: "/products/upvc-folding-windows-in-kolkata",
          },
          {
            id: "ss1-4",
            text: "UPVC Top Hung Windows",
            link: "/products/upvc-top-hung-windows-in-kolkata",
          },
          {
            id: "ss1-5",
            text: "Tilt & Turn Windows",
            link: "/products/tilt-and-turn-windows-in-kolkata",
          },
        ],
      },
      {
        id: "s1",
        text: "DOORS",
        link: "#",
        submenu: [
          {
            id: "ss2-1",
            text: "UPVC Casement Doors",
            link: "/products/upvc-casement-doors-in-kolkata",
          },
          {
            id: "ss2-2",
            text: "UPVC Sliding Doors",
            link: "/products/upvc-sliding-doors-in-kolkata",
          },
          {
            id: "ss2-3",
            text: "UPVC Folding Doors",
            link: "/products/upvc-folding-doors-in-kolkata",
          },
          {
            id: "ss2-4",
            text: "UPVC Top Hung Doors",
            link: "/products/upvc-top-hung-doors-in-kolkata",
          },
          {
            id: "ss2-5",
            text: "Tilt & Turn Doors",
            link: "/products/tilt-and-turn-doors-in-kolkata",
          },
        ],
      },
    ],
  },
  { id: "n4", link: "/blog", text: "Blogs" },
  { id: "n5", link: "/contact-us", text: "Contact Us" },
  { id: "n6", link: "/download-brochure", text: "Download Brochure" },
];

export const categorys_list = [
  {
    image: "/catimages/upvc-windows.webp",
    catname: "UPVC Casement Windows",
    link: "/products/upvc-casement-windows-in-kolkata",
  },
  {
    image: "/catimages/sliding-windows.webp",
    catname: "UPVC Sliding Windows",
    link: "/products/upvc-sliding-windows-in-kolkata",
  },
  {
    image: "/catimages/casement-doors.webp",
    catname: "UPVC Casement Doors",
    link: "/products/upvc-casement-doors-in-kolkata",
  },
  {
    image: "/catimages/Window-Door.webp",
    catname: "UPVC Sliding Doors",
    link: "/products/upvc-sliding-doors-in-kolkata",
  },
];

export const testimonials = [
  {
    username: "Mr. Sandip Ghosh",
    rating: 5,
    message:
      "Excellent quality of uPVC products and quality service delivered, I must say they are on the best uPVC doors and windows manufactures in Kolkata.",
  },
  {
    username: "Mr. Saumendu Pathak",
    rating: 5,
    message:
      "Quality products and expert team, they are the leader in uPVC doors and windows manufacturing in Kolkata. I’ll definitely recommend their products.",
  },
  {
    username: "Debolina Das",
    rating: 5,
    message:
      "Wide range of designs, awesome customer service and awesome products. Great after sales service, highly recommended.",
  },
];

export const eachproductpageinfo: {
  url: string;
  hero_banner: string;
  hero_heading: string;
  hero_subtext: string;
  details: any;
  meta?: {
    title: string;
    description: string;
    canonical: string;
  };
}[] = [
  {
    url: "/upvc-casement-windows-in-kolkata",
    hero_banner: "/productsimages/webpimage/upvc-casement-window.webp",
    hero_heading: "UPVC Casement Windows In Kolkata",
    hero_subtext:
      "Upgrade your home with UPVC Casement Windows in Kolkata. Durable, energy-efficient solutions for modern living. Contact us for details.",
    details: AboutCasementWindow,
    meta: {
      title: "Affordable UPVC Casement Windows in Kolkata | Promiplast Deals",
      description:
        "Get beautiful & functional UPVC Casement Windows in Kolkata at competitive prices with Promiplast. Free quote & expert consultation.",
      canonical: "/products/upvc-casement-windows-in-kolkata",
    },
  },
  {
    url: "/upvc-sliding-windows-in-kolkata",
    hero_banner: "/productsimages/sliding-window.avif",
    hero_heading: "UPVC Sliding Windows In Kolkata",
    hero_subtext:
      "Get high-quality UPVC sliding windows in Kolkata. Durable, energy-efficient, and stylish. Perfect for modern homes and offices.",
    details: AboutSlidingWindow,
    meta: {
      title: "Affordable UPVC Sliding Windows in Kolkata | Promiplast Deals",
      description:
        "Enhance your home with stylish & affordable UPVC Sliding Windows in Kolkata from Promiplast. Free quote & consultation.",
      canonical: "/products/upvc-sliding-windows-in-kolkata",
    },
  },
  {
    url: "/upvc-folding-windows-in-kolkata",
    hero_banner: "/productsimages/webpimage/folding-windows.webp",
    hero_heading: "UPVC Folding Windows In Kolkata",
    hero_subtext:
      "Upgrade your home with sleek UPVC folding windows in Kolkata. Modern, durable, and space-saving. Enhance your living experience today.",
    details: AboutFoldingWindow,
    meta: {
      title: "Versatile UPVC Folding Windows in Kolkata | Promiplast",
      description:
        " Enhance your home's functionality & style with UPVC Folding Windows in Kolkata from Promiplast. Perfect for balconies, patios & more. Free quote!",
      canonical: "/products/upvc-folding-windows-in-kolkata",
    },
  },
  {
    url: "/upvc-top-hung-windows-in-kolkata",
    hero_banner: "/productsimages/webpimage/top-hung-windows.webp",
    hero_heading: "UPVC Top Hung Windows In Kolkata",
    hero_subtext:
      "Upgrade your home with durable UPVC top hung windows! Explore our selection for quality and style in Kolkata.",
    details: AboutTopHung,
    meta: {
      title: "Secure UPVC Top Hung Windows in Kolkata | Promiplast Safety",
      description:
        "Enjoy fresh air with peace of mind. Promiplast offers secure UPVC Top Hung Windows in Kolkata. Easy to clean & maintain. Free quote!",
      canonical: "/products/upvc-top-hung-windows-in-kolkata",
    },
  },
  {
    url: "/tilt-and-turn-windows-in-kolkata",
    hero_banner: "/productsimages/webpimage/till-and-turn-windows.webp",
    hero_heading: "Tilt & Turn Windows In Kolkata",
    hero_subtext:
      "Upgrade your home with sleek Tilt & Turn windows in Kolkata. Stylish, versatile, and functional. Enhance your living space today!",
    details: AboutTiltAndTurnWIndow,
    meta: {
      title: "Versatile Tilt & Turn Windows in Kolkata | Promiplast Solutions",
      description:
        "Enhance your Kolkata home with versatile Tilt & Turn Windows from Promiplast. Control airflow, maximize light & enjoy easy cleaning. Free quote & expert advice!",
      canonical: "/products/tilt-and-turn-windows-in-kolkata",
    },
  },

  {
    url: "/upvc-casement-doors-in-kolkata",
    hero_banner: "/productsimages/webpimage/casement-doors.webp",
    hero_heading: "UPVC Casement Doors In Kolkata",
    hero_subtext:
      "Buy UPVC casement doors in Kolkata for durability, energy efficiency, and low maintenance. Available in various designs and colors.",
    details: AboutCasementDoor,
    meta: {
      title: "Low-Maintenance UPVC Casement Doors in Kolkata | Promiplast",
      description:
        "Invest in long-lasting UPVC Casement Doors in Kolkata from Promiplast. Low maintenance & weatherproof for lasting beauty. Free quote & expert installation!",
      canonical: "/products/upvc-casement-doors-in-kolkata",
    },
  },
  {
    url: "/upvc-sliding-doors-in-kolkata",
    hero_banner: "/productsimages/webpimage/sliding-door.webp",
    hero_heading: "UPVC Sliding Doors In Kolkata",
    hero_subtext:
      "Upgrade your home with sleek UPVC sliding doors! Find quality options in Kolkata. Enhance style and functionality effortlessly.",
    details: AboutSlidingDoors,
    meta: {
      title: "Versatile UPVC Sliding Doors in Kolkata | Promiplast",
      description:
        "Enhance your home in Kolkata with versatile UPVC Sliding Doors from Promiplast. Perfect for balconies, patios, room dividers & more. Get a free quote & expert advice!",
      canonical: "/products/upvc-sliding-doors-in-kolkata",
    },
  },
  {
    url: "/upvc-folding-doors-in-kolkata",
    hero_banner: "/productsimages/webpimage/folding-doors.webp",
    hero_heading: "UPVC Folding Doors In Kolkata",
    hero_subtext:
      "Transform your space with stylish UPVC folding doors! Explore our range for your Kolkata home. Durable, elegant, and functional.",
    details: AboutFoldingDoor,
    meta: {
      title: "Modern & Easy-Use UPVC Folding Doors Kolkata | Promiplast",
      description:
        "Elevate your Kolkata home with stylish & easy-to-operate UPVC Folding Doors from Promiplast. Enhance your view & create a modern, open feel. Get a free quote today!",
      canonical: "/products/upvc-folding-doors-in-kolkata",
    },
  },
  {
    url: "/upvc-top-hung-doors-in-kolkata",
    hero_banner: "/productsimages/webpimage/top-hung-doors.webp",
    hero_heading: "UPVC Top Hung Doors In Kolkata",
    hero_subtext:
      "Transform your space with stylish UPVC folding doors! Explore our range for your Kolkata home. Durable, elegant, and functional.",
    details: AboutHungDoor,
    meta: {
      title:
        "Space-Saving & Easy-Clean UPVC Top Hung Doors Kolkata | Promiplast",
      description:
        "Maximize space & enjoy effortless cleaning with UPVC Top Hung Doors in Kolkata from Promiplast. Perfect for bathrooms & kitchens. Get a free quote today!",
      canonical: "/products/upvc-top-hung-doors-in-kolkata",
    },
  },
  {
    url: "/tilt-and-turn-doors-in-kolkata",
    hero_banner: "/productsimages/webpimage/tilt-and-turn-door.webp",
    hero_heading: "Tilt & Turn Doors In Kolkata",
    hero_subtext:
      "Upgrade your space with versatile Tilt & Turn doors in Kolkata, blending style and functionality seamlessly for modern living.",
    details: AboutTiltTurnDoor,
    meta: {
      title:
        "Maximize Light & Space with Tilt & Turn Doors Kolkata | Promiplast ",
      description:
        "Enhance natural light & save space with Tilt & Turn Doors in Kolkata from Promiplast. Improved ventilation & easy operation. Get a free quote today! ",
      canonical: "/products/tilt-and-turn-doors-in-kolkata",
    },
  },
];
