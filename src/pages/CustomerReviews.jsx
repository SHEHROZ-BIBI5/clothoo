 import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    text: "⭐⭐⭐⭐⭐ Great Service & Price! I ordered a varsity coat for my son, and I’m beyond impressed with the craftsmanship!",
    name: "Melo Luminus MG",
    location: "New York",
    rating: 5,
  },
  {
    text: "⭐⭐⭐⭐⭐ Perfect Jacket for Our Team! Our baseball team got matching outerwear, and they’re incredible!",
    name: "Coach Mike",
    location: "California",
    rating: 5,
  },
  {
    text: "⭐⭐⭐⭐⭐ Fast Service, Amazing Leather! Needed a high school letterman coat for an event, and Clothoo delivered.",
    name: "Connie Mueller",
    location: "Philadelphia",
    rating: 5,
  },
  {
    text: "Great jacket! We're very happy with the jacket! Thanks again 😄☺",
    name: "Christina Brignardello",
    location: "United States",
    rating: 4,
  },
  {
    text: "Good Quality",
    name: "Juan Diego Garcia",
    location: "United States",
    rating: 4,
  },
  {
    text: "Not only does the hoodie fit perfectly but they gave me the best customer experience I've ever received!",
    name: "Alex Martin",
    location: "United States",
    rating: 5,
  },
];

const CustomerReviewsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Customer Reviews
      </h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-3">
            <div className="relative bg-white shadow-md rounded-lg p-6 h-full flex flex-col justify-between w-80 mx-auto">
              {/* Bubble Tail */}
              <div className="absolute -bottom-3 left-6 w-5 h-5 bg-white transform rotate-45 shadow-md"></div>

              <div>
                {/* Stars */}
                <div className="flex text-yellow-400 mb-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                {/* Review Text */}
                <p className="text-gray-700 text-sm mb-4">{review.text}</p>
              </div>

              {/* Name & Location */}
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReviewsCarousel;
