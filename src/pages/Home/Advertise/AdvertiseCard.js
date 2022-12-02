import React from 'react';

const AdvertiseCard = ({ advertiseItem }) => {
    const { model, img, condition, resalePrice, _id, meeting_location, sellerName, phone } = advertiseItem;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-56' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {model}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <h2>Price: {resalePrice} /-</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{condition}</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
            
            {/* <Link to={`/products/${categoryName}`}><button className="btn btn-primary">View Products</button></Link> */}
        </div>
    );
};

export default AdvertiseCard;