import React from 'react';
import PrivateRoute from '../../Routes/PrivateRoute';
import Advertise from './Advertise/Advertise';
import Banner from './Banner';
import CategoryItems from './Category/CategoryItems';

const Home = () => {
    return (
        <div className=''>
          <Banner></Banner>
          <CategoryItems></CategoryItems>
          <PrivateRoute><Advertise></Advertise></PrivateRoute>
        </div>
    );
};

export default Home;