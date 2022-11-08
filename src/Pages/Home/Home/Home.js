import React from 'react';
import Banner from '../Banner/Banner';
import LetsKnow from '../LetsKnow/LetsKnow';
import Protfolio from '../Protfolio/Protfolio';
import ServiceHome from '../ServiceHome/ServiceHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <Protfolio></Protfolio>
            <LetsKnow></LetsKnow>
        </div>
    );
};

export default Home;