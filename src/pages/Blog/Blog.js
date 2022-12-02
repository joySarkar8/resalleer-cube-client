import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <div className='container m-auto p-4 bg-gray-200 mt-5 mb-10'>
            <h1 className='underline mb-5 text-4xl text-center'>Question And Answers</h1>
            <div>
                {
                    blogs.data.map(blog => <BlogCard
                    key={blog._id}
                    blog={blog}
                    ></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blog;