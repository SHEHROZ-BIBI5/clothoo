 import React from 'react';
import img1 from "../assets/Categories/image1.png";
import img2 from "../assets/Categories/image2.png";
import img3 from "../assets/Categories/image3.png";
import img4 from "../assets/Categories/image4.png";

const products = [
  { id: 1, name: "Hoodies", from: "$65", image: img1 },
  { id: 2, name: "Black Wool", from: "$70", image: img2 },
  { id: 3, name: "Red Wool Body", from: "$75", image: img3 },
  { id: 4, name: "Royal Blue Wool", from: "$80", image: img4 },
];

const Categories = () => {
  const handleClick = (product) => {
    alert(`Aap ne '${product.name}' product select kiya hai.`);
  };

  return (
    <div className="mt-10 px-4 max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-semibold mb-1 text-gray-800">
        Products Categories
      </h1>
      <div className="w-20 border-b-2 border-red-600 mb-6"></div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleClick(product)}
            className="group cursor-pointer overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1"
            style={{ backgroundColor: 'transparent', height: 'auto' }}
          >
            {/* Product Name on top */}
            <div className="mb-2 px-1">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
            </div>

            {/* Image without rounded bottom corners */}
            <div style={{ overflow: 'hidden' }}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ borderRadius: '0' }} // No rounded corners
              />
            </div>

            {/* Price below image */}
            <div className="mt-2 px-1">
              <p className="text-sm text-red-600 font-semibold">
                From {product.from}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
