import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} py-2 px-3 mx-3 text-white dark:text-white hover:text-blue dark:hover:text-white bg-blue dark:bg-[#49505a] hover:bg-gray rounded-[6px] shadow shadow-blue dark:shadow-none hover:shadow-gray border hover:border-darkgray dark:hover:border-gray border-transparent duration-300 ease-linear`}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
