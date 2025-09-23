 import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

// import img1 from '../assets/headphoneImg.jpg';
// import img2 from '../assets/3794066.jpg';
// import img3 from '../assets/daren-inshape.jpg';
// import img4 from '../assets/fitness-tracker.jpg';
// import img5 from '../assets/gaming-mouse.jpg';
// import img6 from '../assets/laptop-stand.jpg';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 'Rs. 4,500',
    // image: img1,
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 'Rs. 6,200',
    // image: img2,
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 'Rs. 2,900',
    // image: img3,
  },
  {
    id: 4,
    name: 'Fitness Tracker',
    price: 'Rs. 3,800',
    // image: img4,
  },
  {
    id: 5,
    name: 'Gaming Mouse',
    price: 'Rs. 2,200',
    // image: img5,
  },
  {
    id: 6,
    name: 'Laptop Stand',
    price: 'Rs. 1,900',
    // image: img6,
  },
];

const FeaturedProducts = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md py-4 px-4 text-center">
            <img
              src={item.image}
              alt={item.name}
              className="mx-auto mb-4 rounded-lg w-full h-80 object-cover"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.price}</p>

            <button
              onClick={() => addToCart(item)}
              className="mt-4 bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500 transition"
            >
              Add to Cart
            </button>

            <Link to={`/product/${item.id}`}>
              <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
