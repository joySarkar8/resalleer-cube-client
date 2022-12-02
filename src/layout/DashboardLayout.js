import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../pages/Dashbaord/LeftSideNav';

const DashboardLayout = () => {
    return (
        <div className='flex md:flex-row flex-col container m-auto gap-4 mt-8'>
            <div className='md:basis-1/4'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='md:basis-3/4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;



// md:grid-cols-2 lg:grid-cols-3