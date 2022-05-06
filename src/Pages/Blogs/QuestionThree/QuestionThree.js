import React from 'react';

const QuestionThree = () => {
    return (
        <div className='border-2 border-green-100 p-5 m-5 md:m-10'>
            <h4 className='mb-5 text-xl font-semibold text-green-600'> Q3: Differences between sql and nosql databases.</h4>
            <p className='px-5'>SQL databases have a fixed structure like table. Whereas nosql has a document like structure. Sql databases are relation and nosql databases are non-relational. Sql databases support vertical scalling. On the other hand, nosql databases support horizontal scaling. Some examples of sql databases are: mysql, oracle, Ms sql server. Some examples of nosql databases are mongodb, mariadb, neo4j. </p>
        </div>
    );
};

export default QuestionThree;