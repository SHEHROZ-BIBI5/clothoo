 import React from 'react';

const StoryBehind = () => {
  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-4 p-4 px-4 max-w-[1200px] mx-auto">
      
      {/* Section 1 */}
      <div className="bg-[#3886e4] p-6  min-h-[200px] flex flex-col justify-center">
        <h1 className="text-xl font-semibold mb-2">The Story Behind Letterman Coats</h1>
        <p>
          Letterman jackets started as a way to honor school pride and wins. Over time, they became more than street-wear, they became memories. Today, they’re a timeless way to show who you are.
        </p>
      </div>

      {/* Section 2 */}
      <div className="bg-[#7734b5] p-6 min-h-[200px] flex flex-col justify-center">
        <h1 className="text-xl font-semibold mb-2">Our Range of Custom Jackets</h1>
        <p>
          Explore styles for every season. From classic school coats to lightweight bombers, make each one yours. Pick your colors, add your patch, and wear it with pride.
        </p>
      </div>

      {/* Section 3 */}
      <div className="bg-green-400 p-6 min-h-[200px] flex flex-col justify-center">
        <h1 className="text-xl font-semibold mb-2">The Art of Craftsmanship at Clothoo</h1>
        <p>
          We’ve made personalized jackets for over 13 years. Each one blends great fit, strong fabric, and detailed work. Our skilled team handles it all, from start to finish.
        </p>
      </div>

      {/* Section 4 */}
      <div className="bg-red-400 p-6 min-h-[200px] flex flex-col justify-center">
        <h1 className="text-xl font-semibold mb-2">Private Labels & Production Time</h1>
        <p>
          Want your own brand on your jacket? We’ve got you covered. Our full team handles every step, cutting, stitching, packing, with no setup fees. Quick and easy. 24/7 Customer service
        </p>
      </div>

    </div>
  );
};

export default StoryBehind;
