import React from 'react'

const About = () => {
  return (
    <div>
      <div name="about" className="h-8 lg:h-0">
      </div>
    <div className='w-full h-screen bg-[#1A1A1A] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#FACC15]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Rishabh, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>A self taught programmer from India. I am passionate about building excellent software that improves
              the lives of those around me. My dream company is Spotify. In freetime I learn Japanese language and listen to drake & bieber's music a lot xD</p>  
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default About