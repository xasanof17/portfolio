import Image from 'next/image';
import React from 'react';
import reactLogo from '../assets/img/react.svg';

const Header = () => {
  return (
    <section className="mt-24 mb-10 sm:my-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <span className="text-blue dark:text-gray uppercase text-sm font-normal">
            let&apos;s build something together
          </span>
          <h1 className="text-blue dark:text-gray capitalize font-bold lg:text-7xl my-3">
            <div className="header-title flex flex-col items-center justify-center">
              <div className="flex items-center capitalize">
                Hi, I&apos;m
                <span className="text-[#3929c4] ml-2 font-extrabold">
                  khasanov javokhir
                </span>
              </div>
              <div className="flex items-center capitalize">
                <span className="uppcercase mr-2">a</span>
                <span className="text-[#3929c4] mr-2 font-extrabold">
                  junior
                </span>
                <span className="mr-2 hidden font-extrabold">full-stack</span>
                <span className="text-[#3929c4] font-extrabold">
                  Web developer
                </span>
              </div>
            </div>
            <div className="heading text-5xl">
              hi, i&apos;m <span className="text-[#3929c4]">khasanov javohir</span>
              <div>
                A <span className="text-[#3929c4]">junior web developer</span>
              </div>
            </div>
          </h1>
          <p className="text-blue dark:text-gray text-base sm:text-lg text-center">
            I&apos;m focused on building responsive front-end web applications.
          </p>
          <div className="relative w-[100px] h-[80px] my-5">
            <Image src={reactLogo} fill className="App-logo" alt="react logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
