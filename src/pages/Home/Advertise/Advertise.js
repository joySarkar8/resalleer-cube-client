import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../shared/Loading';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    const { user } = useContext(AuthContext);
    // const [advertiseData, setAdvertiseData] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/advertise?advertise=advertise')
    //         .then(res => res.json())
    //         .then(data => setAdvertiseData(data.data))
    // }, []);


    const { data: advertiseData = [], isLoading, refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: () => fetch('http://localhost:5000/advertise?advertise=advertise')
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loading></Loading>
    };

    // console.log(advertiseData.data);

    return (
        <div>
            {advertiseData?.data?.length ?
                <div className='container m-auto'>
                    <h1 className='text-6xl text-center mb-8'>Advertise</h1>
                    <div className='flex justify-center flex-wrap mb-5' style={{ gap: '40px' }}>
                        {
                            advertiseData?.data?.map(advertiseItem => <AdvertiseCard
                                key={advertiseItem._id}
                                advertiseItem={advertiseItem}
                                user={user}
                                refetch={refetch}
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