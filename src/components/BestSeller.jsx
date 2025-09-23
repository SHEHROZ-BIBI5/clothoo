 import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";

import img1 from "../assets/men/image7.png";
import img2 from "../assets/men/image2.png";
import img3 from "../assets/men/image3.png";
import img4 from "../assets/men/image4.png";
import img5 from "../assets/men/image5.png";
import img6 from "../assets/men/image6.png";
import img7 from "../assets/men/image8.png";
import img8 from "../assets/men/image9.png";
import img9 from "../assets/men/image7.png";
import img10 from "../assets/men/image10.png";
import img11 from "../assets/men/image11.png";
import img12 from "../assets/men/image12.png";

const products = [
  { id: 1, slug: "black-wool-body-jacket", name: "Black Wool Body and Black Cowhide Leather Sleeves", amount: "$200", price: "$80", image: img1 },
  { id: 2, slug: "black-white-varsity-jacket", name: "Black Wool Body and White Cowhide Leather Sleeves", amount: "$200", price: "$80", image: img2 },
  { id: 3, slug: "red-gold-varsity-jacket", name: "Red Wool Body and Athletic Gold Leather Sleeves", amount: "$200", price: "$80", image: img3 },
  { id: 4, slug: "royalblue-white-varsity-jacket", name: "Royal Blue Wool Body and White Leather Sleeves", amount: "$200", price: "$80", image: img4 },
  { id: 5, slug: "riverdale-varsity-jacket", name: "Royal Blue Body and Gold Sleeves Varsity Jacket Riverdale", amount: "$200", price: "$80", image: img5 },
  { id: 6, slug: "black-gold-pockets", name: "Black All Wool with Gold Leather Pockets", amount: "$150", price: "$60", image: img6 },
  { id: 7, slug: "red-white-fleece", name: "Red and White Fleece Baseball Jacket", amount: "$130", price: "$52", image: img7 },
  { id: 8, slug: "black-gold-satin", name: "Black and Gold Satin Baseball Jacket", amount: "$130", price: "$52", image: img8 },
  { id: 9, slug: "black-nylon-bomber", name: "Black Nylon Bomber Jacket for Mens", amount: "$160", price: "$64", image: img9 },
  { id: 10, slug: "retro-letterman", name: "Retro Letterman Jacket Shirt / Byron Collar", amount: "$410", price: "$164", image: img10 },
  { id: 11, slug: "mens-leather-inserts", name: "Men's Fashion Letterman Jacket with Leather Inserts", amount: "$200", price: "$80", image: img11 },
  { id: 12, slug: "pullover-fleece-hoodie", name: "Pullover Fleece Hoodie with Sleeves Stripes", amount: "$150", price: "$60", image: img12 },
];

 const BestSeller = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="py-10 px-4 max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Best Seller Jackets</h1>
        <Link
          to="/products"
          className="bg-white text-red-600 px-4 py-2 rounded border-red-700 border"
        >
          Browse All
        </Link>
      </div>

      <h6 className="text-lg text-gray-600 mb-2">
        High-quality custom varsity jackets and hoodies loved by schools, students, and brands.
      </h6>
      <p className="text-gray-500 mb-8">
        Crafted with premium materials like genuine leather and melton wool for the perfect fit.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="text-center cursor-pointer group bg-white rounded shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <Link to={`/product/${product.slug}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <h3 className="mt-3 text-base sm:text-sm font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm sm:text-xs text-gray-500 line-through">{product.amount}</p>
              <p className="font-bold text-sm sm:text-xs text-red-600">{product.price}</p>
            </Link>
           </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
