 import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/productsData";  // Aapka product data source

const placeholderProduct = {
  name: "Product Not Found",
  code: "N/A",
  retailPrice: 0,
  salePrice: 0,
  discount: 0,
  reviews: 0,
  slug: "products",
  description: "Requested product is not available. Please check other products.",
  images: [
    "/assets/products/product1/iameg1.jpg",
    "/assets/products/product1/image2.jpg",
    "/assets/products/product1/image3.jpg",
    "/assets/productsr/product1/image4.jpg",
  ],
  video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
};

const AlllProducts = () => {
  const { slug } = useParams();
  let product = products.find((p) => p.slug === slug);

  // Agar product na mile to placeholder set karein
  if (!product) {
    product = placeholderProduct;
  }

  const [mainMedia, setMainMedia] = useState(null);

  useEffect(() => {
    if (product.images && product.images.length > 0) {
      setMainMedia(product.images[0]);
    } else {
      setMainMedia(null);
    }
  }, [product]);

  const isVideo = (media) =>
    media?.includes("youtube") || media?.includes("youtu.be") || media?.endsWith(".mp4");

  return (
    <div className="max-w-[1200px] mx-auto p-6 flex flex-col md:flex-row gap-6">
      
      {/* Left side: bada media */}
      <div className="md:w-1/2">
        {mainMedia ? (
          isVideo(mainMedia) ? (
            <iframe
              src={mainMedia}
              title={product.name}
              className="w-full h-64 md:h-[400px]"
              allowFullScreen
            />
          ) : (
            <img src={mainMedia} alt={product.name} className="w-full h-auto rounded" />
          )
        ) : (
          <p>Loading media...</p>
        )}

        {/* Thumbnails for images + video */}
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} image ${index + 1}`}
              onClick={() => setMainMedia(img)}
              className={`w-20 h-20 cursor-pointer border rounded ${
                mainMedia === img ? "border-blue-600" : "border-gray-300"
              }`}
            />
          ))}
          {product.video && (
            <button
              onClick={() => setMainMedia(product.video)}
              className={`w-20 h-20 border rounded cursor-pointer flex items-center justify-center bg-gray-100 ${
                mainMedia === product.video ? "border-blue-600" : "border-gray-300"
              }`}
              aria-label="Play Video"
            >
              ▶
            </button>
          )}
        </div>
      </div>

      {/* Right side: Product details and buttons */}
      <div className="md:w-1/2 space-y-4">
        <div className="flex items-center gap-2 text-gray-500">
          <Link to="/">Home</Link> <span>›</span> <span>{product.name}</span>
        </div>

        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-500">Product Code: {product.code}</p>

        <div className="flex items-center gap-4">
          <span className="text-yellow-400">★★★★★</span>
          <Link to={`/product/${product.slug}#all-reviews`} className="underline text-blue-500">
            {product.reviews} Reviews
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <span className="line-through">${product.retailPrice}</span>
          <span className="text-red-500">${product.salePrice}</span>
          <span className="bg-blue-100 text-green-600 border border-dotted px-2 py-1 rounded">
            {product.discount}% Off Today
          </span>
        </div>

        <p className="text-gray-600">
          🎉 Special Offer: Use code <span className="text-red-500">CL60</span> at checkout to get 60% OFF Today.
        </p>

        <div className="flex gap-4">
          <select className="border px-4 py-2" aria-label="Select Size">
            <option>Select Size</option>
            <option>XXS</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>M/Tall</option>
            <option>L</option>
            <option>L/Tall</option>
            <option>XL</option>
            <option>XL/Tall</option>
            <option>2XL</option>
            <option>2XL/Tall</option>
            <option>3XL</option>
            <option>4XL</option>
            <option>5XL</option>
            <option>6XL</option>
          </select>
          <select className="border px-4 py-2" aria-label="Select Quantity">
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AlllProducts;
