import { motion } from 'framer-motion';
import { styles } from '../style';
import { ThreeDFace } from './canvas';
import { ai } from '../assets';


const Hero = () => {
  return (
    <section
   
    className='relative w-full h-screen mx-auto opacity-70'>
    <div className={`${styles.paddingX} absolute inset-0 top-[150px] max-w-7xl mx-auto flex flex-row
    items-start gap-5`}>
     <div className='flex flex-col justify-center items-center '>
      <div className='w-5 h-5 rounded-full bg-white' />
      <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-white to-violet'/>
     </div>
     <div className='absolute z-10 ml-10'>
      <h1 className={`${styles.heroHeadText} `}>Hi, I'm <span className='text-gold'>Indrayani</span></h1>
     <p className={`${styles.heroSubText} mt-2 text-white-100`}>
      I develop 3D visuals, user <br className='sm:block hidden'/> interfaces and web applications
     </p>
    
     
     </div>
     
    </div>
    
    <div
    className='hidden lg:block rounded-full overflow-hidden'
     style={{ margin:'4rem 42rem',width:'50%', height:'89vh'}}>
    
    <img className=' opacity-60 rounded-full w-18 h-full transform scale-125 hover:scale-150 cursor-pointer transition-transform duration-300' 
     src={ai}/>
    </div>
    </section>
  );
};

export default Hero;
