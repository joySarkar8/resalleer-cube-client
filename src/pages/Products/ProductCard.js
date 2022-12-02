import React from 'react';

const ProductCard = ({ product, setProductInformation }) => {
    const { img, model, resalePrice, originalPrice, yearsOfUse, cardPostTime, verify, sellerName, brandName, location, description } = product;
    return (
        <div className="flex md:flex-row flex-col container m-auto gap-4 border mb-5 p-4 border-slate-800">
            <div className='md:basis-1/4'>
                <img className='w-full h-56 mb-2' src={img} alt="" />
                <label
                    htmlFor="booking"
                    className="btn btn-primary w-full"
                    onClick={() => setProductInformation(product)}
                >Book Now
                </label>
            </div>
            <div className="md:basis-3/4">
                <h2 className="text-2xl">{model}</h2>
                <p>{location}</p>
                <p>Price: {resalePrice}/-</p>
                <p>Original Price: {originalPrice}/-</p>
                <p>Years of Use: {yearsOfUse}years</p>
                <p>Seller Name: {sellerName} {verify && <span className='badge badge-primary'>Verified</span>}</p>
                <p>{description}</p>
                <p>Post Time: {cardPostTime}</p>
            </div>

        </div>
    );
};

export default ProductCard;