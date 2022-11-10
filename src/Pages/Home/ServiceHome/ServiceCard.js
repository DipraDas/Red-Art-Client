import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, img, price, name, description } = service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 style={{ color: 'red' }} className="card-title text-4xl">{name}</h2>
                <p className='text-2xl text-gray-600'>Price: ${price}</p>
                <p> {
                    description.length > 100 ?
                        <p className=' text-gray-600 leading-6'>{description.slice(0, 100) + '..'} <Link className='text-blue-500' to={`/services/${_id}`}>More</Link></p>
                        :
                        <p>{description}</p>
                }</p>
                <div className="card-actions justify-start">
                    <Link to={`/services/${_id}`}><button style={{border: '1px solid red', backgroundColor: 'black'}} className="btn btn-bg btn-primary uppercase">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;