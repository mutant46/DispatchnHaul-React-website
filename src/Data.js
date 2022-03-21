import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import WorkIcon from "@mui/icons-material/Work";
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

export const usp = [
  {
    title: "Professional",
    desc: "We have professional dispatcher with 5 to 8 years of experience that can make you worth hauling in secondsnience.",
    icon: <WorkIcon />,
  },
  {
    title: "Fast & Secure",
    desc: "Procedures of our services are fast and payment methods are flexible for customer convenience.",
    icon: <ElectricBoltIcon />,
  },
  {
    title: "Reliable",
    desc: "We find loads from reliable sources like DAT load Boards, 123 Load Boards and many other reference.",
    icon: <HdrStrongIcon />,
  },
  {
    title: "Flexible Plans",
    desc: "We provide flexible means for payment through bank, comcheck, paypal or all type of credit and debit cards.",
    icon: <LocalOfferIcon />,
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
  "Collection Assistance",
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
