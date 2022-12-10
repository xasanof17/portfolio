import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
let video =
  'https://www.youtube.com/watch?v=HYv55DhgTuA 47:00 https://www.youtube.com/watch?v=oUZLx79AN1A 3:20';
import { Button, NavLink } from '../utils';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/img/logo.svg';
import darkLogo from '../assets/img/dark.svg';

const links = [
  { title: 'Home', name: 'Home', href: '/' },
  { title: 'projects', name: 'Projects', href: '/projects' },
  { title: 'pay', name: 'Pay', href: '/payment' },
  { title: 'resume', name: 'CV', href: '/resume' },
];

const Navbar = () => {
  const { theme } = useTheme();
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 z-10 w-full backdrop-blur-lg">
      <nav className="w-full py-2 md:py-3">
        <div className="container">
          <div className="flex items-center justify-between">
            {theme === 'light' && (
              <Link href={'/'} className="text-xl font-bold uppercase">
                <Image src={logo} alt="logo" width={40} height={40} />
              </Link>
            )}
            {theme === 'dark' && (
              <Link href={'/'} className="text-xl font-bold uppercase">
                <Image src={darkLogo} alt="logo" width={40} height={40} />
              </Link>
            )}

            <ul className="hidden items-center space-x-3 sm:flex">
              {links.map((link, i) => (
                <NavLink
                  link={link}
                  key={i}
                  className={router.pathname === link.href ? 'active' : ''}
                />
              ))}

              <Button className="px-1 lg:px-3">Contact me</Button>
            </ul>
            <div className="block sm:hidden">
              <button
                onClick={() => setMenu(!menu)}
                className="flex items-center justify-center"
              >
                <AiOutlineMenu
                  className="pointer-events-none text-blue dark:text-gray"
                  fontSize={24}
                />
              </button>
              {menu && (
                <div className="absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-white dark:bg-blue">
                  <ul className="flex items-center space-x-2">
                    {links.map((link, i) => (
                      <NavLink
                        link={link}
                        key={i}
                        onClick={() => setMenu(!menu)}
                        className={
                          router.pathname === link.href ? 'active' : ''
                        }
                      />
                    ))}
                    <Link href={'/contact'}>
                      <Button
                        onClick={() => setMenu(!menu)}
                        className="mx-0 hidden sm:block"
                      >
                        Contact me
                      </Button>
                      <p
                        onClick={() => {
                          setMenu(!menu);
                          router.push('/contact');
                        }}
                        className="block rounded-none border border-transparent py-2 px-2 text-[15px] font-medium capitalize text-blue duration-300 ease-linear hover:rounded-[6px] hover:border-darkgray hover:bg-gray hover:shadow dark:text-gray dark:hover:border-[#32373e] dark:hover:bg-[#14191f] sm:hidden lg:px-3"
                      >
                        contact
                      </p>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
