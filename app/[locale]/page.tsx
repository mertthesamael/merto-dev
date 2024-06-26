import ArticlesSection from "@/containers/articles-section";
import DonateSection from "@/containers/donate-section";
import ExperienceSection from "@/containers/experience-section";
import InfoSection from "@/containers/info-section";
import ProjectsSection from "@/containers/projects-section";
import { getTranslator } from "next-intl/server";


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
        <ExperienceSection title={t('experience')}/>
        <ProjectsSection
          title={t("projects")}
          filter={filter}
        />
        <ArticlesSection title={t("articles")} /> 
      <DonateSection text={t("donate")} />
    </main>
  );
}
