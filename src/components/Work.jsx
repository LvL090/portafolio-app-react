import React from 'react';
import Trivial from '../assets/trivial.png';
import Drop from '../assets/drop.png';
import Calc from '../assets/calculadora.jpg';
import Test from '../assets/test.png'
import Login from '../assets/login.png'
import ImageShare from '../assets/ImageShare.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] lg:pt-40'>
      <div className='max-w-[1000px] mx-auto p-20 flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4  text-gray-300 border-pink-600'>
            Trabajos
          </p>
          <p className='py-6'>Estos són algunos de los trabajos que tengo realizados,tanto individuales como en equipo,espero que te gusten tanto como a mi! </p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div
            style={{ backgroundImage: `url(${ImageShare})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Native (Expo)
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/LvL090/ImageShare' target='_blanck'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Trivial})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Vue JS (Responsive)
              </span>
              <div className='pt-8 text-center'>
                <a href='https://etrivial.netlify.app/' target='_blanck'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/LvL090/eTrivial' target='_blanck'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Drop})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold  text-white tracking-wider'>
                React  (Escritorio)
              </span>
              <div className='pt-8 text-center'>
                <a href='https://drop-zone-amber.vercel.app/' target='_blanck'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/LvL090/Drop-zone' target='_blanck'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Calc})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React  (Responsive)
              </span>
              <div className='pt-8 text-center'>
                <a href='https://lvl090.github.io/CalculatorReact/' target='_blanck'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/LvL090/CalculatorReact' target='_blanck'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
              </div>
            </div>
            
          </div>
          <div
            style={{ backgroundImage: `url(${Test})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Node.js  (Habits+)
              </span>
              <div className='pt-8 text-center' target='_blanck'>
                <a href='https://github.com/LvL090/Habits-Back-End'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
              </div>
            </div>
            
          </div>
          <div
            style={{ backgroundImage: `url(${Login})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React  (Habits+)
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/LvL090/Habits-Front-End' target='_blanck'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
