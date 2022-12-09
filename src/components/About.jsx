import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <section id="about" className="my-10">
      <div className="container">
        <h2 className="mb-3 text-xl font-bold text-blue dark:text-gray md:text-2xl">
          About me
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="flex items-center md:col-span-2">
            <p className="text-base text-blue dark:text-gray md:text-lg">
              I&apos;m Front-End Web Developer for 1.5 years. I have always had
              the ability to work with technology and computers. In 2021, I
              became very interested in web programming and started attending
              courses. In the beginning, everything seemed very difficult to me,
              but as I worked on myself, everything became easier and now I can
              say that I&apos;m a master of my profession. I was amazed at how
              complicated programming was and quickly became interested in
              learning more. I started learning JavaScript and became even more
              passionate about making websites interactive. I&apos;m currently
              spending my time building full-stack projects with Nextjs + Nodejs
              and any more other technologies. Analytical, innovative, and
              motivated web development professional with experience in customer
              service, team leadership, and organizational effectiveness in
              fast-paced and challenging environments. Adept at developing
              strategies and driving streamlined operations. Diverse analytical
              skills, team collaboration, and relationship building. Effective
              and proven track record of critical thinking, idea generation, and
              optimizing efficiencies.
              <Link
                href="https://github.com/xasanof17/"
                target={'_blank'}
                className="mx-1 text-blue underline"
              >
                Check out some of my latest projects
              </Link>
            </p>
          </div>
          <div className="hidden items-center justify-center rounded-xl bg-slate-100 py-3 shadow md:flex">
            <div className="relative h-[300px] w-full">
              <Image src={'/about.avif'} fill alt="laptop img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
