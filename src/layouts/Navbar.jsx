import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
let video =
  "https://www.youtube.com/watch?v=HYv55DhgTuA 47:00 https://www.youtube.com/watch?v=oUZLx79AN1A 3:20";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { Button, NavLink } from "../utils";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/img/logo.svg";

const thems = () => {
  return (
    <>
      {theme === "light" && (
        <button
          type="button"
          className="flex items-center justify-center"
          onClick={() => setTheme("dark")}
        >
          <MdNightlight
            className="text-blue pointer-events-none"
            fontSize={20}
          />
        </button>
      )}

      {theme === "dark" && (
        <button
          className="flex items-center justify-center"
          onClick={() => setTheme("light")}
        >
          <MdLightMode
            className="text-gray pointer-events-none"
            fontSize={20}
          />
        </button>
      )}
    </>
  );
};

const links = [
  { title: "Home", name: "Home", href: "/" },
  { title: "projects", name: "Projects", href: "/projects" },
  { title: "pay", name: "Pay", href: "/payment" },
  { title: "resume", name: "Resume", href: "/resume" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-lg z-10">
      <nav className="w-full py-2 md:py-3">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="font-bold uppercase text-xl">
              <Image src={logo} alt="logo" width={40} height={40} />
            </Link>
            <ul className="hidden sm:flex items-center space-x-3">
              {links.map((link, i) => (
                <NavLink
                  link={link}
                  key={i}
                  className={router.pathname === link.href ? "active" : ""}
                />
              ))}

              <Button
                onClick={() => router.push("/contact")}
                className="lg:px-3 px-1"
              >
                Contact me
              </Button>
            </ul>
            <div className="sm:hidden block">
              <button
                onClick={() => setMenu(!menu)}
                className="flex items-center justify-center"
              >
                <AiOutlineMenu
                  className="text-blue dark:text-gray pointer-events-none"
                  fontSize={24}
                />
              </button>
              {menu && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white backdrop-blur-md z-20">
                  <ul className="flex items-center space-x-2">
                    {links.map((link, i) => (
                      <NavLink
                        link={link}
                        key={i}
                        onClick={() => setMenu(!menu)}
                        className={
                          router.pathname === link.href ? "active" : ""
                        }
                      />
                    ))}
                    <Link href={"/contact"}>
                      <Button
                        onClick={() => setMenu(!menu)}
                        className="mx-0 sm:block hidden"
                      >
                        Contact me
                      </Button>
                      <p
                        onClick={() => {
                          setMenu(!menu);
                          router.push("/contact");
                        }}
                        className="sm:hidden block capitalize text-[15px] font-medium py-2 lg:px-3 px-2 text-blue dark:text-gray hover:bg-gray dark:hover:bg-[#14191f] hover:rounded-[6px] hover:border-darkgray dark:hover:border-[#32373e] hover:shadow border border-transparent rounded-none duration-300 ease-linear"
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
