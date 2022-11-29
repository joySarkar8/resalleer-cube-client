import React, { useEffect, useState } from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {

    const [advertiseData, setAdvertiseData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/advertise?advertise=advertise')
            .then(res => res.json())
            .then(data => setAdvertiseData(data.data))
    }, []);

    console.log(advertiseData);

    return (
        <div className='container m-auto'>
            <h1 className='text-6xl text-center mb-8'>Advertise</h1>
            <div className='flex justify-center flex-wrap mb-5' style={{ gap: '40px' }}>
                {
                    advertiseData?.map(advertiseItem => <AdvertiseCard
                        key={advertiseItem._id}
                        advertiseItem={advertiseItem}
                    ></AdvertiseCard>)
                }
            </div>
        </div>
    );
};

export default Advertise;