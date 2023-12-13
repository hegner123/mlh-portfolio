import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function Projects(content: any) {
  const projectsTitle = content.content.projectsTitle;
  const projectItems = content.content.project;

  return (
    <section
      id="projects"
      className="z-10 grid items-center col-span-full section">
      <div className="content-layout col-span-full">
        <div className="content-layout col-span-full">
          <h3 className="text-6xl content-span">{projectsTitle}</h3>
        </div>
        <ul className="col-span-full md:col-start-3 md:col-end-[-3] content-layout">
          {projectItems.map((item: any) => (
            <li className="content-layout col-span-full " key={item.title}>
              <article className="content-span lg:col-span-5 lg:col-start-2 mt-14">
                <h3 className="text-4xl ">{item.title}</h3>
                <div className="mt-5 richTextWrapper text-md">
                  <TinaMarkdown content={item.description} />
                </div>
                <div className="flex gap-4">
                  <a
                    className="block col-start-1 mt-5 text-lg border-b-2 border-b-blue-200 w-fit hover:border-b-blue-400"
                    href={item.siteLink}
                    target="_blank">
                    Site
                  </a>
                  {item.githubLink && (
                    <a
                      className="block col-start-1 mt-5 text-lg border-b-2 border-b-blue-200 w-fit hover:border-b-blue-400"
                      href={item.githubLink}
                      target="_blank">
                      Github
                    </a>
                  )}
                </div>
              </article>
              <div className="relative mt-14 lg:col-span-5 lg:col-start-8 content-span">
                <Image
                  src={item.image}
                  alt="budget"
                  width={1600}
                  height={900}
                  className="object-cover p-2"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
