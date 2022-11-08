import React from 'react';
import bar from '../../../assets/home/bar-line.png';
import img1 from '../../../assets/home/blog-image.jpg';

const LetsKnow = () => {
    return (
        <div>
            <div className="container mx-auto px-10 py-10 text-center">
                <h2 className='text-6xl mb-3 font-semibold text-gray-100'><span style={{ color: 'red' }}>Let's</span> Know</h2>
                <img className='m-auto' src={bar} alt="" />
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-center items-center text-center">
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className='p-10'>
                    <h3 className='text-white font-semibold text-5xl mb-6'>ACRYLIC</h3>
                    <p className='text-gray-400 font-light tracking-wider leading-8'>Acrylic painting, technique in which pigments are mixed with hot, liquid wax. After all of the colours have been applied to the painting surface, a heating element is passed over them until the individual brush or spatula marks fuse into a uniform film.</p>
                </div>
            </div>
        </div>
    );
};

export default LetsKnow;