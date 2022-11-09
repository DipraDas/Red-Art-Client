import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    return (
        <div>
            <h4>{service.name}</h4>
        </div>
    );
};

export default ServiceDetails;