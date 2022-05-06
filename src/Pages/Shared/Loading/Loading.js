import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center" >
                <div className="spinner-border animate-spin inline-block border-4 rounded-full w-24 h-24 my-10 text-green-600" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;