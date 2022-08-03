import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 pb-40 lg:pt-40 '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Sobre mi
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='  sm:text-right text-4xl font-bold '>
              <p>Hola!. Soy Dani, encantado de conocerte.</p>
            </div>
            <div>
                <p className='break-words pb-80 '>
                  Nacido en Reus,tengo 30 años y desde muy joven he estado
                  en contacto con el mundo de la informática. Como hobby,
                  entre otros, tengo el proyecto en curso de creación de un
                  estudio de producción y grabación musical. <br />
                  <br/>
                  Este año, finalmente he dado el cambio a nivel profesional
                  realizando un Bootcamp full-stack (850h). <br/> 
                   Asimismo, también he completado la
                  certificación de TI de Google (200h) y actualmente estoy
                  cursando certificado de Diseño de Experiencia del Usuario
                  (UX) de Google (200h)
            </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
