import React from 'react';

const BlogCard = ({blog}) => {

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-5">
            <div className="card-body">
                <h2 className="card-title text-3xl">{blog.question}</h2>
                <p>{blog.answer}</p>
            </div>
        </div>
    );
};

export default BlogCard;