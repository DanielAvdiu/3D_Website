import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';

const ProjectCard = ({props}) => {
  const {index, name, description, tags, image, source_code_link} = props;
  return(
    <motion.div
        onClick={()=>window.open(source_code_link, "_blank")}
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='cursor-pointer'
    >
      <Tilt 
        options={{
          max:45,
          scale:1,
          speed: 450
        }}
        
        className='bg-slate-600 p-5 rounded-2xl sm:w-[360px] w-full'
      >

        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} 
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>

            <div 
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt="github"
                    className='w-1/2 h-1/2 object-contain'
              />
            </div>

          </div>
        </div>

        {/* For the name and the description of the project */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] text-justify'>{description}</p>
        </div>

        {/* For the tags of the project */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )

}


const Works = () => {
  return (
    <>
      <div id='projects'>

      </div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Projects
        </p>

        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)}
                  className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
        >
          Below are some of the projects I have worked on. They range from web development
          to machine learning and data science. The are several programming languages used in these
          projects because I am always opened to learning new technologies.

          In order to access the source code of the projects, click on the github icon on the top right.

        </motion.p>
      </div>

      {/* Project Cards for the projects */}
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 

          key={`project-${index}`}
          props={project}
          index={index}
          />

        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "");