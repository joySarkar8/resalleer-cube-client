import React from 'react';
import Advertise from './Advertise/Advertise';
import Banner from './Banner';
import CategoryItems from './Category/CategoryItems';

const Home = () => {
    return (
        <div className=''>
          <Banner></Banner>
          <CategoryItems></CategoryItems>
          <Advertise></Advertise>
        </div>
    );
};

export default Home;