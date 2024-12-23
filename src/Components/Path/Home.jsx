import React from 'react';
import Banner from '../Page/Banner';
import ExtraOne from '../ExtraSection/ExtraOne';
import FeaturedArtifacts from '../Page/FeaturedArtifacts';
import { Helmet } from 'react-helmet-async';
import ExtrapTwo from '../ExtraSection/ExtrapTwo';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
             <Helmet>
                <title>Home - G. art H.</title>
             </Helmet>
            <Banner></Banner>
            <ExtraOne></ExtraOne>
            <FeaturedArtifacts></FeaturedArtifacts>
            <ExtrapTwo></ExtrapTwo>
        </div>
    );
};

export default Home;