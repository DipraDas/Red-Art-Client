import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const ReviewCard = ({ review }) => {
    console.log(review);

    return (
        <div className='container mx-auto'>
            <div className='flex gap-5  justify-start items-center my-10'>
                <div><img src={review.image} alt="" /></div>
                <div>
                    <h1>{review.name}</h1>
                    <h1>{review.comment}</h1>
                </div>

            </div>
            <hr  />

        </div>
    );
};

export default ReviewCard;