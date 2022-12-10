import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useTheme } from 'next-themes';
import {
  BsGithub,
  BsFacebook,
  BsLinkedin,
  BsFillSunFill,
} from 'react-icons/bs';
import { MdNightlight } from 'react-icons/md';
import logo from '../assets/img/logo.svg';
import darkLogo from '../assets/img/dark.svg';

let icons = [
  {
    href: 'https://github.com/xasanof17/',
    icon: <BsGithub className="text-blue dark:text-gray" fontSize={20} />,
  },

  {
    href: 'https://www.facebook.com/javokhirdev',
    icon: <BsFacebook className="text-blue dark:text-gray" fontSize={20} />,
  },
  {
    href: 'https://www.linkedin.com/in/javokhir-khasanov-a34345258/',
    icon: <BsLinkedin className="text-blue dark:text-gray" fontSize={20} />,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const { theme, setTheme } = useTheme();
  return (
    <footer className="border-y-2 border-[#e1e4e8] py-5 dark:border-[#32373e] dark:bg-[#14191f]">
      <div className="container">
        <div className="grid gap-3 md:grid-cols-2 md:gap-5">
          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center space-x-3">
              {theme == 'light' && (
                <Link href={'/'} className="text-xl font-bold uppercase">
                  <Image src={logo} alt="logo" width={30} height={30} />
                </Link>
              )}
              {theme == 'dark' && (
                <Link href={'/'} className="text-xl font-bold uppercase">
                  <Image src={darkLogo} alt="logo" width={30} height={30} />
                </Link>
              )}
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
                {theme === 'light' && (
                  <button type="button" onClick={() => setTheme('dark')}>
                    <BsFillSunFill
                      className="cursor-pointer text-blue dark:text-gray"
                      fontSize={20}
                    />
                  </button>
                )}
                {theme === 'dark' && (
                  <button type="button" onClick={() => setTheme('light')}>
                    <MdNightlight
                      className="cursor-pointer text-blue dark:text-gray"
                      fontSize={20}
                    />
                  </button>
                )}
              </ul>
            </div>
            <p className="mt-2 text-sm font-medium capitalize text-blue dark:text-gray">
              portfolio © {year}. all rights reserved
            </p>
          </div>
          <div className="flex items-center justify-start sm:justify-center md:justify-end">
            <p className="text-[16px] font-medium uppercase text-blue dark:text-gray">
              <span>developed by</span>
              <span className="ml-1 font-semibold text-[#3929c4]">
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
