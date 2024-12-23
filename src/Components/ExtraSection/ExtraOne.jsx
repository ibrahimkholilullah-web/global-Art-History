import React from 'react';
import extra1 from "../../assets/Image/extra1photo.jpg"
import extra2 from "../../assets/Image/extra2photo.jpg"
import '../../Style/ibrahim.css'
const ExtraOne = () => {
 
    return (
    <div className="bg-beige text-gray-800  p-10 ibrahim">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 relative ibrahim">
            <img
              src={extra1} // Replace with your knight image URL
              alt="Knights"
              className="w-full border-2 p-2 border-[#D98855] h-auto rounded-lg shadow-lg bg-black/25"
            />
            <div className="absolute bottom-5 right-5 w-1/3">
              <img
                
                src={extra2} // Replace with your marching band image URL
                alt="Marching Band"
                className="rounded-lg w-72 shadow-2xl shadow-black "
              />
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
            <h1 className="md:text-4xl font-bold mb-6 text-[#D98855] ibrahim">Historical Reenactment Group</h1>
            <p className="md:text-lg text-sm leading-relaxed text-white ibrahim">
              We specialise in the high Medieval period. Founded in 2005 in and around Manchester, 
              we now have members from all over the UK. Our interests cover the period from the early 
              middle ages and up to the Renaissance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraOne;