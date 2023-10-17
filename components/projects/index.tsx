import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function Projects(content: any) {
  const projectsTitle = content.content.projectsTitle;
  const projectItems = content.content.project;
  console.log(projectItems);
  return (
    <article className="grid items-center col-span-full section">
      <div className="grid grid-cols-12 ">
        <div className="col-span-6 col-start-2">
          <h2 className="text-6xl">{projectsTitle}</h2>
        </div>
        <div className="grid grid-cols-12 col-span-full">
          <div className="grid col-span-10 col-start-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            {projectItems.map((item: any) => (
              <>
                <div className="col-start-1 mt-14" key={item.title}>
                  <h3 className="text-4xl ">{item.title}</h3>
                  <div className="mt-5 richTextWrapper text-md">
                    <TinaMarkdown content={item.description} />
                  </div>
                  <div className="flex gap-4">
                    <a
                      className="block col-start-1 mt-5 text-lg border-b-2 border-b-blue-200 w-fit hover:border-b-blue-400"
                      href={item.siteLink}>
                      Site
                    </a>
                    <a
                      className="block col-start-1 mt-5 text-lg border-b-2 border-b-blue-200 w-fit hover:border-b-blue-400"
                      href={item.githubLink}>
                      Github
                    </a>
                  </div>
                </div>
                <div className="relative col-start-2 mt-14">
                  <Image
                    src={item.image}
                    alt="budget"
                    width={1600}
                    height={800}
                    className="object-cover"
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
