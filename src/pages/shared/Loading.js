import React from 'react';

const Loading = () => {
    return (
        <div className=''>
            <div style={{ borderTopColor: "transparent" }}
                className="w-10 h-10 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;