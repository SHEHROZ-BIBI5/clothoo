import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally: Send to backend
    alert(`🎉 Order placed successfully!\n\nName: ${formData.name}\nEmail: ${formData.email}`);
    setCartItems([]); // Empty cart
    navigate('/'); // Redirect to home page
  };

  const total = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ''));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded shadow"
        >
          Place Order
        </button>
      </form>

      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Your Cart:</h3>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-3">
            {cartItems.map((item, idx) => (
              <li key={idx} className="flex justify-between text-gray-700">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 text-lg font-bold text-gray-800">
          Total: Rs. {total}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
