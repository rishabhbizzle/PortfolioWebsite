import React from 'react'

const Contact = () => {
  return (
    <div className='md:my-48'>
        <div name="contact" className="h-8 lg:h-28">
      </div>
    <div className='w-full h-screen bg-black flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/24e2b075-aa3b-4984-b26c-3c75035fcb07" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#16B308] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or send me a mail</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#16B308] hover:border-[#16B308] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Contact