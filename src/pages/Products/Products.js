import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PrivateRoute from '../../Routes/PrivateRoute';
import Loading from '../shared/Loading';
import Modal from './Modal';
import ProductCard from './ProductCard';

const Products = () => {
    const [productInformation, setProductInformation] = useState({});
    const params = useParams();
    const name = params.categoryName;



    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch(`https://reseller-cube-server.vercel.app/products?category=${name}`)
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loading></Loading>
    };



    return (
        <div className='mt-6 container m-auto bg-gray-200 p-5 mb-10'>
            <h2 className='text-4xl text-center mb-6 underline'>Products</h2>
            {
                products?.data.map(product => <ProductCard
                    key={product._id}
                    product={product}
                    setProductInformation={setProductInformation}
                ></ProductCard>)
            }
          
            <PrivateRoute>
                <Modal
                    productInformation={productInformation}
                    refetch={refetch}
                ></Modal>
            </PrivateRoute>
        </div>
    );
};

export default Products;