import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';

const ProjectCard = ({index, name, description, tags, image, sourceCode_link}) => {
  return(
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
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

        </div>



      </Tilt>
    </motion.div>
  )

}





const Works = () => {
  return (
    <>
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
                  className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Soluta voluptatem at voluptatibus ipsum excepturi voluptate 
          nulla eligendi facere? Quis recusandae facere cupiditate fuga 
          quo alias asperiores eaque provident autem excepturi!

          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nobis, sit! Hic accusamus soluta eos? Similique eius beatae, 
          saepe molestias minus impedit! Eveniet necessitatibus dolore 
          quaerat esse velit numquam tempore similique?

        </motion.p>
      </div>

      {/* Project Cards for the projects */}
      <div className='mt-20 flex flex-wrap gap-7'>

        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`}
          {...project}
          index={index}
          />

        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "");