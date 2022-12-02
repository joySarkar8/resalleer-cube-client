import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../shared/Loading';

const AllBuyers = () => {
    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: () => fetch(`https://reseller-cube-server.vercel.app/allbuyer`)
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loading></Loading>
    };

    // console.log(sellers);

    const handleMakeSeller = id => {
        const makeSeller = {
            role: 'seller'
        };

        fetch(`https://reseller-cube-server.vercel.app/make-seller/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(makeSeller)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Successfully Updated');
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })
    };

    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Continue to DELETE this user pls click ok')
        if (proceed) {
            fetch(`https://reseller-cube-server.vercel.app/buyer/${id}`, {
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
        <div>
            {/*  <h2 className='text-3xl text-center mb-4 mt-4'>All sellers</h2> */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Seller</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            buyers?.data.map((buyer, i) =>
                                <tr
                                    key={i}

                                >
                                    <td>{i + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">{buyer?.name}</div>
                                                {/* <div className="text-sm opacity-50">United States</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{buyer?.email}</td>
                                    <td>{<button onClick={() => handleMakeSeller(buyer._id)} className="btn btn-primary btn-xs">Make Seller</button>}
                                    </td>
                                    <td><button onClick={() => handleDelete(buyer._id)} className="btn btn-secondary text-white btn-xs">Delete</button></td>

                                </tr>
                            )
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllBuyers;