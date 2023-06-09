import React, { useState } from 'react';
import AllEvents from '../AllEvents/AllEvents';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Volunteer Network | Home</title>
        </Helmet>
        <div className='h-screen bannerBg bg-no-repeat w-full md:bg-contain bg-top'>
            <div className='container pt-48'>
                <AllEvents></AllEvents>
            </div>
        </div>
        </>
    );
};

export default Home;