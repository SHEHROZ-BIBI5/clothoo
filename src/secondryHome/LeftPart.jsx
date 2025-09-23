  import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import DropdownForm from "./DropdownForm";

const faqData = [
  {
    question: "Materials & style",
    answer: (
      <>
      <div>
        <h1>Body Material</h1>
        <DropdownForm/>
      </div>
         <br />
       </>
    ),
  },
  {
    question: "Advance Options",
    answer: (
      <>
      <h1>Jacket Size</h1>
       const JacketSize = [
      "M",
      "S",
      "XS",
     "XXS",
     "select",
  ];
         for your right size.
      </>
    ),
  },
  {
    question: "Add Colors",
    answer: (
      <>
          <a href="/design-your-own" className="text-blue-400 underline">
          {" "}Start designing here.
        </a>
      </>
    ),
  },
  {
    question: "Add Designs",
    answer: (
      <>
         <a href="/design-your-own" className="text-blue-400 underline">
          build your jacket online
        </a>{" "}
        and see real-time pricing with all options included.
        We ship across the USA and Canada, and there are no minimum order requirements.
      </>
    ),
  },
  {
    question: "Select Size",
    answer: (
      <>
            <h1>Jacket Size</h1>
       const JacketSize = [
      "M",
      "S",
      "XS",
     "XXS",
     "select",
  ];
       </>
    ),
  },
];

const LeftPart = () => {
    const [openIndex, setOpenIndex] = useState(null);
      const [JacketSize, setJacketSize] = useState("");
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div> 
           <div className="max-w-3xl mx-auto p-4 ml-20 justify-start">       
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
          <div>
        <h1>Collar Style</h1>
        <select value={JacketSize} onChange={(e) => setJacketSize(e.target.value)}>
          <option value="">M</option>
          {JacketSize.map((c, idx) => (
            <option key={idx} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      
  </div>
  )
}

export default LeftPart