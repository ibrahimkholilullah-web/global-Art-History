import React from "react";
import author from "../../assets/Image/WhatsApp Image 2024-08-25 at 11.35.03 AM.jpeg";
import { FaGithub } from "react-icons/fa";

const ExtraFeatures = () => {
  return (
    <div className="flex justify-center my-24 items-center py-10 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="w-full max-w-2xl p-8  rounded-lg shadow-xl text-center transform hover:scale-105 transition duration-300">
        {/* Author Image */}
        <div className="flex justify-center mb-6">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#FDD835]">
            <img
              src={author}
              alt="Author"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Author Info */}
        <h3 className="text-2xl font-bold text-[#BC794E]">
          Ibrahim Kholilullah
        </h3>
        <p className="text-[#FDD835] mt-1 mb-4 text-sm font-style">Global Art History</p>
        <p className="text-gray-300 text-sm leading-relaxed font-style">
          "I am a passionate web developer skilled in React.js, MongoDB, HTML,
          CSS, JavaScript, and Firebase. I build responsive, user-friendly
          websites and applications with dynamic interfaces and secure backends.
          My expertise in full-stack development allows me to deliver scalable,
          innovative solutions tailored to meet client needs and modern
          standards."
        </p>

        {/* Divider */}
        <div className="my-6 flex justify-center items-center gap-2">
          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
          <span className="w-3 h-3 bg-[#FDD835] rounded-full"></span>
          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
        </div>

        {/* Project Links */}
        <h4 className="text-white text-lg font-semibold mb-4">My Best Projects</h4>
        <div className="flex flex-col md:flex-row md:items-center font-style justify-center space-y-3 md:space-y-0 md:space-x-4">
          <a
            className="flex items-center gap-2 text-white hover:text-[#BC794E] transition duration-300"
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} />
            <span className="text-sm">My GitHub</span>
          </a>
          <a
            href="https://b10-a10-projects.firebaseapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#BC794E] text-white px-4 py-2 rounded-md shadow-lg hover:bg-[#9d6b42] transition duration-300 text-sm"
          >
            Project 1
          </a>
          <a
            href="https://b10-a9-projects.firebaseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#BC794E] text-white px-4 py-2 rounded-md shadow-lg hover:bg-[#9d6b42] transition duration-300 text-sm"
          >
            Project 2
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExtraFeatures;
