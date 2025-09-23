 import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Dropdown = ({ title, items, isRed = false, hoverRed = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  let hoverTimer;

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
      clearTimeout(hoverTimer);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      clearTimeout(hoverTimer);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      hoverTimer = setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <button
        onClick={handleClick}
        className={`flex items-center font-semibold ${
          isRed ? 'text-red-600' : 'text-black'
        } ${hoverRed ? 'hover:text-red-600' : ''} ${isOpen ? 'text-red-600' : ''}`}
      >
        {title}
        <span className="ml-1">{isOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}</span>
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            isMobile ? 'relative mt-2 w-full' : 'top-full left-0 mt-2 min-w-[200px]'
          } bg-white shadow-lg border border-gray-200 z-50`}
        >
          <ul>
            {items.map((item, index) => (
              <li key={index} className="border-b last:border-b-0 hover:bg-gray-50">
                <Link
                  to={item.path}
                  className="block px-4 py-3 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
