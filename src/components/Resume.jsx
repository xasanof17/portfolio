import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  BsGithub,
  BsTelegram,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsCreditCard2FrontFill,
} from 'react-icons/bs';
import { SiVercel } from 'react-icons/si';
import { Button } from '../utils';
import Projects from './Projects';
import { useRouter } from 'next/router';

const links = [
  {
    name: 'GitHub',
    href: 'https://github.com/xasanof17/',
    icon: <BsGithub className="text-blue dark:text-gray" fontSize={20} />,
  },
  {
    name: 'Vercel',
    href: 'https://vercel.com/xasanof17/',
    icon: <SiVercel className="text-blue dark:text-gray" fontSize={20} />,
  },
  {
    name: 'facebook',
    href: 'https://www.facebook.com/javokhirdev',
    icon: <BsFacebook className="text-blue dark:text-gray" fontSize={20} />,
  },
  {
    name: 'linkedin',
    href: '/',
    icon: <BsLinkedin className="text-blue dark:text-gray" fontSize={20} />,
  },
  {
    name: 'telegram',
    href: 'https://t.me/xasanoffi/',
    icon: <BsTelegram className="text-blue dark:text-gray" fontSize={20} />,
  },
  {
    name: 'instagram',
    href: '/',
    icon: <BsInstagram className="text-blue dark:text-gray" fontSize={20} />,
  },
  {
    name: 'twitter',
    href: 'https://twitter.com/xasanof17/',
    icon: <BsTwitter className="text-blue dark:text-gray" fontSize={20} />,
  },
];

const Resume = ({ skills, projects }) => {
  const router = useRouter();
  return (
    <>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-[30px]">
        <div className="rounded-lg border border-slate-200 bg-slate-100 p-4 shadow sm:p-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
            {/* <div className="flex items-center justify-center md:col-span-1 md:justify-start">
              <div className="relative h-full w-full rounded-[50%]">
                <Image src="/developer.jpg" alt="profile image" fill />
              </div>
            </div> */}
            <div className="md:col-span-3">
              <h3 className="mb-2 text-center text-xl font-bold text-blue dark:text-gray lg:text-start">
                The Strong Junior Web Developer
              </h3>
              <p className="text-justify text-[16px] font-medium text-blue dark:text-gray sm:text-lg lg:text-start">
                I&apos;m Front-End Web Developer for 1.5 years. I have always
                had the ability to work with technology and computers. In 2021,
                I became very interested in web programming and started
                attending courses. In the beginning, everything seemed very
                difficult to me, but as I worked on myself, everything became
                easier and now I can say that I am a master of my profession. I
                was amazed at how complicated programming was and quickly became
                interested in learning more. I started learning JavaScript and
                became even more passionate about making websites interactive.
                I&apos;m currently spending my time building full-stack projects
                with Nextjs + Nodejs and any more other technologies.
                Analytical, innovative, and motivated web development
                professional with experience in customer service, team
                leadership, and organizational effectiveness in fast-paced and
                challenging environments. Adept at developing strategies and
                driving streamlined operations. Diverse analytical skills, team
                collaboration, and relationship building. Effective and proven
                track record of critical thinking, idea generation, and
                optimizing efficiencies.
              </p>
            </div>
            <ul className="hidden flex-col space-y-2 lg:flex">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    target={'_blank'}
                    className="hover:text-shadow flex items-center space-x-2 text-lg capitalize text-blue hover:underline dark:text-gray"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <Button
                className="mx-0"
                onClick={() => router.push('/resume.pdf')}
              >
                Download CV
              </Button>
            </ul>
          </div>
          <div className="my-5 flex flex-col items-center justify-center space-y-3 lg:hidden">
            <ul className="flex flex-col flex-wrap items-center justify-center space-y-2 sm:flex-row sm:space-y-0 md:space-x-3">
              {links.map((link, i) => (
                <li key={i} className="flex items-center justify-center">
                  <Link
                    href={link.href}
                    target={'_blank'}
                    className="hover:text-shadow flex items-center space-x-2 text-lg capitalize text-blue hover:underline dark:text-gray sm:mr-2 md:mr-0"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Button onClick={() => router.push('/resume.pdf')}>
              Download CV
            </Button>
          </div>
          {/* Work Experience */}
          {/* <div className="flex flex-col my-3">
              <h2 className="text-blue dark:text-gray text-xl font-bold text-center mb-5 capitalize">
                Work Experience
              </h2>
              <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-5 skills">
                xa
              </div>
            </div> */}
          <div className="my-3 flex flex-col">
            <h2 className="mb-5 text-center text-xl font-bold capitalize text-blue dark:text-gray">
              Skills
            </h2>
            <div className="skills grid grid-cols-2 gap-3 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 lg:gap-5">
              {skills.map((item) => (
                <div
                  className="grid-rows-[1, 20px] grid content-between gap-3 rounded-lg border border-slate-300 bg-gray p-4"
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
                    <h3 className="capitalize text-blue dark:text-gray">
                      {item.node.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="my-3 flex flex-col">
            <h2 className="mb-5 text-center text-xl font-bold capitalize text-blue dark:text-gray">
              projects
            </h2>
            <Projects projects={projects} className={`m-0`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
