import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const ReviewSection = ({ service }) => {
    // console.log(serviceId);
    const { _id, name, img } = service;
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://asignment-server.vercel.app/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [_id]);

    const handleAddComment = event => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const email = user?.email || 'unregistered';


        const service = {
            email,
            serviceId: _id,
            serviceName: name,
            serviceImage: img,
            name: user.displayName,
            comment,
            image: user.photoURL
        }


        fetch('https://asignment-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Comment added')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }

    return (
        <div>
            {
                reviews.map(review =>
                    <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>
                )
            }
            <div className='container mx-auto my-20'>
                {
                    user?.uid ?
                        <>
                            <h1>Add Your Review</h1>
                            <form onSubmit={handleAddComment}><textarea name="comment" id="" cols="50" rows="5"></textarea> <br />
                                <button className="btn btn-outline btn-error uppercase tracking-wide">Add Review</button>

                            </form></>
                        :
                        <button className="btn btn-outline btn-error uppercase tracking-wide"><Link to='/login'>Please login to add a review</Link></button>
                }
            </div>
        </div>

    );
};

export default ReviewSection;