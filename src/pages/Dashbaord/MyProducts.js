import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../shared/Loading';

const MyProducts = () => {
    // const [products, setProducts] = useState([]);
    const { user } = useContext(AuthContext);
    const { email } = user;

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch(`http://localhost:5000/myproduct?email=${email}`)
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loading></Loading>
    };

    const handleAdvertise = (id) => {

        const add = {
            advertise: 'advertise'
        }


        fetch(`http://localhost:5000/update-product/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Product Added');
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })
    };

    const handleDelete = (id) => {
        // console.log(id);
    }

    return (
        <div>
            <h2 className='text-3xl text-center mt-4 mb-4'>My products</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Meeting Location</th>
                            <th>Resale Price</th>
                            <th>Addvertise</th>
                            <th>Status</th>
                            <th></th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            products?.data.map((product, i) =>
                                <tr
                                    key={i}

                                >
                                    <td>{i + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product?.model}</div>
                                                {/* <div className="text-sm opacity-50">United States</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {product.meeting_location}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Mob: {product.phone}</span>
                                    </td>
                                    <td>{product.resalePrice} /-</td>
                                    <td>{product?.advertise ? <button disabled className="btn btn-primary btn-xs">Addvertise</button> :
                                        <button onClick={() => handleAdvertise(product._id)} className="btn btn-primary btn-xs">Addvertise</button>
                                    }
                                    </td>
                                    <td>{product?.status ? 'sold' : <span className='badge badge-primary'>Live</span>}</td>
                                    <td><button onClick={() => handleDelete(product._id)} className="btn btn-primary btn-xs">Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProducts;