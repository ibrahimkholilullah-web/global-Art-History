import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ArtifactCart from '../Page/ArtifactCart';

const AllArtifacts = () => {
    const artifactData = useLoaderData()
    console.log(artifactData)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    artifactData?.map(artifactCart => <ArtifactCart key={artifactCart._id} card={artifactCart} ></ArtifactCart>)
                }
            </div>
           
        </div>
    );
};

export default AllArtifacts;