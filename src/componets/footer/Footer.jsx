import { Typography } from "@material-tailwind/react";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { RiGoogleFill } from "react-icons/ri";

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Privacy", "Terms", "Blog", "Visit Mobile Site"],
  },
  {
    title: "Help Center",
    links: [
      "FAQs",
      "How to earn Cashback",
      "Gift Card Balance",
      "Corporate Gift Card",
      "Contact Us",
    ],
  },
  {
    title: "Products",
    links: ["Templates", "Medals", "Games", "100X"],
  },
];

const currentYear = new Date().getFullYear();

export default function FooterWithSitemap() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}

          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt=""
            className="w-[170px] cursor-pointer float-end"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}
            <a href="">Material Tailwind</a>. All Rights Reserved.
          </Typography>

          <div className="flex justify-center">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2"
            >
              <BiLogoTwitter />
            </a>
            <a
              href="#"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
              <RiGoogleFill />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
