'use client'
import React from 'react'

const ProjectCard = ({ project }: any) => {
  const {
    title,
    technologies,
    summary,
    description,
    image,
    demoLink,
    codeLink,
  } = project

  return (
    <div className='card w-[345px] glass rounded hover:translate-y-[-5px] transition-all shadow'>
      <figure className='object-center object-cover h-[180px]'>
        <img src={image} alt={title} />
      </figure>
      <div className='card-body p-4 min-h-[350px]'>
        <h2 className='card-title'>{title}</h2>
        <span className='text-sm font-semibold'>{technologies}</span>
        <p>{summary}</p>
        <div className='card-actions justify-start'>
          <button
            className='btn btn-ghost text-accent'
            onClick={() => window.open(demoLink, '_ blank')}
          >
            DEMO
          </button>
          <button
            className='btn btn-ghost'
            onClick={() => window.open(codeLink, '_ blank')}
          >
            CODE
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
