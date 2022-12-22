import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../shared/Loading';

const AllSellers = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: () => fetch(`https://reseller-cube-server.vercel.app/allseller`)
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loading></Loading>
    };

    // console.log(sellers);

    const handleVerify = id => {
        const sellerVerify = {
            verify: true
        };

        fetch(`https://reseller-cube-server.vercel.app/update-seller/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sellerVerify)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Verify Successfull');
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })
    };

    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Continue to DELETE this seller pls click ok')
        if (proceed) {
            fetch(`https://reseller-cube-server.vercel.app/seller/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.data.deletedCount > 0) {
                        refetch();
                        toast.success('Deleted successfull')
                    }
                })
        }
    };

    return (
        <div className='min-h-[calc(100vh-320px)]'>
            {/*  <h2 className='text-3xl text-center mb-4 mt-4'>All sellers</h2> */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            sellers?.data.map((seller, i) =>
                                <tr
                                    key={i}

                                >
                                    <td>{i + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">{seller?.name}</div>
                                                {/* <div className="text-sm opacity-50">United States</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{seller?.email}</td>
                                    <td>{seller?.verify ? <button className="btn btn-warning btn-xs">Verified</button> :
                                        <button onClick={() => handleVerify(seller.email)} className="btn btn-primary btn-xs">Verif</button>
                                    }
                                    </td>
                                    <td><button onClick={() => handleDelete(seller._id)} className="btn btn-secondary text-white btn-xs">Delete</button></td>

                                </tr>
                            )
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllSellers;




