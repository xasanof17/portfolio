import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="my-10">
      <div className="container">
        <h2 className="text-blue dark:text-gray text-xl md:text-2xl font-bold mb-3">
          About me
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="flex items-center md:col-span-2">
            <p className="text-blue dark:text-gray text-base md:text-lg">
              I am Front-End Web Developer for 1.5 years. I have always had the
              ability to work with technology and computers. In 2021, I became
              very interested in web programming and started attending courses.
              In the beginning, everything seemed very difficult to me, but as I
              worked on myself, everything became easier and now I can say that
              I am a master of my profession. I was amazed at how complicated
              programming was and quickly became interested in learning more. I
              started learning JavaScript and became even more passionate about
              making websites interactive. I'm currently spending my time
              building full-stack projects with Nextjs + Nodejs and any more
              other technologies.
              Analytical, innovative, and motivated web development professional with experience in customer service, team leadership, and organizational effectiveness in fast-paced and challenging environments. Adept at developing strategies and driving streamlined operations. Diverse analytical skills, team collaboration, and relationship building. Effective and proven track record of critical thinking, idea generation, and optimizing efficiencies. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eius quibusdam, possimus qui eaque blanditiis? Impedit ducimus molestiae quae. Quidem illum mollitia nam quis, voluptatem laboriosam. Natus quam at quod repudiandae fugiat cupiditate debitis beatae quae. Fuga maxime, similique vitae exercitationem deleniti enim odit repellat adipisci, eligendi praesentium unde omnis.
              <a
                href="https://github.com/xasanof17/"
                target={"_blank"}
                className="mx-1 underline text-blue"
              >
                Check out some of my latest projects
              </a>
            </p>
          </div>
          <div className="bg-slate-100 shadow rounded-xl py-3 hidden md:flex items-center justify-center">
            <Image
              src={"/about.avif"}
              width={350}
              height={300}
              alt="laptop img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
