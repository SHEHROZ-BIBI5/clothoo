 import React from 'react';

const ClothooCraft = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          How Clothoo Crafts Your Custom Letterman Jacket
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Go behind the scenes and watch how your personalized varsity or letterman jacket is brought to life — from material selection and cutting to embroidery and stitching. Trusted by over 100K customers since 2013.
        </p>
      </div>

      <div className="aspect-w-16 aspect-h-9  overflow-hidden h-96">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/ppzGnm7SFKY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

     </div>
  );
};

export default ClothooCraft;








 