import DonateSection from "@/containers/donate-section";
import InfoSection from "@/containers/info-section";
import ProjectsSection from "@/containers/projects-section";
import { ProjectType } from "@/types/ProjectType";
import axios from "axios";
import { getTranslator } from "next-intl/server";
import { Suspense } from "react";

const getProjects = async (filter: string) => {
  const endpoint = process.env.URL_ROOT ?? "http://localhost:3000";
  try {
    const data = await axios.post(endpoint + "/api/projects", {
      sort: filter ? filter : "all",
    });
    return data.data.projects;
  } catch (err) {
    return err;
  }
};

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

  const projects: ProjectType[] = await getProjects(filter);

  return (
    <main className="flex my-10 md:my-20 flex-col items-center gap-[--header-height] pt-[--header-height]">
      <InfoSection welcome={t("welcome")} info={t.raw("info")} />
      <Suspense key={filter} fallback={<h1 className="text-white font-urbanist font-bold text-2xl">Loading Projects..</h1>}>
        <ProjectsSection
          title={t("projects")}
          filter={searchParams.filter}
          projects={projects}
        />
      </Suspense>
      <DonateSection text={t("donate")} />
    </main>
  );
}
