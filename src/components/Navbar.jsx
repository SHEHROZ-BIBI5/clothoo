 import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import Dropdown from '../pages/Dropdown';
 import { FaUser } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo_clothoo.png';

const dropdownData = [     {
    title: 'Varsity Jackets',
    items: [
      { id: "1", label: 'Classic Wool & Leather', path: '/wool-leather-varsity-jackets' },
      { id: "2", label: 'Classic Wool Varsity Leather', path: '/wool-varsity-jackets' },
      { id: "3", label: 'All Leather Letterman Jackets', path: '/all-leather-letterman-jackets' },
      { id: "4", label: 'All Wool Varsity Jackets', path: '/fleece-varsity-jackets' },
      { id: "5", label: 'Cotton Fleece Jackets', path: '/fleece-varsity-jackets' },
      { id: "6", label: 'Baseball Satin Jacket', path: '/cotton-twill-varsity-jackets' },
      { label: 'Cotton Twill Jackets', path: '/hooded-letterman-jackets' },
      { label: 'Hooded Letterman Jackets', path: '/retro-letterman-jackets' },
    ],
  },
  {
    title: 'Other Style',
    items: [
      { label: 'Bomber Jackets', path: '/products/bomber-jackets' },
      { label: 'Fleece Hoodies', path: '/Products/fleece-hoodies' },
      { label: 'Puffer Jackets', path: '/products/puffer-jackets' },
      { label: 'Coach Jackets', path: '/products/coach-jackets' },
      { label: 'Demin Jackets', path: '/products/denim-jackets' },
    ]
  },
  {
    title: 'Design Your Own',
    items: [
      { label: 'Letterman Jacket', path: '/kids/toys' },
      { label: 'Bomber Jacket', path: '/kids/toys' },
      { label: 'Fleece Hoodies', path: '/Products/fleece-hoodies' },
      { label: 'Coach Jackets', path: '/products/coach-jackets' },
    ]
  },
  {
    title: 'Bulk Orders',
    items: [
      { label: 'Schools & Teams', path: '/wholesale-varsity-jackets' },
      { label: 'Corporate', path: 'https:/wholesale-varsity-jackets' },
      { label: 'Private Label', path: '/wholesale-varsity-jackets' }
    ]
  },
  {
    title: 'Support',
    items: [
      { label: 'Size Guide', path: '/size-chart' },
      { label: 'Materials & Colors', path: '/size-chart' },
      { label: 'Embroidery & Patches', path: '/varsity-jackets-patches-embroideries' },
      { label: 'How to Customize', path: '/how-to-design' },
      { label: 'FAQs', path: '/faqs' },
      { label: 'Photo Gallery', path: '/our-work' },
      { label: 'Track Your Order', path: '/login' },
      { label: 'Contact Us', path: '/contact-us' }
    ]
  }

 ];

const Navbar = ({ isBannerVisible } ) => {
    const bannerHeight = 40;  // same as in App.jsx
  const navbarHeight = 64;
  const { cartItems } = useContext(CartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* <Banner /> */}

           <header
                 className="fixed left-0 w-full bg-white z-50 border-b border-gray-300"
      style={{
        top: isBannerVisible ? bannerHeight : 0,
        height: navbarHeight,
        transition: 'top 0.3s ease',
      }}
    >
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

          {/* Mobile Hamburger Left */}
          <div className="flex md:hidden items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mr-3">
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center md:ml-4">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-8 sm:h-10" />
            </Link>
          </div>
          

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {dropdownData.map((menu, index) => (
              <Dropdown
                key={index}
                title={menu.title}
                items={menu.items}
                isRed={index === 2 || index === 3}
                hoverRed={index !== 2 && index !== 3}
              />
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsModalOpen(true)} className="text-black hover:text-gray-600">
              <FaUser size={20} />
            </button>

            <button onClick={() => setIsCartOpen(true)} className="relative text-black hover:text-gray-600">
              <span className="text-xl">🛒</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            {dropdownData.map((menu, index) => (
              <div key={index} className="px-4 py-2 border-b">
                <Dropdown
                  title={menu.title}
                  items={menu.items}
                  isRed={index === 2 || index === 3}
                  hoverRed={index !== 2 && index !== 3}
                />
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform transition-transform duration-300">
          <button onClick={() => setIsCartOpen(false)} className="p-4 text-2xl font-bold">&times;</button>
          <div className="p-4">
            {/* Cart contents here */}
            آپ کا cart items یہاں رکھیں
          </div>
        </div>
      )}

      {/* Modal Popup for Login/Register */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-start justify-center z-50 pt-20">
          <div className="bg-white rounded shadow-lg w-96 p-6 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 text-2xl font-bold">&times;</button>
            <h2 className="text-2xl mb-4">Register / Login</h2>
            {/* آپ کا login/register form یہاں */}
            <p>Put your login/register form here</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
