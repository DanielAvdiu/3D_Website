import React from 'react';
import { Tilt } from 'react-tilt';
// Used to tilt the card
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-[250px] h-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Who am I?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='justify-center items-center mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        I am an incredibly driven individual actively seeking fresh opportunities in the realm of 
        software engineering. With a robust skill set encompassing Java, Python, and JavaScript, I am 
        well-equipped to tackle a wide array of technical challenges. My motivation is rooted in my 
        unwavering passion for software development, which fuels my continuous growth and adaptability 
        in this ever-evolving field. I am excited to bring my expertise to new projects, collaborate 
        with diverse teams, and contribute to innovative solutions that push the boundaries of technology.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-12 justify-evenly items-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");