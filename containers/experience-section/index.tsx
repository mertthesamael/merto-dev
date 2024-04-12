import React, { FC, Suspense } from 'react'
import ExperienceContainer from './ExperienceContainer'

type ExperienceSectionProps = {
 title:string 
}

const ExperienceSection: FC<ExperienceSectionProps> = ({ title }) => {
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
          gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))",
        }}
        className="-mx-4 flex lg:grid flex-wrap justify-center md:gap-[1.12rem] gap-4 md:justify-between">
        <Suspense fallback={Array(6).fill(0).map((el, _i) => (
          <div key={_i} className="animate-pulse w-full md:w-[30rem] h-[22rem]  rounded-lg bg-black/10 dark:bg-white/10" />
        ))}>
          <ExperienceContainer  />
        </Suspense>
        </div>
    </div>
  </section>
  )
}

export default ExperienceSection;