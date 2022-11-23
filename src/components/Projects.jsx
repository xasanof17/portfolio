import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../utils";
import Link from "next/link";

const customBtn = () => {
  return (
    <>
      <Button onClick={() => router.push(`/projects/${item.node.slug}`)}>
        More Info
      </Button>
    </>
  );
};

const Projects = ({ projects, margin }) => {
  const [show, setShow] = useState(-1);
  const router = useRouter();
  const mouseEnter = (i) => {
    setShow(i);
  };
  const mouseLeave = () => {
    setShow(-1);
  };
  return (
    <section id="projects" className={margin ? 'my-24': ''}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((item, i) => (
            <div
              className={`bg-gray rounded-lg shadow shadow-white border-2 border-slate-200 p-2 overflow-y-hidden ${
                show === i ? "relative" : ""
              }`}
              key={item.node.id}
              onMouseEnter={() => mouseEnter(i)}
              onMouseLeave={mouseLeave}
            >
              <Image
                src={item.node.photo.url}
                alt={item.node.slug}
                width={600}
                height={400}
                className="pointer-events-none"
              />
              {show === i && (
                <div
                  className={`absolute top-0 left-0 ease duration-300 w-full h-full rounded-xl p-2 flex flex-col items-center justify-center backdrop-blur-md`}
                >
                  <h3 className="text-blue text-lg sm:text-xl uppercase font-bold mb-3">
                    {item.node.title}
                  </h3>
                  <div className="flex items-center">
                    <Link href={item.node.code} target={"_blank"}>
                      <Button>code</Button>
                    </Link>
                    <Link href={item.node.demo} target={"_blank"}>
                      <Button>demo</Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
