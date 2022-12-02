import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';

const CategoryItems = () => {

    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        fetch('https://reseller-cube-server.vercel.app/categoires')
            .then(res => res.json())
            .then(data => setCategoriesData(data.data))
    }, []);

    const handleData = (data) => {
        // console.log(data);
    }

    return (
        <div className='container m-auto bg-gray-200 p-5 mb-10'>
            <h1 className='text-3xl md:text-5xl text-center mt-7 mb-8 underline'>Categories</h1>
            <div className='flex justify-center flex-wrap mb-5' style={{ gap: '40px' }}>
                {
                    categoriesData.length ? categoriesData?.map(category => <CategoryItem
                        key={category._id}
                        category={category}
                        handleData={handleData}
                    ></CategoryItem>)
                        :
                        <div className=''>
                            <div style={{borderTopColor: "transparent"}}
                                className="w-10 h-10 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
                        </div>
                }
            </div>
        </div>
    );
};

export default CategoryItems;