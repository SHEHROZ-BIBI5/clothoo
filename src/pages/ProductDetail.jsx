 import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import allProducts from "../data/products";

 
const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = allProducts.find((item) => item.id === id);

  if (!product) {
    return <p className="text-center text-red-500 mt-10">Product not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <p className="text-xl text-gray-700 mb-4">{product.price}</p>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus, elit a feugiat varius...
      </p>
      <button
        onClick={() => addToCart(product)}
        className="bg-yellow-400 text-white py-2 px-6 rounded hover:bg-yellow-500 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
