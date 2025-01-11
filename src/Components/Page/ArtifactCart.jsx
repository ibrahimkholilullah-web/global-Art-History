import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { AiFillLike } from 'react-icons/ai';
import { FaAngleDoubleRight } from 'react-icons/fa';

const ArtifactCart = ({card}) => {
    const {
        artifactName,
        artifactImage,
        artifactType,
        historicalContext,
        createdAt,discoveredAt,
        discoveredBy,presentLocation,name,email,
        like_count,
        _id
    } = card || {}
    return (
		<div>
			<div
		className="relative overflow-hidden rounded-tr-[80px]  shadow-lg bg-white transform hover:scale-105 transition duration-300"
	  >
		<div className=" w-full h-72">
  {/* Image */}
  <img
    src={artifactImage}
    className="w-full h-72 object-cover"
    alt="Artifact"
  />
  
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

		{/* Date Badge */}
		<div className="absolute top-10 rounded-tr-3xl border-2 border-[#D98855] bg-black/60 left-1 text-white p-3 text-center">
		<p className="text-xl font-style">{artifactName}</p>
		</div>

		{/* Content */}
		<div className="p-6 absolute border top-1/2 bottom-3 bg-black/80 w-9/12 mx-auto left-10 rounded-tr-[40px]">
		  <h4 className="text-sm text-brown-300 font-style">{historicalContext.slice(0,45)}...</h4>
		  <div className='flex justify-between items-center'>
		  <h3 className="text-xl my-2 font-semibold text-white">
			{artifactType}{" "}
			{/* <span className="text-[#c28d55] text-2xl">&raquo;</span> */}
		  </h3>
		  <button type="button" className="flex rounded-md text-[#D1AF78] items-center space-x-1.5">
						  <AiFillLike size={20}  />
		  
						<span>{like_count}</span>
					</button>
		  </div>
		</div>

		{/* Find More Link */}
		
	  </div>
	   <div className='w-full bg-blue-gray-100 py-2 text-right pr-10'>
	   <Link to={`/viewDitails/${_id}`} className=' inline-flex items-center gap-5 text-brown-700 font-body '>More Ditails <FaAngleDoubleRight />
	   </Link>
	   </div>
		</div>
    //     <motion.div
	// 	whileHover={{ scale: [null, 1.03, 1.03] }}
    //     transition={{ duration: 0.3 }}
	// 	to={`/viewDitails/${_id}`} className="flex text-white ibrahim border-2 border-[#D98855] flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	// <div className="flex space-x-4">
	// 	<img alt="" src={artifactImage} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
	// 	<div className="flex flex-col space-y-1">
	// 		<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{artifactName}</a>
	// 		<span className="text-xs dark:text-gray-600">Artifact Type : {artifactType}</span>
	// 	</div>
	// </div>
	// <div>
	// 	<img src={artifactImage} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
	// 	<h2 className="mb-1 md:text-xl font-semibold">{historicalContext}</h2>
	// </div>
	// <div className="flex flex-wrap justify-between">
		
	// 	<div className="flex items-center gap-20 md:gap-32 justify-between">
			
	// 		<div>
	// 		<button type="button" className="flex items-center p-1 space-x-1.5">
	// 			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of likes" className=" h-4 fill-current dark:text-violet-600">
	// 				<path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
	// 				<path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
	// 			</svg>
	// 			<span>{like_count}</span>
	// 		</button>
	// 		</div>
    //        <div className='text-right '>
	// 	   <Link to={`/viewDitails/${_id}`} type='button'>
    //             View Ditails
    //         </Link>
	// 	   </div>
	// 	</div>
		
	// </div>
    //        </motion.div>
    );
};

export default ArtifactCart;