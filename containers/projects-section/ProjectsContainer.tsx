import Card from '@/components/Card/ProjectCard';
import { Projects } from '@prisma/client';
import React, { FC } from 'react'

const getProjects = async (filter: string) => {
  const endpoint = process.env.URL_ROOT ?? "http://localhost:3000";
  try {
    const request = await fetch(endpoint + "/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sort: filter ? filter : "all",
      })
    });
    const response = await request.json()


    return response.projects;
  } catch (err) {
    return err;
  }
};
type ProjectsContainerProps = {
  filter: string
}

const ProjectsContainer: FC<ProjectsContainerProps> = async ({ filter }) => {
  const projects: Projects[] = await getProjects(filter);
  const projectsArray = [...projects].reverse()
  return (
    <>
      {projectsArray.map((project, _i) => (
        <Card key={_i} project={project} />
      ))}
    </>
  )
}

export default ProjectsContainer;