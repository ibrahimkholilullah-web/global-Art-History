import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ArtifactCart from '../Page/ArtifactCart';

const AllArtifacts = () => {
    const artifactData = useLoaderData()
    console.log(artifactData)
    return (
        <div>
            <div>
            <label className="input my-4 w-3/5 mx-auto input-bordered flex items-center gap-2">
                   <input type="text" className="grow" placeholder="Search" />
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 16 16"
                     fill="currentColor"
                     className="h-4 w-4 opacity-70">
                     <path
                       fillRule="evenodd"
                       d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                       clipRule="evenodd" />
                   </svg>
                 </label>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    artifactData?.map(artifactCart => <ArtifactCart key={artifactCart._id} card={artifactCart} ></ArtifactCart>)
                }
            </div>
           
        </div>
    );
};

export default AllArtifacts;