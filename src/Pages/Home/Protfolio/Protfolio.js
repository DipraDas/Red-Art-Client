import React from 'react';
import bar from '../../../assets/home/bar-line.png';
import './Protfolio.css';
import img1 from '../../../assets/home/protfolio/protfolio-01.jpg'
import img2 from '../../../assets/home/protfolio/protfolio-02.jpg'
import img3 from '../../../assets/home/protfolio/protfolio-03.jpg'
import img4 from '../../../assets/home/protfolio/protfolio-04.jpg'
import img5 from '../../../assets/home/protfolio/protfolio-05.jpg'
import img6 from '../../../assets/home/protfolio/protfolio-06.jpg'
import img7 from '../../../assets/home/protfolio/protfolio-07.jpg'
import img8 from '../../../assets/home/protfolio/protfolio-08.jpg'
import img9 from '../../../assets/home/protfolio/protfolio-09.jpg'

const Protfolio = () => {
    return (
        <div className='protfolio'>
            <div className="container mx-auto px-10 py-10 text-center">
                <h2 className='text-6xl mb-3 font-semibold text-gray-100'><span style={{ color: 'red' }}>Prot</span>folio</h2>
                <img className='m-auto' src={bar} alt="" />
                <div className="images grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center">
                    <div style={{ transform: 'scale(0.8)' }}><img src={img4} alt="" /></div>
                    <div style={{ transform: 'scale(0.8)' }}><img src={img5} alt="" /></div>
                    <div style={{ transform: 'scale(0.8)' }}><img src={img2} alt="" /></div>
                    <div style={{ transform: 'scale(0.8)' }}><img src={img6} alt="" /></div>
                    <div style={{ transform: 'scale(0.8)' }}><img src={img1} alt="" /></div>
                    <div style={{ transform: 'scale(0.8)' }}><img src={img9} alt="" /></div>
                    <div style={{ transform: 'scale(0.8)' }}><img src={img8} alt="" /></div>
                    <div style={{ transform: 'scale(0.8)' }}><img src={img7} alt="" /></div>
                    <div style={{ transform: 'scale(0.8)' }}><img src={img3} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Protfolio;