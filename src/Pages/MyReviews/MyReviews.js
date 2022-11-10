// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../context/AuthProvider/AuthProvider';
// import ReviewCard from '../Services/ReviewSection/ReviewCard';

// const MyReviews = () => {
//     const { user } = useContext(AuthContext);
//     const [reviews,setReviews]=useState([])

//     useEffect(() => {
//         fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
//             .then(res => res.json())
//             .then(data => setReviews(data))
//     }, [user?.email])
//     return (
//         <div>
//             {
//                 reviews.map(review =>
//                     <ReviewCard
//                         key={review._id}
//                         review={review}
//                     ></ReviewCard>
//                 )
//             }
//         </div>
//     );
// };

// export default MyReviews;