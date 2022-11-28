import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';
import ProductCard from './ProductCard';

const Products = () => {
    const [productInformation, setProductInformation] = useState({});
    const products = useLoaderData();

    return (
        <div className=' container m-auto'>
            <h2 className='text-4xl text-center'>Products</h2>
            {
                products.data.map(product => <ProductCard
                    key={product._id}
                    product={product}
                    setProductInformation={setProductInformation}
                ></ProductCard>)
            }
            <Modal
                productInformation={productInformation}
            ></Modal>
        </div>
    );
};

export default Products;