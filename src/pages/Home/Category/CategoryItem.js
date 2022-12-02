import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({category, handleData}) => {
    const {brandName, img} = category;

    const categoryName = brandName.toLowerCase();
    return (
        <div className="card w-96 bg-base-100 shadow-xl p-4">
            <figure>{img ? <img src={img} alt="" /> : <span>Loading</span>}</figure>
            <div className="card-body">
                <h2 className="card-title">
                    {brandName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <hr  className='mt-4 mb-4'/>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Best Options</div>
                    <div className="badge badge-outline">Best Price</div>
                </div>
            </div>
            <Link to={`/products/${categoryName}`}><button className="btn w-full btn-primary">View Products</button></Link>
        </div>
    );
};

export default CategoryItem;


