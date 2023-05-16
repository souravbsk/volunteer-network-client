import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderTwo from '../Components/HeaderTwo/HeaderTwo';

const CreateUser = () => {
    return (
        <div>
            <HeaderTwo></HeaderTwo>
            <Outlet></Outlet>
        </div>
    );
};

export default CreateUser;