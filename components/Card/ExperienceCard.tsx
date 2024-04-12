import Image from "next/image";
import React, { FC, useState } from "react";
import Link from "next/link";
import { Experience } from "@prisma/client";

interface CardProps {
    experience: Experience
}

const Card: FC<CardProps> = ({ experience }) => {
    return (
        <div className="p-4 h-max  dark:hover:bg-zinc-900 rounded-xl  hover:bg-[#e6e6e6]  transition-all duration-500 ease-out flex flex-col gap-6 w-full md:w-[30rem]">
            <div className="w-full relative h-52 shadow-lg shadow-slate-00 dark:shadow-black rounded-xl overflow-hidden">
                <Link href={experience.projectLink} target="_blank">
                    <Image
                        src={experience.img}
                        alt="Mert Enercan Project Image"
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-all hover:scale-105"
                    />
                </Link>
            </div>
            <div className="flex flex-col gap-4 justify-between min-h-40">
                <div>
                    <h2 className="text-xl font-söhne text-black dark:text-white font-bold leading-10">
                        {experience.companyName}
                    </h2>
                    <h2 className="text-lg font-söhne text-black dark:text-white font-bold leading-10">
                        {experience.role}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 font-poppins text-justify line-clamp-4  min-h-[3rem]">{experience.description}</p>
                </div>
                <div className="flex items-end justify-between gap-2">
                    <Link
                        href={experience.projectLink}
                        target="_blank"
                        className="transition-all font-urbanist font-bold underline underline-offset-4 text-gray-600 hover:text-black dark:text-white/50 dark:hover:text-white text-md"
                    >
                        Take a Look!
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 font-poppins line-clamp-2">{experience.projectYear}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
