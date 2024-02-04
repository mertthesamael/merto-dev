import Image from "next/image";
import React, { FC } from "react";
import { Github } from "../Icons/Github";
import Link from "next/link";
import { Projects } from "@prisma/client";
import Badge from "../Badge";

interface CardProps {
  project: Projects;
}

const Card: FC<CardProps> = ({ project }) => {
  return (
    <div className="p-4 h-max  dark:hover:bg-zinc-900 rounded-xl  hover:bg-[#e6e6e6]  transition-all duration-500 ease-out flex flex-col gap-6 w-full md:w-80">
      <div className="w-full relative h-52 shadow-lg shadow-slate-00 dark:shadow-black rounded-xl overflow-hidden">
        <Link href={project.productLink} target="_blank">
          <Image
            src={project.img}
            alt="Mert Enercan Project Image"
            fill
            style={{ objectFit: "cover" }}
            className="transition-all hover:scale-105"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-4 justify-between min-h-40">
        <div>
          <div className="flex flex-wrap gap-4 min-h-[4.5rem]">
            {project.techStack.split(',').map((el, _i) => (
              <Badge key={_i} text={el} />
            ))}
          </div>
          <h2 className="text-xl font-söhne text-black dark:text-white font-bold leading-10">
            {project.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-poppins line-clamp-2  min-h-[3rem]">{project.description}</p>
        </div>
        <div className="flex items-end gap-2">
          <Github />
          <Link
            href={project.repoLink}
            target="_blank"
            className="transition-all font-urbanist font-bold underline underline-offset-4 text-gray-600 hover:text-black dark:text-white/50 dark:hover:text-white text-md"
          >
            Repo Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
