import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function About(content: any) {
  const aboutTitle = content.content.aboutTitle;
  const aboutBio = content.content.aboutBio;
  return (
    <section className="col-span-10 col-start-2 mb-8 md:mb-8 about-section">
      <h3 className="hidden text-4xl text-white">{aboutTitle}</h3>
      <div className="mt-2 richTextWrapper">
        <TinaMarkdown content={aboutBio} />
      </div>
    </section>
  );
}
