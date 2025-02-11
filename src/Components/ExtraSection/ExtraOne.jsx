import React from 'react';
import extra1 from "../../assets/Update Photo/Extra1 (1).jpg"
import extra2 from "../../assets/Update Photo/Extra1 (2).jpg"
const ExtraOne = () => {
 
    return (
    <div className="bg-beige text-gray-800  p-10 mt-10 ibrahim">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 relative ibrahim">
            <img
              src={extra1} // Replace with your knight image URL
              alt="Knights"
              className="w-full h-auto  shadow-lg bg-black/25"
            />
            <div className="absolute bottom-5 right-5 w-1/3">
              <img
                
                src={extra2} // Replace with your marching band image URL
                alt="Marching Band"
                className="rounded-lg w-72 border shadow-2xl shadow-black "
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-white   mt-10 lg:mt-0 lg:ml-10">
          <p className=' w-20 border-t-2 pt-2 font-style border-[#D98855]'>About Us</p>
            <h1 className="md:text-4xl font-bold mb-6 text-[#D98855] ibrahim my-4">Historical Reenactment Group</h1>
            <p className="md:text-lg text-sm  text-brown-200 ibrahim font-style">
              We specialise in the high Medieval period. Founded in 2005 in and around Manchester, 
              we now have members from all over the UK. Our interests cover the period from the early 
              middle ages and up to the Renaissance.
            </p>
            <p className=' border-r-2 border-b-2 w-28 pb-2 border-[#D98855] font-style my-4 '>17 July 1890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraOne;