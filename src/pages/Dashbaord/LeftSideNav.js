import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    return (
        <div>
            <NavLink className='btn btn-primary w-full mt-4 mb-4' to='/dashboard/my-orders'>My Orders</NavLink>
            <NavLink className='btn btn-primary w-full  mb-4' to='/dashboard/all-sellers'>All Sellers</NavLink>
            <NavLink className='btn btn-primary w-full mb-4' to='/dashboard/add-product'>My Orders</NavLink>
        </div>
    );
};

export default LeftSideNav;