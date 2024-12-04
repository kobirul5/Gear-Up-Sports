import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='mb-5 text-3xl md:text-5xl  font-bold'>{title}</h1>
            <p className='mb-5'>{subtitle}</p>
        </div>
    );
};

export default Heading;