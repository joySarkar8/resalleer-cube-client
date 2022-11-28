import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({category, handleData}) => {
    const {brandName, img} = category;

    const categoryName = brandName.toLowerCase();
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {brandName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
            <Link to={`/products/${categoryName}`}><button className="btn btn-primary">View Products</button></Link>
        </div>
    );
};

export default CategoryItem;


