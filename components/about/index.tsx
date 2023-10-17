import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function About(content: any) {
  const aboutTitle = content.content.aboutTitle;
  const aboutBio = content.content.aboutBio;

  console.log(aboutBio.children[0].type);
  return (
    <div className="col-span-10 col-start-2">
      <h3 className="text-4xl text-white">{aboutTitle}</h3>
      <div className="mt-2 richTextWrapper">
        <TinaMarkdown content={aboutBio} />
      </div>
    </div>
  );
}
