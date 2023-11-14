"use client"
import Card from "@/components/Card";
import React, { FC, Suspense } from "react";
import MultiButtonFilter from "@/components/MultiButtonFilter";
import { motion } from "framer-motion";
import ProjectsContainer from "./ProjectsContainer";



interface ProjectsSectionProps {
  title: string;
  filter: string,
}



const ProjectsSection: FC<ProjectsSectionProps> = ({ title, filter }) => {

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
          className="-mx-4 flex lg:grid flex-wrap justify-center md:gap-[1.12rem] gap-4 md:justify-between">
          <Suspense key={filter} fallback={Array(6).fill(0).map((el, _i) => (
            <motion.div key={_i} variants={item} className="animate-pulse w-full md:w-80 h-[22rem]  rounded-lg bg-black/10 dark:bg-white/10" />
          ))}>
            <ProjectsContainer filter={filter} />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
