import React, { FC, Suspense } from "react";
import MultiButtonFilter from "@/components/MultiButtonFilter";
import ArticlesContainer from "./ArticlesContainer";



interface ArticlesSectionProps {
  title: string;
}



const ArticlesSection: FC<ArticlesSectionProps> = ({ title }) => {

  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-screen-lg flex flex-col gap-5 mx-8">
        <div>
          <h1 className="text-5xl text-black dark:text-white font-söhne font-extrabold">
            {title}
          </h1>
        </div>
        <div
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
          }}
          className="-mx-4 flex lg:grid flex-wrap justify-center md:gap-[1.5rem] gap-4 md:justify-between">
          <Suspense fallback={Array(6).fill(0).map((el, _i) => (
            <div key={_i} className="animate-pulse w-full md:w-[420px] h-[10rem]  rounded-lg bg-black/10 dark:bg-white/10" />
          ))}>
            <ArticlesContainer />
          </Suspense>
          </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
