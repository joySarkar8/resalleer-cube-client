import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../pages/Dashbaord/LeftSideNav';

const DashboardLayout = () => {
    return (
        <div className='grid gap-4 grid-cols-4'>
            <LeftSideNav></LeftSideNav>
            <div className='col-span-3'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;



// md:grid-cols-2 lg:grid-cols-3