// Header.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  ShoppingCart,
  Heart,
  User,
  Search,
  Menu,
  X,
  Phone,
} from "lucide-react";
import { searchProducts } from "../utils";

const Phonenumber = "08142874556";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // For mobile search toggle
  const { cartItems } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [problem, setProblem] = useState("");
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null); // For search dropdown positioning
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false); // Close search if menu opens
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false); // Close menu if search opens
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        setIsLoading(true);
        searchProducts(searchQuery)
          .then((result) => {
            setItems(result.products || []);
            setProblem("");
          })
          .catch((err) => setProblem(err.message))
          .finally(() => setIsLoading(false));
      } else {
        setItems([]);
        setProblem("");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setItems([]);
        setProblem("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categories = [
    "Vitamins",
    "Protein",
    "Omega Fatty Acids",
    "Performance",
    "Minerals",
    "Herbs",
    "Supplements",
    "Beauty & Personal Care",
    "Medical Devices",
    "Pain Relief",
    "Skin Care",
    "Pharmacy",
    "Sexual Wellbeing",
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div>
        
      </div>
      <div
        className={`bg-white ${
          isScrolled ? "shadow-md py-2" : "py-4"
        } transition-all duration-300`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold text-[#2196F3]">
                Medzion<span className="text-[#87CEEB]">Pharma</span>
              </span>
            </Link>

            <div className="flex items-center gap-6">
              {/* Desktop Search Bar */}
              <div
                className="relative hidden sm:block md:w-64 lg:w-80"
                ref={searchRef}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full py-2 pl-10 pr-4 transition-all duration-200 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#2196F3] focus:border-[#2196F3]"
                />
                <Search
                  size={18}
                  className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2"
                />
                {isLoading && (
                  <div className="absolute transform -translate-y-1/2 right-4 top-1/2">
                    <div className="w-4 h-4 border-2 border-[#2196F3] rounded-full border-t-transparent animate-spin"></div>
                  </div>
                )}
                {items.length > 0 && (
                  <ul className="absolute z-50 w-full mt-2 overflow-y-auto text-black bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 top-full">
                    {items.map((item) => (
                      <li
                        key={item._id}
                        className="border-b border-gray-100 last:border-b-0"
                      >
                        <Link
                          to={`/products/${item._id}`}
                          onClick={() => setSearchQuery("")}
                          className="block px-4 py-3 transition-colors duration-150 hover:bg-gray-50"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{item.name}</span>
                            <span className="font-semibold text-[#2196F3]">
                              ₦{item.price.toFixed(2)}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {problem && searchQuery && (
                  <div className="absolute z-50 w-full p-3 mt-2 text-red-600 bg-white border border-red-200 rounded-lg shadow-lg top-full">
                    {problem}
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div className="items-center hidden mr-4 lg:flex">
                <Phone size={20} className="text-[#2196F3] mr-2" />
                <div>
                  <p className="text-[14px] text-gray-500">
                    Sales & Service Support
                  </p>
                  <a href={`tel:${Phonenumber}`}>
                    <p className="font-semibold">{Phonenumber}</p>
                  </a>
                </div>
              </div>

              {/* Icons */}
              <div className="flex items-center space-x-4">
                <Link
                  to="/wishlist"
                  className="text-gray-700 hover:text-[#2196F3] hidden md:block"
                >
                  <Heart size={20} />
                </Link>
                <Link
                  to="/cart"
                  className="text-gray-700 hover:text-[#2196F3] relative"
                >
                  <ShoppingCart size={20} />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#2196F3] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {totalItems}
                    </span>
                  )}
                </Link>
                <button
                  onClick={toggleSearch}
                  className="text-gray-700 hover:text-orange-500 sm:hidden"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
                <button
                  className="text-gray-700 hover:text-[#2196F3] md:hidden"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="mt-3 md:hidden" ref={searchRef}>
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full py-2 pl-10 pr-4 transition-all duration-200 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#2196F3] focus:border-[#2196F3]"
                />
                <Search
                  size={18}
                  className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2"
                />
                {isLoading && (
                  <div className="absolute transform -translate-y-1/2 right-4 top-1/2">
                    <div className="w-4 h-4 border-2 border-[#2196F3] rounded-full border-t-transparent animate-spin"></div>
                  </div>
                )}
                {items.length > 0 && (
                  <ul className="absolute z-50 w-full mt-2 overflow-y-auto text-black bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 top-full">
                    {items.map((item) => (
                      <li
                        key={item._id}
                        className="border-b border-gray-100 last:border-b-0"
                      >
                        <Link
                          to={`/product/${item._id}`}
                          onClick={() => {
                            setSearchQuery("");
                            setIsSearchOpen(false);
                          }}
                          className="block px-4 py-3 transition-colors duration-150 hover:bg-gray-50"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{item.name}</span>
                            <span className="font-semibold text-[#2196F3]">
                              ₦{item.price.toFixed(2)}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {problem && searchQuery && (
                  <div className="absolute z-50 w-full p-3 mt-2 text-red-600 bg-white border border-red-200 rounded-lg shadow-lg top-full">
                    {problem}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden border-b border-gray-200 bg-gray-50 md:block">
        <div className="container-custom">
          <div className="flex items-center justify-center">
            <div className="relative group">
              <button className="flex items-center space-x-2 py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]">
                <Menu size={18} />
                <span>All Categories</span>
              </button>
              <div className="absolute left-0 z-40 hidden w-56 bg-white rounded-b-lg shadow-lg top-full group-hover:block">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/shop?category=${category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/"
              className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]"
            >
              Shop
            </Link>
            <Link
              to="/brand"
              className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]"
            >
              Shop by Brand
            </Link>
            <Link
              to="/shop?type=category"
              className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]"
            >
              Shop by Category
            </Link>
            <Link
              to="/blog"
              className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]"
            >
              Pharmacy Blog
            </Link>
            <Link
              to="/contact"
              className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]"
            >
              Contact us
            </Link>
            <Link
              to="/about"
              className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]"
            >
             About Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 z-50 w-full px-4 py-4 bg-white shadow-lg md:hidden top-full">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/brand"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop by Brand
            </Link>
            <Link
              to="/shop?type=category"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop by Category
            </Link>
            <Link
              to="/blog"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pharmacy Blog
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex justify-between pt-2">
              <Link
                to="/account"
                className="text-gray-700 hover:text-[#2196F3] flex items-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={18} /> Account
              </Link>
              <Link
                to="/wishlist"
                className="text-gray-700 hover:text-[#2196F3] flex items-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart size={18} /> Wishlist
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
