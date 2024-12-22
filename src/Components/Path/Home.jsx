import React from 'react';
import Banner from '../Page/Banner';
import ExtraOne from '../ExtraSection/ExtraOne';
import FeaturedArtifacts from '../Page/FeaturedArtifacts';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <ExtraOne></ExtraOne>
            <FeaturedArtifacts></FeaturedArtifacts>
        </div>
    );
};

export default Home;