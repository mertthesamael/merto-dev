"use client";
import Link from "next-intl/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface HeaderButtonProps {
  variant: "language" | "donate" | "theme" | "calendar";
  lang: string;
  icon?: JSX.Element;
}

const HeaderButton: FC<HeaderButtonProps> = ({ variant, lang, icon }) => {
  const { setTheme, theme } = useTheme();
  const router = useRouter()
  if (variant === "language") {
    return (
      <Link
        aria-label='Header Navigation'
        href={"/"}
        locale={lang === "en" ? "tr" : "en"}
        className="rounded-full w-11 h-11 flex justify-center p-2 border-2 border-stone-950 cursor-pointer dark:border-white"
      >
        <h2 className="text-black dark:text-white font-söhne">
          {lang.toUpperCase()}
        </h2>
      </Link>
    );
  }

  const callback = {
    theme: () => (theme === "dark" ? setTheme("light") : setTheme("dark")),
    donate:() => router.push('#donate'),
    calendar:() => window.open("https://cal.com/merto/30min", '_blank')
  }[variant];
  return (
    <button  onClick={callback} aria-label='Header Button' className="rounded-full h-11 w-11  p-2 border-2 border-stone-950 cursor-pointer dark:border-white">
      {icon}
    </button>
  );
};

export default HeaderButton;
