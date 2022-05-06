import React from 'react';

const QuestionTwo = () => {
    return (
        <div className='border-2 border-green-100 p-5 m-5 md:m-10'>
            <h4 className='mb-5 text-xl font-semibold text-green-600'> Q2: When should you use nodejs and when should you use mongodb.</h4>
            <p className='px-5'>Nodejs is an efficient choice when building any application where browser needs to communicate or send data to server. It is appropiate to build larger application. Nodejs should be used for real time applications as it can handle huge communication asynchronously without causing issues. Mongodb is a nosql database. Mongodb should be used when the data we are using has a object like document type data. Mongodb can handle bulk amount of data. So this database is a good choice for scalable large applications. </p>
        </div>
    );
};

export default QuestionTwo;