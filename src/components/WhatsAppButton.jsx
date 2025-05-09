"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // WhatsApp number - replace with your actual number
  const whatsappNumber = "+2348176765163"; 

  // Handle scroll behavior - hide when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleWhatsAppClick = () => {
    // Open WhatsApp with predefined message
    const message = "Hello! I'm interested in your products at MedzionPharma.";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-28"
      }`}
    >
      {/* Popup message */}
      {isOpen && (
        <div className="absolute right-0 w-64 p-4 mb-2 bg-white rounded-lg shadow-lg bottom-16 animate-fade-in">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
          >
            <X size={16} />
          </button>
          <p className="mb-3 text-gray-800">
            Need help with your order or have questions?
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#20BD5C] text-white py-2 px-4 rounded-lg w-full flex items-center justify-center"
          >
            <FaWhatsapp size={18} className="mr-2" />
            Chat with us now
          </button>
        </div>
      )}

      {/* WhatsApp button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#20BD5C] text-white p-4 rounded-full shadow-lg flex items-center justify-center relative"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={24} className="animate-pulse" />

        {/* Notification dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
