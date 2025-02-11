import React from 'react';
import ex2 from "../../assets/Image/Ex2.avif"
const ExtrapTwo = () => {
    return (
       
            <div className="flex container mx-auto flex-wrap md:my-8 lg:flex-nowrap items-center gap-8 p-2 bg-[#302E2F]  rounded-lg">
             
        
              {/* Content Section */}
              <div className="w-full lg:w-1/2 ">
                <h2 className="text-3xl lg:text-4xl border-l-2 pl-4 lg:w-96 border-[#D98855] font-bold text-white font-style">
                  The Great Museum
                </h2>
                <p className="text-lg text-[#D1AF78] my-1 font-semibold mb-4">
                  Estimated by Romans in 1961
                </p>
                <p className="text-white mb-6">
                  Give us any chance, we’ll take it. Give us any rule, we’ll break it.
                  We’re gonna make our dreams come true. They were four men living all
                  together.
                </p>
                <ul className="space-y-4 text-white font-style">
                  <li className="flex items-start ">
                    <span className="w-6 h-6 flex-shrink-0 rounded-full border-2 border-yellow-500 mr-4"></span>
                    <div>
                      <p className="text-lg font-medium">March 1961</p>
                      <p className="text-[#D98855]">
                        The establishment of our museum, with two professional tourist
                        agents, in a small office in Boston.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 flex-shrink-0 rounded-full border-2 border-yellow-500 mr-4"></span>
                    <div>
                      <p className="text-lg font-medium">June 1998</p>
                      <p className="text-[#D98855]">
                        Last of America's deep space probes. If you have a problem, if
                        no one else can help and if you
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 flex-shrink-0 rounded-full border-2 border-yellow-500 mr-4"></span>
                    <div>
                      <p className="text-lg font-medium">May 2004</p>
                      <p className="text-[#D98855]">
                        They were four men living all together yet they were all alone.
                      </p>
                    </div>
                  </li>
                </ul>
                
              </div>
               {/* Image Section */}
               <div className=" md:w-1/2 mx-auto object-cover">
                <img
                  src={ex2} // Replace with your image URL
                  alt="The Great Museum"
                  className=" shadow-lg w-full object-cover"
                />
              </div>
            </div>
        
        
    );
};

export default ExtrapTwo;