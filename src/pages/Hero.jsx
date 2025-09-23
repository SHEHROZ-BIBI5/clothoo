 import React, { useState, useEffect } from "react";
import img1 from "../assets/image3.png";
import img2 from "../assets/image1.png";
import img3 from "../assets/image5.png";
import logo from '../assets/logo/image.png';

const images = [img1, img2, img3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
     const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

     return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

   const imageSrc = isMobile ? images[0] : images[currentIndex];

  return (
    <>
       <div className="max-w-[1200px] mx-auto px-4">
  {/* Stats Section */}
  <div className="bg-white my-6 py-1 mb-2 max-w-[1200px] mx-auto px-4  hidden md:block ">

    <div className="flex flex-col md:flex-row md:items-center justify-between divide-y md:divide-y-0 md:divide-x divide-gray-300">

      <a href="/products/varsity-jackets" className="flex items-center py-3 px-4 hover:bg-gray-50 transition">
        <h1 className="text-red-600 font-bold text-lg leading-tight text-center">15K Satisfied Customers</h1>
        <p className="text-gray-500 ml-2 text-sm leading-tight ">Around the globe</p>
      </a>
      <a href="/products" className="flex items-center py-3 px-4 hover:bg-gray-50 transition">
        <h1 className="text-red-600 font-bold text-lg leading-tight">60% Discount</h1>
        <p className="text-gray-500 ml-2 text-sm leading-tight">Price you always wanted</p>
      </a>
      <a href="/clothoo/reviews" className="flex items-center py-3 px-4 hover:bg-gray-50 transition">
        <h1 className="text-red-600 font-bold text-lg leading-tight">1000+ Reviews</h1>
        <p className="text-gray-500 ml-2 text-sm leading-tight">Read what they're saying</p>
      </a>
    </div>
  </div>
</div>
       <div
        className="relative w-auto h-[5in] md:h-[500px] sm:h-[400px] xs:h-[300px] overflow-hidden max-w-[1200px] mx-auto px-4"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="relative z-10 max-w-xl text-white px-4 sm:px-6 md:ml-12 lg:ml-28">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Custom Varsity Jackets for Teams,  Students & Events
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
              Build your own custom varsity or letterman jacket with Clothoo, no minimums, premium materials & fast delivery. Since 2013, we've earned the trust of over 100k customers by offering high-quality melton wool & genuine cowhide leather, fully customizable options, and unbeatable value with 60% off every order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded hover:bg-red-700 text-base sm:text-lg">
                Shop Now
              </button>
              <button className="border border-white text-white px-4 py-2 sm:px-6 sm:py-2 rounded bg-transparent hover:bg-white/20 text-base sm:text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 mt-6">
        <img src={logo} alt="Logo" />
      </div>
    </>
  );
};

export default Hero;
