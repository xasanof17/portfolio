import Image from "next/image";

const Skills = ({ skills }) => {
  return (
    <>
      <div className="my-8">
        <div className="container">
          <div className="flex items-center justify-start">
            <h2 className="text-blue dark:text-gray uppercase text-xl md:text-2xl font-bold">
              Skills
            </h2>
          </div>
          <div className="my-5">
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
        </div>
      </div>
    </>
  );
};

export default Skills;
