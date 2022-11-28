import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);
    const { email } = user;

    useEffect(() => {
        fetch(`http://localhost:5000/myorders?email=${email}`)
            .then(res => res.json())
            .then(data => setOrders(data.data))
    }, [email])
    console.log(orders);
    return (


        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Order Detail</th>
                        <th>Price</th>
                        <th>Seller Name</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        orders.map((order, i) =>
                            <tr
                            key={i}
                            >
                                <td>{i + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={order?.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{order?.model}</div>
                                            <div className="text-sm opacity-50">{order?.meeting_location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {order.resalePrice} /-
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Mob: {order?.phone}</span>
                                </td>
                                <td>{order?.sellerName}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>


    );
};

export default MyOrders;