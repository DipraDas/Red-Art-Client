import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/ServiceHome/ServiceCard';
import bar from '../../../src/assets/home/bar-line.png';


const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);


    const size=services.length;
    
    useEffect(() => {
        setLoading(true);
        const url = `http://localhost:5000/services?&size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    },[size])
    return (
        <div>
           

            {
                loading === false ? <>
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
                </>
                :
                <div className='text-center'>
                    <button className="btn btn-square loading"></button>
                    </div>
            }
        </div>
    );
};

export default Services;