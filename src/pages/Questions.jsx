 import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "When will I receive my custom coat?",
    answer: (
      <>
        We typically craft your custom varsity or letterman jacket within 10–15 days.
        If your order includes embroidery or custom patches, please allow up to 2–3 weeks for production.
        Shipping across the U.S. and Canada takes an additional 3–4 business days.
        <br />
        <a href="/returns-exchanges" className="text-blue-400 underline">
          Learn more about shipping and returns.
        </a>
      </>
    ),
  },
  {
    question: "What sizes are available for jackets?",
    answer: (
      <>
        Our garments come in unisex sizes from XS to 6XL, including tall sizes for the perfect fit.
        Check our{" "}
        <a href="/size-chart" className="text-blue-400 underline">
          guide
        </a>{" "}
        for your right size.
      </>
    ),
  },
  {
    question: "Can I order just one garment from Clothoo?",
    answer: (
      <>
        Yes, we welcome single orders! Whether you're designing a one-of-a-kind piece for yourself
        or outfitting your entire team, there are no minimum order requirements.
        <a href="/design-your-own" className="text-blue-400 underline">
          {" "}Start designing here.
        </a>
      </>
    ),
  },
  {
    question: "How much does a custom varsity jacket cost at Clothoo?",
    answer: (
      <>
        Custom clothing varsity jackets at Clothoo start from $52 and go up depending on materials,
        embroidery, and design. You can{" "}
        <a href="/design-your-own" className="text-blue-400 underline">
          build your jacket online
        </a>{" "}
        and see real-time pricing with all options included.
        We ship across the USA and Canada, and there are no minimum order requirements.
      </>
    ),
  },
  {
    question: "How do I design a letterman jacket online?",
    answer: (
      <>
        It’s easy! Use our{" "}
        <a href="/design-your-own" className="text-blue-400 underline">
          online jacket builder
        </a>{" "}
        to choose your preferred materials, add your school colors, select collar/cuff styles,
        and upload patches or embroidery options. You’ll see your design preview in real time.
      </>
    ),
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 ml-20 justify-start">
       <h1 className="text-2xl font-bold mb-6 text-black relative inline-block">
        <span className="border-b-2 border-red-500 pb-1">Frequently</span> Asked Questions
      </h1>
 
       {faqData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border-b border-gray-300 py-4 transition-colors duration-300 ${
              isOpen ? "text-purple-600" : "text-gray-700"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center w-full text-left gap-3 pr-5"
            >
              {/* Left icon */}
              {isOpen ? (
                <FaMinus className="text-purple-600" />
              ) : (
                <FaPlus className="text-gray-500" />
              )}
              {/* Question text */}
              <span className={`text-lg font-medium ${isOpen ? "text-purple-600" : "text-gray-800"}`}>
                {item.question}
              </span>
            </button>
            {/* Answer */}
            {isOpen && (
              <div className="mt-2 text-gray-700 pr-5">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
