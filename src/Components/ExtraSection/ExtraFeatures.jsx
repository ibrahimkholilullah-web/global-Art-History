import React from 'react';
import author from "../../assets/Image/WhatsApp Image 2024-08-25 at 11.35.03 AM.jpeg"
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ExtraFeatures = () => {
    return (
        <div className="flex ibrahim justify-center items-center py-8 border bg-[#302E2F]">
      <div className="w-3/4  p-6 bg-[#BC794E] rounded-lg shadow-lg text-center">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-gray-200 overflow-hidden">
            <img
              src={author}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Ibrahim Kholilullah</h3>
          <p className=" text-[#FDD835]">Global Art History</p>
        </div>
        <div className="mt-4">
          <p className="text-white  text-sm">
          "I am a passionate web developer skilled in React.js, MongoDB, HTML, CSS, JavaScript, and Firebase. I build responsive, user-friendly websites and applications with dynamic interfaces and secure backends. My expertise in full-stack development allows me to deliver scalable, innovative solutions tailored to meet client needs and modern standards."
          </p>
        </div>
        <div className="mt-4 flex justify-center items-center space-x-2 border-b-2 pb-2">
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>
        <div>
            <h1 className='my-1'>My Best Projects</h1>
            <div className='flex items-center justify-between mt-3'>
            <a className=' inline-flex items-center gap-2 ' href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30}/><span className='text-sm'> My GitHub</span>
             </a>
                <a href='https://b10-a10-projects.firebaseapp.com' target='_blank' className=' border px-2 py-1 rounded-md text-[10px] bg-[#302E2F] text-white'>Projects 1</a>
                <a href='https://b10-a9-projects.firebaseapp.com/' target='_blank'  className=' border px-2 py-1  rounded-md text-[10px] bg-[#302E2F] text-white'>Projects 2 </a>
            </div>
        </div>
      </div>
    </div>
    );
};

export default ExtraFeatures;