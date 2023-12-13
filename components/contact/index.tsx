"use client";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactSection = () => {
  return (
    <section className="z-10 grid items-center col-span-full section">
      <div className="content-layout col-span-full">
        <h3 className="text-6xl content-span">Contact</h3>
        <ul className="gap-3 mt-10 content-layout content-span">
          <li className="col-start-1 col-span-full">
            <p className="text-xl">
              <a
                href="mailto:hegner123@gmail.com"
                className="hover:underline focus:underline">
                hegner123@gmail.com
              </a>
            </p>
          </li>
          <li className="col-span-full">
            <a
              href="https://www.linkedin.com/in/michaelhegner/"
              target="_blank">
              <LinkedInIcon className="w-[50px] h-[50px]" />
            </a>
            <a href="https://github.com/hegner123" target="_blank">
              <GitHubIcon className="w-[50px] h-[50px]" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
