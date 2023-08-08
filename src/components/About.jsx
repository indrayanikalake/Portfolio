import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({title, index, icon}) =>{
  return(
   <Tilt className='xs:w-[250px] w-full'>
     <motion.div 
     variants={fadeIn("right","spring",0.5*index, 0.75)}
     className='w-full  p-[1px] rounded-[20px]  shadow-card'
     style={{
      background: 'linear-gradient(to bottom, white, goldenrod)'
    }}>
      <div options={{max:45,scale:1,speed:450}}
      className=' rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title}
        className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
     </motion.div>
   </Tilt>    
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.heroHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
     I'm a skilled Frontend Developer worked in javascript and used the frameworks like React, Three.js. 
     I'm a quick learner and collaborate closely with people to create efficient, scalable and user-friendly 
     solutions that solve real-world problems.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
     {services.map((service, index) =>(
      <ServiceCard key={service.title} title={service.title} index={index} icon={service.icon} {...services} />
     ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")
