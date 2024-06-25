import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import WorkIcon from "@mui/icons-material/Work";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

export const pages = [
  {
    id: 1,
    title: "Home",
    pageURL: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: "Services",
    pageURL: "/services",
    icon: <MiscellaneousServicesIcon />,
  },
  {
    id: 3,
    title: "Pricing",
    pageURL: "/pricing",
    icon: <LocalOfferIcon />,
  },
  {
    id: 4,
    title: "Contact",
    pageURL: "/contact",
    icon: <MailIcon />,
  },
];

export const allPages = [
  {
    id: 1,
    title: "Home",
    pageURL: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: "Services",
    pageURL: "/services",
    icon: <MiscellaneousServicesIcon />,
  },
  {
    id: 3,
    title: "Pricing",
    pageURL: "/pricing",
    icon: <LocalOfferIcon />,
  },
  {
    id: 4,
    title: "Contact",
    pageURL: "/contact",
    icon: <MailIcon />,
  },
  {
    id: 5,
    title: "Privacy Policy",
    pageURL: "/privacy-policy",
    icon: "",
  },
];

export const usp = [
  {
    title: "Industry Expertise",
    desc: "Our experienced dispatchers have a deep understanding of the US and Canada freight market, ensuring you get matched with the best possible loads.",
    icon: <WorkIcon />,
  },
  {
    title: "Technology-Driven Approach",
    desc: "We leverage cutting-edge technology to find high-paying loads quickly and efficiently.",
    icon: <ElectricBoltIcon />,
  },
  {
    title: "Dedicated Support",
    desc: "You'll have a dedicated dispatcher by your side throughout the process, providing personalized attention and ensuring your needs are met.",
    icon: <SupportAgentIcon />,
  },
  {
    title: "24/7 Availability",
    desc: "We're here for you whenever you need us, day or night.",
    icon: <EventAvailableIcon />,
  },
  {
    title: "Commitment to Safety",
    desc: "We prioritize safety by ensuring loads comply with all regulations and promoting safe driving practices.",
    icon: <HealthAndSafetyIcon />,
  },
];

export const services = [
  "You’re the Boss",
  "Collection Assistance",
  "Keep 100% of the Payload",
  "No Forced Dispatch",
  "Request Quick Pay",
  "Loads for all Equipment Types",
  "Fax/Email Documents",
  "Request Fuel Advances",
  "24/7/365 – Dispatch Assistance",
  "Credit Checks",
  "Detention, TONU, Lumper assistance",
  "Dedicated Personal Dispatcher",
  "Setup Paperwork",
  "Factor Setup Assistance",
  "Request Insurance Certificate",
];

export const plans = [
  {
    title: "Regular",
    price: 300,
    papular: false,
    points: [
      "you're the Boss",
      "No Forced Dispatch",
      "Payload % FSC = 100% Yours",
      "We Negotiate Top paying Rates",
      "Setup Paperwork",
      "Credit Checks",
      "Personal Dispatcher",
      "Reqeust Quick Pay",
      "Request Fuel Advances",
    ],
  },
  {
    title: "Premium",
    price: 350,
    papular: true,
    points: [
      "Additional Services",
      "24/7 Dispatch Support",
      "Request Insurance Certificate",
      "Driver Director Assistance",
      "Negotiate Quick Pay Rates",
      "Factor Setup Assistance",
      "Collection Assistance",
      "Detention Charges Assistance",
      "Unused Truck Order Assistance",
    ],
  },
];
