import Logo from "./icons/Logo";
import Facebook from "./icons/social-icons/Facebook";
import Instagram from "./icons/social-icons/Instagram";
import Ticktok from "./icons/social-icons/Ticktok";
import Twitter from "./icons/social-icons/Twitter";

const SERVICIES = [
  "Bonus program",
  "Gift cards",
  "Credit and payment",
  "Service contracts",
  "Non-cash account",
  "Payment",
];

const ASSISTANCE_TO_THE_BUYER = [
  "Find an order",
  "Terms of delivery",
  "Exchange and return of goods",
  "Guarantees",
  "Frequently asked questions",
  "Terms of the use of the site",
];

export default function Footer() {
  return (
    <footer className="bg-black flex flex-col p-10 space-y-5 items-center md:items-start">
      <div className="flex flex-col space-y-5 md:flex-row md: space-x-2">
        <div className="flex flex-col items-center px-10 md:w-[33%] md:items-start md:px-0">
          <Logo color="white" />
          <p className="text-[#cfcfcf] font-medium text-center md:text-left">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1 md:w-[33%] md:items-start">
          <span className="text-xl text-white">Services</span>
          {SERVICIES.map((service, i) => (
            <span
              key={i}
              className="text-[#cfcfcf] transition-colors hover:text-white hover:cursor-pointer"
            >
              {service}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-1 md:w-[33%] md:items-start">
          <span className="text-xl text-white">Assistance to the buyer</span>
          {ASSISTANCE_TO_THE_BUYER.map((assistance, i) => (
            <span
              key={i}
              className="text-[#cfcfcf] transition-colors hover:text-white hover:cursor-pointer"
            >
              {assistance}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <Twitter />
        <Facebook />
        <Ticktok />
        <Instagram />
      </div>
    </footer>
  );
}
