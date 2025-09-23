 import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import { IoAdd, IoRemove } from "react-icons/io5";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "Top Products",
      links: [
        "Varsity Jackets",
        "Bomber Jackets",
        "Fleece Hoodies",
        "Puffer Jackets",
        "Coach Jackets",
      ],
    },
    {
      title: "School & Teams",
      links: [
        "School Jackets",
        "Team Jackets",
        "Club Jackets",
        "Senior Jackets",
        "Crop Jackets",
      ],
    },
    {
      title: "About Clothoo",
      links: [
        "About Us",
        "Blog",
        "Customer Reviews",
        "Gallery: Our Work",
        "Our Factory",
      ],
    },
    {
      title: "Customer Support",
      links: [
        "FAQs",
        "Size Guide",
        "Shipping & Delivery",
        "Returns & Exchanges",
        "Contact Us",
      ],
    },
  ];

  return (
    <footer className="bg-[#19192f] text-white">
      {/* Desktop Footer */}
      <div className="hidden md:grid max-w-[1200px] mx-auto px-4 py-10 grid-cols-4 gap-8">
        {sections.map((sec, idx) => (
          <div key={idx}>
            <h3 className="font-semibold mb-4 text-lg">{sec.title}</h3>
            <ul className="space-y-2 text-sm">
              {sec.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden max-w-[1200px] mx-auto px-4 py-6">
        {sections.map((sec, idx) => (
          <div key={idx} className="border-b border-gray-700 py-3">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center text-left font-semibold text-lg"
            >
              <span>{sec.title}</span>
              {openIndex === idx ? <IoRemove /> : <IoAdd />}
            </button>
            {openIndex === idx && (
              <ul className="mt-2 space-y-2 text-sm text-gray-300">
                {sec.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Social & Payment */}
      <div className="border-t border-gray-700 py-6 px-4 ">
        <div className="max-w-[1200px] mx-auto flex flex-col  gap-6">
          {/* Social */}
          <div className="flex gap-4 text-lg  items-start ">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
          </div>

          {/* Payments */}
          <div className="text-center items-center">
            <p className="text-sm font-semibold mb-2">
              Secure Payments & Checkout
            </p>
            <div className="flex gap-4 justify-center text-3xl mb-1">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
            </div>
            <p className="text-xs text-gray-300">
              Secure Checkout Guaranteed
            </p>
          </div>

          {/* Bottom */}
        </div>
                  <p className="text-xs text-gray-400 text-right">
            Clothoo© 2013–2025. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;
