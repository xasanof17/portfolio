import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";
import logo from '../assets/img/logo.svg'
let icons = [
  {
    href: "https://github.com/xasanof17/",
    icon: <BsGithub className="text-blue dark:text-gray" fontSize={20} />,
  },

  {
    href: "https://www.facebook.com/javokhirdev",
    icon: <BsFacebook className="text-blue dark:text-gray" fontSize={20} />,
  },
  {
    href: "/",
    icon: <BsLinkedin className="text-blue dark:text-gray" fontSize={20} />,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-5 dark:bg-[#14191f] border-y-2 border-[#e1e4e8] dark:border-[#32373e]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-3 md:gap-5">
          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center space-x-3">
              <Link href={"/"} className="font-bold uppercase text-xl">
                <Image src={logo} width={30} height={30} alt='logo'/>
              </Link>
              <span>|</span>
              <ul className="flex space-x-3">
                {icons.map((item, i) => (
                  <li key={i}>
                    <Link
                      className="flex items-center justify-center"
                      href={item.href}
                    >
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-blue dark:text-gray capitalize text-sm mt-2 font-medium">
              portfolio © {year}. all rights reserved
            </p>
          </div>
          <div className="flex items-center justify-start sm:justify-center md:justify-end">
            <p className="text-blue dark:text-gray text-[16px] font-medium uppercase">
              <span>developed by</span>
              <span className="text-[#3929c4] font-semibold ml-1">
                Xasanov Javohir
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
