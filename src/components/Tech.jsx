import React from 'react'
import { BallCanvas, ThreeDFace } from './canvas'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'

const Tech = () => {
  return (
    <div className='hidden md:block'>
      <div className='mx-auto'>
    <ThreeDFace />
    </div>
    <div style={{position:'absolute', margin:'-37rem 6rem'}}
     >
    <p className={styles.heroSubText}>Technologies</p>
      <h4 className={styles.heroHeadText}>Tech</h4>
      <div className='md:mt-12 md:p-10  flex flex-row flex-wrap justify-center md:gap-12'>
      {technologies.map((technology) => (
        <div className=' w-5 h-5 md:w-28 md:h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      </div>
    </div>
    </div>
  )
}

export default Tech
