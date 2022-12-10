import React from 'react';

const Button = ({ children, onClick, className, style }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} rounded-[6px] border border-transparent bg-blue py-2 px-3 text-white shadow shadow-blue duration-300 ease-linear hover:border-darkgray hover:bg-gray hover:text-blue hover:shadow-gray dark:bg-[#49505a] dark:text-white dark:shadow-none dark:hover:border-gray dark:hover:text-white`}
      style={style}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
