import React from 'react'

const Contact = () => {
  return (
    <div name = 'contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl flex justify-center font-bold inline border-b-4 border-pink-600 text-gray-300'>Contacto</p>
                <p className=' pt-4 text-4xl flex justify-center text-gray-300'>657424664</p> 
            </div>
            <a href='mailto:calvod879@gmail.com' className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
            Conectemos!
            </a>
        </form>
    </div>
  )
}

export default Contact