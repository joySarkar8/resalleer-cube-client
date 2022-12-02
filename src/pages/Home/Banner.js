import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen mb-8" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold">Hello there</h1>
                    <p className="text-white mb-5">Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;