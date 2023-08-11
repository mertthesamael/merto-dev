import Card from '@/components/Card';
import React, { FC } from 'react'
import axios from 'axios'
interface ProjectsSectionProps {
  
}
const getProjects = async() => {
  const endpoint = process.env.URL_ROOT ?? "http://localhost:3000" ;
  try{

    const data = await axios(endpoint+'/api/projects')
    return data.data
  }catch(err){
    return err
  }
}
const ProjectsSection: FC<ProjectsSectionProps> = async({  }) => {
  const data = await getProjects()
  console.log(data)

 
  return (
    <section className='w-full flex justify-center'>
     <div className="w-full max-w-screen-lg flex flex-col gap-5">
        <div>
            <h1 className="text-5xl text-black dark:text-white font-söhne font-extrabold">Projects</h1>
        </div>
        <div className="-mx-4">
            <Card></Card>
        </div>
     </div>
    </section>
  )
}

export default ProjectsSection;