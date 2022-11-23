import Link from "next/link";
import React from "react";

const NavLink = ({ link, onClick, className}) => {
  return (
    <li>
      <Link
        title={link.title}
        href={link.href}
        onClick={onClick}
        className={`${className} ${link.title === 'Home' && 'home'} navlink capitalize text-[15px] ss:text-[16px] font-medium py-2 lg:px-3 px-2 text-blue dark:text-gray hover:bg-gray dark:hover:bg-[#14191f] hover:rounded-[6px] hover:border-darkgray dark:hover:border-[#32373e] hover:shadow border border-transparent rounded-none duration-300 ease-linear`}
      >
        <span>{link.name}</span>
      </Link>
    </li>
  );
};

export default NavLink;
