 import React from 'react';
import img1 from '../assets/Design/image.png';

const Clothoo = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 mt-10">
      
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Clothoo Letterman Jackets
        </h1>
        <p className="text-gray-600">
          Custom-built. Perfect fit. Trusted since 2013.
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        
        {/* Image */}
        <div className="flex-shrink-0">
          <img 
            src={img1} 
            alt="Clothoo Jacket" 
            className="w-[420px] h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-between w-full">
          
          {/* Features */}
          <div className="space-y-4 text-sm">
            <div>
              <h2 className="font-medium flex items-center gap-2 text-gray-800">
                <span className="text-green-500">✔</span> Expert Craftsmanship:
              </h2>
              <p className="text-gray-700">
                We’ve been crafting personalized clothing for over 13 years. More than 100,000 customers trust our work.
              </p>
            </div>

            <div>
              <h2 className="font-medium flex items-center gap-2 text-gray-800">
                <span className="text-green-500">✔</span> Premium Materials:
              </h2>
              <p className="text-gray-700">
                Choose from top quality <a href="/jackets-materials" className='text-blue-500'>melton wool</a> , genuine cowhide leather, satin, nylon, or faux leather. Every piece feels as good as it looks.
              </p>
            </div>

            <div>
              <h2 className="font-medium flex items-center gap-2 text-gray-800">
                <span className="text-green-500">✔</span> Accurate Fit:
              </h2>
              <p className="text-gray-700">
                Our sizing fits everyone. From XS to 6XL, including <a href="/big-tall-varsity-jackets" className='text-blue-500'>tall and plus-size fits</a> , we’ve got you covered.
              </p>
            </div>

            <div>
              <h2 className="font-medium flex items-center gap-2 text-gray-800">
                <span className="text-green-500">✔</span> Customization Options:
              </h2>
              <p className="text-gray-700">
                Design your own high quality varsity apparel using our easy online builder, add logos, patches, and details that reflect your style.
              </p>
            </div>

            <div>
              <h2 className="font-medium flex items-center gap-2 text-gray-800">
                <span className="text-green-500">✔</span> Flexible Ordering:
              </h2>
              <p className="text-gray-700">
                Order one or many, there’s no minimum. We ship each jacket in 2–3 weeks, with care and quality in every stitch.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href="/design-your-own/"
              className="bg-blue-500 hover:bg-blue-900 text-white px-6 py-3 transition text-center"
            >
              CREATE YOUR JACKET
            </a>
            <a
              href="/products"
              className="bg-purple-600 hover:bg-purple-900 text-white px-6 py-3 transition text-center"
            >
              BROWSE COLLECTION
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Clothoo;
