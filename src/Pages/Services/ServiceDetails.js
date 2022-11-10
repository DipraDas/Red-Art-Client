import { useLoaderData } from 'react-router-dom';
import ReviewSection from './ReviewSection/ReviewSection';

const ServiceDetails = () => {
    const service = useLoaderData();
    return (
        <div>
            <div className="container mx-auto py-20">
                <h4 className="text-6xl text-center mb-6">{service.name}</h4>
                <img className="mx-auto" src={service.img} alt="" />
                <h4 className="text-4xl text-center my-6 text-white">Price:<span style={{ color: 'red', fontWeight: 'bold' }}> ${service.price}</span></h4>
                <hr />
                <p className="text-4xl mt-10 text-center text-white">- - Description - -</p>
                <p className="w-2/4 mx-auto p5-10 text-gray-400 font-thin leading-10 text-justify tracking-wider mb-10">{service.description}</p>
                <hr />
                <p className="text-4xl my-10 text-center text-white">- - Additional Information - -</p>
                <p className="text-center text-gray-400 font-thin leading-10 tracking-wider">Design: {service.design}</p>
                <p className="text-center text-gray-400 font-thin leading-10 tracking-wider">Rating: {service.rating}</p>
            </div>
            <div>
                <ReviewSection serviceId={service._id}></ReviewSection>
            </div>
        </div>

    );
};

export default ServiceDetails;