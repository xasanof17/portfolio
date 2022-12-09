import Image from 'next/image';

const Skills = ({ skills }) => {
  return (
    <>
      <div className="my-8">
        <div className="container">
          <div className="flex items-center justify-start">
            <h2 className="text-xl font-bold uppercase text-blue dark:text-gray md:text-2xl">
              Skills
            </h2>
          </div>
          <div className="my-5">
            <div className="skills grid grid-cols-2 gap-3 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 lg:gap-5">
              {skills.map((item) => (
                <div
                  className="grid-rows-[1, 20px] grid content-between gap-3 rounded-lg border border-slate-300 bg-gray p-4"
                  key={item.node.id}
                >
                  <div className="flex items-center justify-center">
                    <div className="relative h-[100px] w-full">
                      <Image
                        src={item.node.photo.url}
                        fill
                        alt={item.node.slug}
                        className="select-none"
                      />
                    </div>
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
        </div>
      </div>
    </>
  );
};

export default Skills;
