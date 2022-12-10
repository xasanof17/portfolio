import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '../utils';
import Link from 'next/link';

const customBtn = () => {
  return (
    <>
      <Button onClick={() => router.push(`/projects/${item.node.slug}`)}>
        More Info
      </Button>
    </>
  );
};

const Projects = ({ projects, className }) => {
  const [show, setShow] = useState(-1);
  const router = useRouter();
  const mouseEnter = (i) => {
    setShow(i);
  };
  const mouseLeave = () => {
    setShow(-1);
  };
  return (
    <section id="projects" className={`${className ? className : 'my-24'}`}>
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((item, i) => (
            <div
              className={`overflow-y-hidden rounded-lg border-2 border-slate-200 bg-gray p-2 shadow shadow-white ${
                show === i ? 'relative' : ''
              }`}
              key={item.node.id}
              onMouseEnter={() => mouseEnter(i)}
              onMouseLeave={mouseLeave}
            >
              <div className="pointer-events-none relative h-[200px] w-full sm:h-[300px]">
                <Image src={item.node.photo.url} alt={item.node.slug} fill />
              </div>
              {show === i && (
                <div
                  className={`ease absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center rounded-xl p-2 backdrop-blur-md duration-300`}
                >
                  <h3 className="mb-3 text-lg font-bold uppercase text-blue sm:text-xl">
                    {item.node.title}
                  </h3>
                  <div className="flex items-center">
                    <Link href={item.node.code} target={'_blank'}>
                      <Button className='mx-3'>code</Button>
                    </Link>
                    <Link href={item.node.demo} target={'_blank'}>
                      <Button className='mx-3'>demo</Button>
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
