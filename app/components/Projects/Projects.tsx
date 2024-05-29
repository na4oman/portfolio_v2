import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import { projects } from '@/app/constants/constants'

const Projects = () => {
  return (
    <section className='mb-16 px-4 lg:px-0 pt-20' id='work'>
      <h2 className='text-accent text-center text-6xl mb-8 heading'>
        My Projects
      </h2>
      <div className='grid gap-8 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
