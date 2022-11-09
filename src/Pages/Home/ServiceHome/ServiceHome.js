import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bar from '../../../assets/home/bar-line.png';
import ServiceCard from './ServiceCard';

const ServiceHome = () => {
    const [services, setServices] = useState([]);
    const size=3;
    
    useEffect(() => {
        const url = `http://localhost:5000/services?&size=${size}`;
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
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div>
                <button className="btn btn-outline btn-error uppercase tracking-wide"><Link to='/services'>View All</Link></button>
        </div>
        </div >
    );
};

export default ServiceHome;