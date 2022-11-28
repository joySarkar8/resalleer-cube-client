import React from 'react';

const ProductCard = ({ product, setProductInformation }) => {
    const { img, model, resalePrice, originalPrice, yearsOfUse, cardPostTime, isVerified, sellerName, brandName, location, description } = product;
    return (
        <div className="grid grid-cols-4 mb-5">
            <div><img className='w-full h-56' src={img} alt="" /></div>
            <div className="col-span-3 pl-4">
                <h2 className="text-2xl">{model}</h2>
                <p>{location}</p>
                <p>Price: {resalePrice}/-</p>
                <p>Original Price: {originalPrice}/-</p>
                <p>Years of Use: {yearsOfUse}years</p>
                <p>Seller Name: {sellerName}</p>
                <p>{description}</p>
                <p>Post Time: {cardPostTime}</p>
            </div>
            <label
                htmlFor="booking"
                className="btn btn-primary"
                onClick={() => setProductInformation(product)}
                >Book Now</label>
        </div>
    );
};

export default ProductCard;