import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const ReviewCard = ({ review }) => {

    return (
       <div>
         <div>
            <img src={review.image} alt="" />
            <h1>{review.name}</h1>
            <h1>{review.comment}</h1>
           
        </div>
       
       </div>
    );
};

export default ReviewCard;