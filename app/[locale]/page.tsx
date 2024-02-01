import ArticleSection from "@/containers/article-section";
import ArticlesSection from "@/containers/articles-section";
import DonateSection from "@/containers/donate-section";
import InfoSection from "@/containers/info-section";
import ProjectsSection from "@/containers/projects-section";
import { ProjectType } from "@/types/ProjectType";
import axios from "axios";
import { getTranslator } from "next-intl/server";
import { Suspense } from "react";


export default async function Home({
  params: { locale },
  searchParams,
}: {
  params: any;
  searchParams: { [key: string]: string };
}) {
  const t = await getTranslator(locale, "Index");

  const filter =
    typeof searchParams.filter === "string" ? searchParams.filter : "all";


  return (
    <main className="flex my-10 md:my-20 flex-col items-center gap-[--header-height] pt-[--header-height]">
      <InfoSection welcome={t("welcome")} info={t.raw("info")} />
        {/* <ArticlesSection title={t("articles")} /> */}
        <ProjectsSection
          title={t("projects")}
          filter={filter}
        />
      <DonateSection text={t("donate")} />
    </main>
  );
}
