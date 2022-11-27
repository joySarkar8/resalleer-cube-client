import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';

const CategoryItems = () => {

    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categoires')
            .then(res => res.json())
            .then(data => setCategoriesData(data.data))
    }, []);

    const handleData = (data) => {
        console.log(data);
    }

    return (
        <div className='container m-auto'>
            <h1 className='text-6xl text-center mb-8'>Categories</h1>
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