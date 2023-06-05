import React from 'react';
import { Helmet } from 'react-helmet-async';

const DashBoard = () => {
    return (
        <div>
             <Helmet>
            <title>Volunteer Network | Dashboard</title>
        </Helmet>
            <h1 className='text-5xl font-bold p-5'>WelCome To Volunteer Network Admin Panel </h1>
        </div>
    );
};

export default DashBoard;