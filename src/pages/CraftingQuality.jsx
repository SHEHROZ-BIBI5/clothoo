 import React from "react";

const CraftingQuality = () => {
  const cards = [
    {
      title: "Beyond Just Jackets",
      text: "From varsity coats to team gear, Clothoo crafts bespoke outerwear and quality varsity jackets that reflect identity, pride, and school legacy.",
    },
    {
      title: "Made for Every Occasion",
      text: "Whether you’re a high school senior, club member, or alumni, our jackets deliver a perfect fit and personalized experience every time.",
    },
    {
      title: "Quality in Every Thread",
      text: "Designed with high quality standards and quality materials like melton wool, cowhide leather, and chenille patches. Built for durability and comfort.",
    },
    {
      title: "Legacy You Can Wear",
      text: "More than apparel — every jacket is a custom varsity piece and timeless badge of honor crafted to celebrate your unique journey.",
    },
  ];

  return (
    <div className="py-10 px-4 max-w-[1200px] mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Crafting Quality Varsity Jackets
        </h1>
        <p className="text-gray-600 mb-4">
          Crafted to honor your story — built with quality, designed with care.
        </p>
        <h3 className="text-xl font-semibold text-gray-800">
          Why Our Clothing Varsity Jackets Stand Out
        </h3>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h5 className="text-center font-semibold text-red-500 mb-2">
              {card.title}
            </h5>
            <p className="text-gray-600 text-center text-sm">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftingQuality;
