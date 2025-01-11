import React, { useEffect, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Review = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('/review.json')
        .then(res => res.json())
        .then(data => {
            setReview(data)
        })
    },[setReview])
    return (
        <div className='container mx-auto my-16 md:mb-10 text-white'>
            <div className='text-center mb-8'>
                <h1 className='text-2xl text-[#D1AF78]'>What Our Clients Say</h1>
                <p className='font-style text-[#D1AF78]'>----Review----</p>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
             {
                review.map(review => (
                <SwiperSlide key={review.id}>
                     
                    <div className='w-10/12 mx-auto text-center'>
                        <img className='w-16 rounded-full h-16 mx-auto object-cover ' src={review.image} alt="" />
                        <h3 className="md:text-3xl upp py-2
                         text-[#CD9003]">{review.name}</h3>
                         <p className='text-sm font-style'>{review.description}</p>
                    </div>
                </SwiperSlide>

                ))
             }
             
           </Swiper>
        </div>
    );
};

export default Review;