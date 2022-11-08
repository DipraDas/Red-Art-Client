import React from 'react';
import bar from '../../../assets/home/bar-line.png';

const ServiceHome = () => {
    return (
        <div>
            <div className="container mx-auto px-10 py-10 text-center">
                <h2 className='text-6xl mb-3 font-semibold text-gray-100'><span style={{ color: 'red' }}>Serv</span>ices</h2>
                <img className='m-auto' src={bar} alt="" />
            </div>
        </div>
    );
};

export default ServiceHome;