import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BsGithub,
  BsTelegram,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsCreditCard2FrontFill,
} from "react-icons/bs";
import { SiVercel } from "react-icons/si";
import { Button } from "../utils";
import Projects from "./Projects";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/xasanof17/",
    icon: <BsGithub className="text-blue dark:text-gray" fontSize={20} />,
  },
  {
    name: "Vercel",
    href: "https://vercel.com/xasanof17/",
    icon: <SiVercel className="text-blue dark:text-gray" fontSize={20} />,
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/javokhirdev",
    icon: <BsFacebook className="text-blue dark:text-gray" fontSize={20} />,
  },
  {
    name: "linkedin",
    href: "/",
    icon: <BsLinkedin className="text-blue dark:text-gray" fontSize={20} />,
  },
  {
    name: "telegram",
    href: "https://t.me/xasanoffi/",
    icon: <BsTelegram className="text-blue dark:text-gray" fontSize={20} />,
  },
  {
    name: "instagram",
    href: "/",
    icon: <BsInstagram className="text-blue dark:text-gray" fontSize={20} />,
  },
  {
    name: "twitter",
    href: "https://twitter.com/xasanof17/",
    icon: <BsTwitter className="text-blue dark:text-gray" fontSize={20} />,
  },
];

const Resume = ({ resume, skills, projects }) => {
  return (
    <>
      {resume.map((resume) => (
        <div className="md:sm:container mx-3" key={resume.node.id}>
          <div className="bg-slate-100 rounded-lg p-4 sm:p-5 shadow border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
              <div className="md:col-span-1 flex items-center md:justify-start justify-center">
                <Image
                  src={resume.node.photo.url}
                  alt="profile image"
                  className="rounded-[50%]"
                  width={290}
                  height={50}
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-blue dark:text-gray text-xl font-bold mb-2 lg:text-start text-center">
                  {resume.node.title}
                </h3>
                <p className="text-blue dark:text-gray text-lg font-medium lg:text-start sm:text-justify text-center">
                  {resume.node.bio}
                </p>
              </div>
              <ul className="lg:flex hidden flex-col space-y-2">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      target={"_blank"}
                      className="flex items-center space-x-2 capitalize text-blue dark:text-gray text-lg hover:underline hover:text-shadow"
                    >
                      <span>{link.icon}</span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
                <Button>Download CV</Button>
              </ul>
            </div>
            <div className="lg:hidden flex flex-col items-center justify-center space-y-3 my-5">
              <ul className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 md:space-x-3 flex-wrap">
                {links.map((link, i) => (
                  <li key={i} className='flex items-center justify-center'>
                    <Link
                      href={link.href}
                      target={"_blank"}
                      className="flex items-center space-x-2 md:mr-0 sm:mr-2 capitalize text-blue dark:text-gray text-lg hover:underline hover:text-shadow"
                    >
                      <span>{link.icon}</span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Button>Download CV</Button>
            </div>
            <div className="flex flex-col my-3">
              <h2 className="text-blue dark:text-gray text-xl font-bold text-center mb-5 capitalize">
                Work Experience
              </h2>
              <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-5 skills">
                xa
              </div>
            </div>
            <div className="flex flex-col my-3">
              <h2 className="text-blue dark:text-gray text-xl font-bold text-center mb-5 capitalize">
                Skills
              </h2>
              <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-5 skills">
                {skills.map((item) => (
                  <div
                    className="bg-gray border border-slate-300 rounded-lg p-4 grid grid-rows-[1, 20px] gap-3 content-between"
                    key={item.node.id}
                  >
                    <div className="flex items-center justify-center">
                      <Image
                        src={item.node.photo.url}
                        width={100}
                        height={50}
                        alt={item.node.slug}
                        className="w-full select-none"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <h3 className="text-blue dark:text-gray capitalize">
                        {item.node.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col my-3">
              <h2 className="text-blue dark:text-gray text-xl font-bold text-center mb-5 capitalize">
                projects
              </h2>
              <Projects projects={projects} margin={false} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
