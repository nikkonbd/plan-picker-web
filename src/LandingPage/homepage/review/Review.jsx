import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./ReviewStyle.css";
import { Autoplay, Navigation } from "swiper/modules";
import Rating from "react-rating";
import { data } from "autoprefixer";

const Review = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch("https://plan-picker-server-production-96ce.up.railway.app/reviews")
      .then((res) => res.json())
      .then((reviewsData) => {
        // console.log(data);
        setReviewData(reviewsData);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl pt-10 md:pt-0 md:text-4xl text-[#42a6ad] font-semibold text-center">
        What users say's about us
      </h2>
      <p className="text-center">All users Review.</p>
      <div className="mt-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper">
          {reviewData.map((item, index) => (
            <SwiperSlide className="" key={index}>
              <div className="md:h-[350px] bg-teal-50/80 rounded-lg flex md:flex-row flex-col items-center justify-center border-2 border-teal-500/50 md:p-5 p-2 relative overflow-hidden">
                <div className="hidden md:block bg-white shadow-lg shadow-teal-800/30 absolute top-10 -left-96 -rotate-[25deg] z-10 w-full text-center py-1">
                  <p className="font-semibold uppercase">{item.name}</p>
                </div>
                <div className="md:w-5/12 flex items-center justify-center py-4">
                  <div className="rounded-[35px] overflow-hidden rotate-45 w-40 h-40">
                    <img
                      src={item.profilePic}
                      alt=""
                      className="w-40 h-40 scale-150 -rotate-45 "
                    />
                  </div>
                </div>
                <div className="md:w-7/12 relative p-3 md:p-0 text-center md:text-left">
                  <Rating
                    readonly
                    fractions={4}
                    placeholderRating={item.star}
                    emptySymbol={
                      <svg
                        aria-hidden="true"
                        className="w-7 h-7 text-gray-300 dark:text-white-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Fifth star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    }
                    placeholderSymbol={
                      <svg
                        aria-hidden="true"
                        className="w-7 h-7 text-yellow-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        aria-hidden="true"
                        className="w-7 h-7 text-yellow-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    }></Rating>
                  <p className="text-teal-700">"{item.review}"</p>
                  <h3 className="mt-5 font-bold text-black">{item.name}</h3>
                  <p className="text-teal-800 font-semibold text-xl">
                    {item.company}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
