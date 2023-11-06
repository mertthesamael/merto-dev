"use client"
import Card from "@/components/Card";
import React, { FC } from "react";
import { ProjectType } from "@/types/ProjectType";
import MultiButtonFilter from "@/components/MultiButtonFilter";
import { motion } from "framer-motion";


interface ProjectsSectionProps {
  title: string;
  filter:string,
  projects:ProjectType[]
}

const ProjectsSection: FC<ProjectsSectionProps> =  ({ title, projects }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  const projectsArray = [...projects].reverse()
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
        <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          }}
          className="-mx-4 flex lg:grid flex-wrap justify-center md:gap-[1.12rem] gap-4 md:justify-between"
        >
          {projectsArray.map((project,_i) => (
            <motion.div key={project.name}  variants={item} className="w-full">
              <Card project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
