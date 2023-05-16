import React from 'react';
import logoBrand  from '../../assets/logos/Group 1329.png'
import { NavLink } from 'react-router-dom';
const HeaderTwo = () => {
    return (
        <div className='container'>
            <NavLink to="/">
                <img className='w-40 h-12 object-fill mx-auto my-11' src={logoBrand} alt="" />
            </NavLink>
        </div>
    );
};

export default HeaderTwo;