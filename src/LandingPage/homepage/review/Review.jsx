import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./ReviewStyle.css";
import { Autoplay, Navigation } from "swiper/modules";

const Review = () => {
  const sliderData = [
    {
      name: "David Jacov",
      img: "https://th.bing.com/th/id/OIP.QjynegEfQVPq5kIEuX9fWQHaFj?pid=ImgDet&rs=1",
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      company: "Core Dev",
    },
    {
      name: "Lura Craft",
      img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      company: "Enosis LTD",
    },
    {
      name: "Jhon Sena",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCldKgmO2Hs0UGk6nRClAjATKoF9x2liYYA&usqp=CAU",
      review:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      company: "Desh IT Solution",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h2 className="text-xl md:text-4xl text-[#42a6ad] font-semibold text-center">
        What users say's about us
      </h2>
      <div className="mt-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 500000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="md:h-[350px] md:w-7/12 w-9/12 bg-teal-50/80 rounded-lg flex md:flex-row flex-col items-center justify-center border-2 border-teal-700/50 md:p-5 p-2 relative overflow-hidden">
                <div className="hidden md:block bg-white shadow-lg shadow-teal-800/30 absolute top-9 -left-60 -rotate-[25deg] z-10 w-full text-center py-1">
                  <p className="font-semibold uppercase">{item.company}</p>
                </div>
                <div className="md:w-5/12 flex items-center justify-center py-4">
                  <div className="rounded-[35px] overflow-hidden rotate-45 w-40 h-40">
                    <img
                      src={item.img}
                      alt=""
                      className="w-40 h-40 scale-150 -rotate-45 "
                    />
                  </div>
                </div>
                <div className="md:w-7/12 relative p-3 md:p-0 text-center md:text-left">
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
