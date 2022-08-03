import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] pb-40 lg:pt-40'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hola, mi nombre es</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Daniel Calvo
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Desarrollador Full Stack.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Dando mis primeros pasos dentro de la industria de desarrollo de aplicaciones web y diseño, te invito a que me conozcas un poco más.
        </p>
        <div>
          <button className='text-white group border-2  px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            Ver trabajos
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
