import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BrandCard from "../components/BrandCard";
import { FaRegSadTear, FaShoppingCart } from "react-icons/fa";
import Spinners from "../components/reuse/Spinners";
import { productsAll } from "../utils";

const BrandPage = () => {
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const result = await productsAll();
        const productsData = Array.isArray(result)
          ? result
          : result.products || [];
        const brandMap = productsData.reduce((acc, product) => {
          const brandName = product.brandName;
          if (!brandName) return acc;

          if (!acc[brandName]) {
            acc[brandName] = {
              id: product.brandId || product._id, // Prefer brandId if available
              name: brandName,
              icon: product.brandLogo || "/default-brand-logo.png",
              productCount: 0,
            };
          }
          acc[brandName].productCount += 1;
          return acc;
        }, {});

        const uniqueBrands = Object.values(brandMap);
        setBrands(uniqueBrands);
      } catch (err) {
        setError(
          err.message.includes("Network Error")
            ? "Network error. Please check your internet connection."
            : "Failed to fetch products. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Featured brands (top 5 by product count)
  const featuredBrands = [...brands]
    .sort((a, b) => b.productCount - a.productCount)
    .slice(0, 5);

  if (loading) {
    return (
      <div className="py-16 text-center">
        <Spinners />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <FaRegSadTear className="mb-4 text-5xl text-gray-300" />
        <h2 className="mb-2 text-2xl font-semibold text-gray-400">Error</h2>
        <p className="max-w-md mb-6 text-gray-500">{error}</p>
        <Link
          to="/shop"
          className="flex items-center gap-2 px-6 py-2 font-medium text-white transition duration-300 bg-[#2196F3] rounded-lg hover:bg-[#1976D2]"
          aria-label="Continue shopping"
        >
          <FaShoppingCart />
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 container-custom md:py-12">
      {/* Hero Section */}
      <div className="p-8 mb-10 text-center bg-[#E3F2FD] rounded-lg">
        <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
          Our Trusted Brands
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Discover high-quality healthcare products from the world's leading
          pharmaceutical and healthcare brands. All products are sourced
          directly from authorized distributors to ensure authenticity.
        </p>
      </div>

      {/* Featured Brands Section */}
      <section className="mb-12" aria-labelledby="featured-brands-heading">
        <div className="flex flex-col items-center justify-between mb-6 md:flex-row">
          <h2
            id="featured-brands-heading"
            className="mb-4 text-2xl font-bold text-gray-800 md:mb-0"
          >
            Featured Brands
          </h2>
          <Link
            to="/shop"
            className="text-[#2196F3] font-medium hover:underline"
            aria-label="View all products"
          >
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {featuredBrands.map((brand) => (
            <div
              key={brand.id}
              className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm"
            >
              <BrandCard brandName={brand} />
            </div>
          ))}
        </div>
      </section>

      {/* All Brands Section */}
      <section aria-labelledby="all-brands-heading">
        <h2
          id="all-brands-heading"
          className="mb-6 text-2xl font-bold text-gray-800"
        >
          All Brands
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <BrandCard brandName={brand} />
            </div>
          ))}
        </div>
      </section>

      {/* Brand Categories Section */}
      <section
        className="mt-12 p-6 bg-gray-50 rounded-lg"
        aria-labelledby="brand-categories-heading"
      >
        <h2
          id="brand-categories-heading"
          className="mb-6 text-xl font-bold text-gray-800"
        >
          Browse by Brand Category
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Link
            to="/shop?category=pharmaceuticals"
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            aria-label="Browse Pharmaceuticals"
          >
            <h3 className="mb-2 text-lg font-medium text-gray-800">
              Pharmaceuticals
            </h3>
            <p className="text-sm text-gray-600">
              Prescription and over-the-counter medications
            </p>
          </Link>
          <Link
            to="/shop?category=supplements"
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            aria-label="Browse Supplements"
          >
            <h3 className="mb-2 text-lg font-medium text-gray-800">
              Supplements
            </h3>
            <p className="text-sm text-gray-600">
              Vitamins, minerals, and nutritional supplements
            </p>
          </Link>
          <Link
            to="/shop?category=medical-devices"
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            aria-label="Browse Medical Devices"
          >
            <h3 className="mb-2 text-lg font-medium text-gray-800">
              Medical Devices
            </h3>
            <p className="text-sm text-gray-600">
              Healthcare equipment and monitoring devices
            </p>
          </Link>
          <Link
            to="/shop?category=personal-care"
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            aria-label="Browse Personal Care"
          >
            <h3 className="mb-2 text-lg font-medium text-gray-800">
              Personal Care
            </h3>
            <p className="text-sm text-gray-600">
              Skincare, haircare, and personal hygiene products
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BrandPage;
