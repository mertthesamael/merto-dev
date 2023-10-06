import Card from "@/components/Card";
import React, { FC } from "react";
import { ProjectType } from "@/types/ProjectType";
import MultiButtonFilter from "@/components/MultiButtonFilter";

interface ProjectsSectionProps {
  title: string;
  filter:string,
  projects:ProjectType[]
}

const ProjectsSection: FC<ProjectsSectionProps> =  ({ title, projects }) => {

  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-screen-lg flex flex-col gap-5 mx-8">
        <div>
          <h1 className="text-5xl text-black dark:text-white font-söhne font-extrabold">
            {title}
          </h1>
        </div>
        <div className="flex pt-2">
          <MultiButtonFilter />
        </div>
        <div
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          }}
          className="-mx-4 flex lg:grid flex-wrap justify-center md:gap-[1.12rem] gap-4 md:justify-between"
        >
          {projects.reverse().map((project) => (
            <Card key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
