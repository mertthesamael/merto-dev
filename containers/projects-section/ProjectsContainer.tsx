import Card from '@/components/Card/ProjectCard';
import { Projects } from '@prisma/client';
import axios from 'axios';
import React, { FC } from 'react'

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
type ProjectsContainerProps = {
  filter:string
}

const ProjectsContainer: FC<ProjectsContainerProps> = async({ filter }) => {
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