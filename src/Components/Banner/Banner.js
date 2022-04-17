import React from 'react';
import image from './Banner_image/bannar.jpg'
import './Banner.css'
import useReviews from '../../Hooks/useReviews';
import SlicedReview from '../slicedReview/SlicedReview';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useReviews();
    const showMoreReview = () => {
        const path = '/reviews';
        navigate(path);
    }
    return (
        <div>
            <div className='banner-container'>
                <div className='banner-details shadow-2xl'>
                    <h1 style={{ color: 'Orange' }}>Personal Development Courses</h1>
                    <p> Experience Better
                        Learning. Be a part of our huge community and start your personalized learning journey! Number one online platform in Bangladesh. We serve the best quality. We work to remove the darkness of unemployemnt. Be a part of our journey and secure your future. Happy learning!
                    </p>
                    <a href="https://www.youtube.com/watch?v=y7169jEvb-Y&t=10s" target='_blank'>
                        <button className='shadow-2xl' style={{ fontFamily: 'fantasy', color: 'Orange', fontSize: '20px' }}>Explore More</button></a>
                </div>
                <div className='banner-image'>
                    <img src={image} alt="" />
                </div>


            </div>
            <div>
                <h1 style={{ textAlign: 'center', color: 'Orange' }}>Course Review</h1>
                <div className='slice-details'>
                    {
                        reviews.slice(0, 3).map(review => <SlicedReview key={review.id} review={review} ></SlicedReview>)
                    }
                </div>

                <p style={{ textAlign: 'center' }}> <button onClick={showMoreReview} style={{ fontFamily: 'fantasy', color: 'Orange', fontSize: '20px' }}>More reviews</button></p>
            </div>
        </div>
    );
};

export default Banner;