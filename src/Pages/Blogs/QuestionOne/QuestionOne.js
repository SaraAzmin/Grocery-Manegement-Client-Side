import React from 'react';

const QuestionOne = () => {
    return (
        <div className='border-2 border-green-100 p-5 m-5 md:m-10'>
            <h4 className='mb-5 text-xl font-semibold text-green-600'> Q1: Difference between JavaScript and Nodejs.</h4>
            <p className='px-5'>Javascript is a scripting programming language. Whereas, nodejs is a javascript runtime environment. Javascript is used to write the client side scripts. On the other hand, nodejs is used for writing beckend scripts thats is server side scripts. Javascript only runs in browsers. Nodejs is an interpreter. It is used for running applications regardless of broswer, operation systems.  </p>
        </div>
    );
};

export default QuestionOne;