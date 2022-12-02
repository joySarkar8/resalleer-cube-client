import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../shared/Loading';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    const { data: advertiseData = [], isLoading } = useQuery({
        queryKey: ['advertise'],
        queryFn: () => fetch('http://localhost:5000/advertise?advertise=advertise')
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loading></Loading>
    };

    return (
        <div className=''>
            {advertiseData?.data?.length ?
                <div className='container m-auto mt-12 bg-gray-200 p-5 mb-6'>
                    <h1 className='text-3xl md:text-5xl mt-6 text-center underline mb-8'>Advertise</h1>
                    <div className='flex justify-center flex-wrap mb-5' style={{ gap: '40px' }}>
                        {
                            advertiseData?.data?.map(advertiseItem => <AdvertiseCard
                                key={advertiseItem._id}
                                advertiseItem={advertiseItem}
                            ></AdvertiseCard>)
                        }
                    </div>
                </div>
                :
                <></>
            }
        </div>
    );
};

export default Advertise;