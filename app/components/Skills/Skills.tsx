import React from 'react'
import { mySkills } from '@/app/constants/constants'

const Skills = () => {
  return (
    <section id='skills' className='px-4 lg:px-0 mb-16 pt-20'>
      <h2 className='text-accent text-center text-6xl mb-16 heading'>
        My Skills
      </h2>
      <div className='grid place-items-center gap-6 sm:gap-20 grid-cols-3 sm:grid-cols-4 md:grid-cols-6'>
        {mySkills.map(skill => (
          <div
            className='tooltip'
            data-tip={`${skill.skill}`}
            key={skill.skill}
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
