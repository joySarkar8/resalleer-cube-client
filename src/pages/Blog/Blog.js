import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
    // const blogs = useLoaderData();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://reseller-cube-server.vercel.app/blog`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    console.log(data.data);

    // loader: () => fetch(`https://reseller-cube-server.vercel.app/blog`)
    return (
        <div className='container m-auto p-4 bg-gray-200 mt-5 mb-10'>
            <h1 className='underline mb-5 text-4xl text-center'>Question And Answers</h1>
            <div>
                {
                    data?.data?.map(blog => <BlogCard
                    key={blog._id}
                    blog={blog}
                    ></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blog;