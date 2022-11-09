import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, []);

    const handleAddComment = event => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;


        const service = {

            name: user.displayName,
            comment,
            image: user.photoURL
        }


        fetch('http://localhost:5000/reviews', {
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
            <div>
                {
                    user?.uid ?
                        <form onSubmit={handleAddComment}>        <textarea name="comment" id="" cols="30" rows="10"></textarea>
                                                <button className="btn btn-outline btn-error uppercase tracking-wide">Add Comment</button>

                        </form>
                        :
                        <button className="btn btn-outline btn-error uppercase tracking-wide"><Link to='/login'>Login</Link></button>
                }
            </div>
        </div>

    );
};

export default ReviewSection;