import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bar from '../../../assets/home/bar-line.png';
import ServiceCard from './ServiceCard';

const ServiceHome = () => {
    const [services, setServices] = useState([]);
    const size = 3;

    useEffect(() => {
        const url = `https://asignment-server.vercel.app/services?&size=${size}`;
        console.log(size);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [size])

    return (
        <div>
            <div className="container mx-auto px-10 py-10 text-center">
                <h2 className='text-6xl mb-3 font-semibold text-gray-100'><span style={{ color: 'red' }}>Serv</span>ices</h2>
                <img className='m-auto' src={bar} alt="" />
            </div>
            <div className='container mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center mt-16 mb-20'>
                <button style={{ backgroundColor: 'red', color: '#fff' }} className="btn btn-error uppercase tracking-widest"><Link to='/services'>View All SERVICES</Link></button>
            </div>
        </div >
    );
};

export default ServiceHome;