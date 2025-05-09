"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import { FaWhatsapp } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const adminPhoneNumber = "+2348176765163";
  const whatsappMessage = `Hello! I'm interested in your product: ${product.name}, MedzionPharma Website`;
  const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      className="card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="object-cover w-full transition-transform duration-500 h-52 group-hover:scale-105"
          />
          {product.isNew && (
            <span className="absolute px-2 py-1 text-xs text-white bg-blue-500 rounded-md top-2 left-2">
              New
            </span>
          )}
          {product.discount > 0 && (
            <span className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-md top-2 right-2">
              -{product.discount}%
            </span>
          )}
          <div
            className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button className="p-2 transition-colors bg-white rounded-full shadow-md hover:bg-blue-500 hover:text-white">
              <Heart size={16} />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 py-1 text-xs text-center text-white bg-black bg-opacity-50">
            {product.stock > 0 ? (
              <span className="flex items-center justify-center gap-1 text-green-300">
                <Check size={12} /> In Stock
              </span>
            ) : (
              <span className="text-red-300">Out of Stock</span>
            )}
          </div>
        </div>
      </Link>
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500">{product.category}</span>
        </div>
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="mb-1 font-semibold text-gray-800 truncate">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {product.discount > 0 ? (
              <>
                <span className="font-bold text-blue-500">
                  ₦
                  {((product.price * (100 - product.discount)) / 100).toFixed(
                    2
                  )}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ₦{product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="font-bold text-blue-500">
                ₦{product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleAddToCart}
            disabled={product.stock <= 0 || isAddedToCart}
            className={`w-full py-2 px-3 rounded flex items-center justify-center transition-all ${
              isAddedToCart
                ? "bg-green-500 text-white"
                : product.stock > 0
                ? "bg-sky-300 hover:bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isAddedToCart ? (
              <>
                <Check size={16} className="mr-1" /> Added
              </>
            ) : (
              <>
                <ShoppingCart size={16} className="mr-1" /> Add to Cart
              </>
            )}
          </button>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} className="text-[#25D366] cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
