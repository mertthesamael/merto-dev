"use client";
import useCreateQueryString from "@/hooks/useQueryString";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FC, useState } from "react";
import { filterOptions } from "./constants";

type MultiButtonFilterProps = {};

const MultiButtonFilter: FC<MultiButtonFilterProps> = ({}) => {
  const router = useRouter();
  const pathname = usePathname();
  const filter: string | null = useSearchParams().get("filter");

  const createQueryString = useCreateQueryString();
  const buttonState = {
    all: 0,
    frontend: 1,
    fullstack: 2,
  }[filter ?? "all"];

  const [activeButton, setActiveButton] = useState<number>(buttonState ?? 0);

  const handleButtonClick = (buttonIndex: number, query: string) => {
    setActiveButton((prev) => buttonIndex);
    router.push(pathname + "?" + createQueryString("filter", query), {
      scroll: false,
    });
  };

  const calculateBackgroundPosition = (desktop: boolean) => {
    if (activeButton !== null) {
      if (desktop) {
        const buttonWidth = 128; // Adjust as per your button size
        const leftPosition = activeButton * buttonWidth + activeButton * 8;
        return `translateX(${leftPosition}px)`;
      }
      const buttonWidth = 104; // Adjust as per your button size
      const leftPosition = activeButton * buttonWidth;
      return `translateX(${leftPosition}px)`;
    }
    return "translateX(0)";
  };

  return (
    <div className="flex md:gap-2 relative border border-black/10 dark:border-white/10   shadow-white/10 p-1 rounded-lg ">
      <div
        style={{ transform: calculateBackgroundPosition(true) }}
        className="hidden md:flex transition-all absolute w-[8rem] h-[2.3rem]  rounded-md bg-black/10  dark:bg-white/10"
      />
      <div
        style={{ transform: calculateBackgroundPosition(false) }}
        className="flex md:hidden transition-all absolute w-[6.5rem] h-[2.3rem]  rounded-md bg-black/10  dark:bg-white/10"
      />
      {filterOptions.map((el, _i) => (
        <button
          key={el.slug}
          onClick={() => handleButtonClick(el.id, el.slug)}
          className="rounded-md px-6  min-w-[6.5rem] md:min-w-[8rem] h-[2.3rem] text-black relative z-10"
        >
          <span
            className={`text-black/80 md:text-base text-sm dark:text-white  font-söhne ${
              activeButton === el.id ? "font-bold" : ""
            }`}
          >
            {el.displayValue}
          </span>
        </button>
      ))}
    </div>
  );
};

export default MultiButtonFilter;
