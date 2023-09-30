import Card from '@/components/Card';
import React, { FC } from 'react'
import axios from 'axios'
import { ProjectType } from '@/types/ProjectType';

interface ProjectsSectionProps {
  title:string
}
const getProjects = async() => {
  const endpoint = process.env.URL_ROOT ?? "http://localhost:3000" ;
  try{
    const data = await axios(endpoint+'/api/projects')
    return data.data.projects
  }catch(err){
    return err
  }
}
const ProjectsSection: FC<ProjectsSectionProps> = async({ title }) => {
  const data : ProjectType[] = await getProjects()
  
  return (
    <section className='w-full flex justify-center'>
     <div className="w-full max-w-screen-lg flex flex-col gap-5 mx-8">
        <div>
            <h1 className="text-5xl text-black dark:text-white font-söhne font-extrabold">{title}</h1>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center gap-4 md:justify-between">
          {data.map((project) => <Card key={project.name} project={project}/>)}
        </div>
     </div>
    </section>
  )
}

export default ProjectsSection;