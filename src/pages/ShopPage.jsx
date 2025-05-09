import { useState, useEffect, useMemo } from "react";
import { Search, Filter, ChevronDown, X } from "lucide-react";
import { FaRegSadTear, FaShoppingCart } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { productsAll } from "../utils";
import Spinners from "../components/reuse/Spinners";

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "all",
    priceRange: searchParams.get("priceRange") || "all",
    brand: searchParams.get("brand") || "all",
    inStock: searchParams.get("inStock") === "true",
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeSort, setActiveSort] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const brandFromQuery = searchParams.get("brand") || "all";
    const categoryFromQuery = searchParams.get("category") || "all";
    const priceRangeFromQuery = searchParams.get("priceRange") || "all";
    const inStockFromQuery = searchParams.get("inStock") === "true";
    setFilters((prev) => ({
      ...prev,
      brand: brandFromQuery,
      category: categoryFromQuery,
      priceRange: priceRangeFromQuery,
      inStock: inStockFromQuery,
    }));
  }, [searchParams]);

  // Update URL when filters change
  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    if (filters.brand !== "all") newSearchParams.set("brand", filters.brand);
    if (filters.category !== "all")
      newSearchParams.set("category", filters.category);
    if (filters.priceRange !== "all")
      newSearchParams.set("priceRange", filters.priceRange);
    if (filters.inStock) newSearchParams.set("inStock", "true");
    setSearchParams(newSearchParams);
  }, [filters, setSearchParams]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const result = await productsAll();
        const productsData = Array.isArray(result)
          ? result
          : result.products || [];

        if (!productsData.length) {
          setError("No products found.");
        }
        setProducts(productsData);
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

  const categories = useMemo(() => {
    const cats = [
      ...new Set(products.map((product) => product.category).filter(Boolean)),
    ];
    return cats;
  }, [products]);

  const brands = useMemo(() => {
    const brnds = [
      ...new Set(
        products
          .map((product) => product.brandName?.trim())
          .filter((brandName) => brandName)
      ),
    ];

    return brnds;
  }, [products]);

  // Validate brand query parameter
  useEffect(() => {
    const brandFromQuery = searchParams.get("brand") || "all";
    if (brandFromQuery !== "all" && !brands.includes(brandFromQuery)) {
      setFilters((prev) => ({ ...prev, brand: "all" }));
    }
  }, [searchParams, brands]);

  const priceRanges = [
    { label: "Under ₦2,000", value: "under-2000" },
    { label: "₦2,000 - ₦5,000", value: "2000-5000" },
    { label: "₦5,000 - ₦10,000", value: "5000-10000" },
    { label: "Over ₦10,000", value: "over-10000" },
  ];

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const filteredProducts = products.filter((product) => {
    if (!product) return false;

    if (filters.category !== "all" && product.category !== filters.category) {
      return false;
    }
    if (
      filters.brand !== "all" &&
      product.brandName?.toLowerCase() !== filters.brand.toLowerCase()
    ) {
      return false;
    }
    if (filters.priceRange !== "all") {
      if (filters.priceRange === "under-2000" && product.price >= 2000) {
        return false;
      } else if (
        filters.priceRange === "2000-5000" &&
        (product.price < 2000 || product.price > 5000)
      ) {
        return false;
      } else if (
        filters.priceRange === "5000-10000" &&
        (product.price < 5000 || product.price > 10000)
      ) {
        return false;
      } else if (
        filters.priceRange === "over-10000" &&
        product.price <= 10000
      ) {
        return false;
      }
    }
    if (filters.inStock && !product.inStock) {
      return false;
    }
    if (
      searchQuery &&
      !product.name?.toLowerCase().includes(searchQuery) &&
      !product.category?.toLowerCase().includes(searchQuery) &&
      !(product.brandName || "").toLowerCase().includes(searchQuery)
    ) {
      return false;
    }
    return true;
  });
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (activeSort === "price-low") {
      return a.price - b.price;
    } else if (activeSort === "price-high") {
      return b.price - a.price;
    } else if (activeSort === "newest") {
      return a.isNew ? -1 : 1;
    }
    return 0;
  });

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
      <div className="flex flex-col justify-between mb-8 md:flex-row">
        <h1 className="mb-4 text-2xl font-bold md:text-3xl md:mb-0">
          {filters.brand !== "all"
            ? `${filters.brand} Products`
            : "Shop Products"}
        </h1>
        <div className="relative">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full md:w-60 lg:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 pl-10"
                aria-label="Search products"
              />
              <Search
                className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2"
                size={18}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg md:hidden hover:bg-gray-200"
              aria-label="Toggle filters"
            >
              <Filter size={18} />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="hidden md:block">
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="mb-4 text-lg font-bold">Filters</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-medium">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === "all"}
                        onChange={() => handleFilterChange("category", "all")}
                        className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                      />
                      <span className="ml-2 text-gray-700">All Categories</span>
                    </label>
                  </li>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={filters.category === category}
                          onChange={() =>
                            handleFilterChange("category", category)
                          }
                          className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                        />
                        <span className="ml-2 text-gray-700">{category}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Price Range</h3>
                <ul className="space-y-2">
                  <li>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={filters.priceRange === "all"}
                        onChange={() => handleFilterChange("priceRange", "all")}
                        className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                      />
                      <span className="ml-2 text-gray-700">All Prices</span>
                    </label>
                  </li>
                  {priceRanges.map((range, index) => (
                    <li key={index}>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="priceRange"
                          checked={filters.priceRange === range.value}
                          onChange={() =>
                            handleFilterChange("priceRange", range.value)
                          }
                          className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                        />
                        <span className="ml-2 text-gray-700">
                          {range.label}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Brands</h3>
                <ul className="space-y-2">
                  <li>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="brand"
                        checked={filters.brand === "all"}
                        onChange={() => handleFilterChange("brand", "all")}
                        className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                      />
                      <span className="ml-2 text-gray-700">All Brands</span>
                    </label>
                  </li>
                  {brands.map((brand, index) => (
                    <li key={index}>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="brand"
                          checked={filters.brand === brand}
                          onChange={() => handleFilterChange("brand", brand)}
                          className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                        />
                        <span className="ml-2 text-gray-700">{brand}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) =>
                      handleFilterChange("inStock", e.target.checked)
                    }
                    className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                  />
                  <span className="ml-2 text-gray-700">In Stock Only</span>
                </label>
              </div>
              <button
                onClick={() =>
                  setFilters({
                    category: "all",
                    priceRange: "all",
                    brand: "all",
                    inStock: false,
                  })
                }
                className="text-[#2196F3] text-sm font-medium mt-2"
                aria-label="Clear all filters"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>

        {showFilters && (
          <div className="p-4 mb-4 bg-white rounded-lg shadow md:hidden">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-500"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-medium">Categories</h3>
                <select
                  value={filters.category}
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                  className="w-full p-2 text-sm border border-gray-300 rounded-md"
                  aria-label="Select category"
                >
                  <option value="all">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Price Range</h3>
                <select
                  value={filters.priceRange}
                  onChange={(e) =>
                    handleFilterChange("priceRange", e.target.value)
                  }
                  className="w-full p-2 text-sm border border-gray-300 rounded-md"
                  aria-label="Select price range"
                >
                  <option value="all">All Prices</option>
                  {priceRanges.map((range, index) => (
                    <option key={index} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Brands</h3>
                <select
                  value={filters.brand}
                  onChange={(e) => handleFilterChange("brand", e.target.value)}
                  className="w-full p-2 text-sm border border-gray-300 rounded-md"
                  aria-label="Select brand"
                >
                  <option value="all">All Brands</option>
                  {brands.map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) =>
                      handleFilterChange("inStock", e.target.checked)
                    }
                    className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                  />
                  <span className="ml-2 text-gray-700">In Stock Only</span>
                </label>
              </div>
              <div className="flex justify-between pt-4">
                <button
                  onClick={() =>
                    setFilters({
                      category: "all",
                      priceRange: "all",
                      brand: "all",
                      inStock: false,
                    })
                  }
                  className="text-[#2196F3] text-sm font-medium"
                  aria-label="Clear all filters"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="bg-[#2196F3] text-white px-4 py-2 rounded-md text-sm"
                  aria-label="Apply filters"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="md:col-span-3">
          <div className="flex items-center justify-between p-3 mb-6 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-medium">{sortedProducts.length}</span>{" "}
              products
            </p>
            <div className="flex items-center gap-2">
              <span className="hidden text-sm text-gray-500 sm:inline">
                Sort by:
              </span>
              <div className="relative">
                <select
                  value={activeSort}
                  onChange={(e) => setActiveSort(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:border-[#2196F3] text-sm"
                  aria-label="Sort products"
                >
                  <option value="popular">Popular</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown
                  className="absolute text-gray-400 transform -translate-y-1/2 pointer-events-none right-2 top-1/2"
                  size={16}
                />
              </div>
            </div>
          </div>

          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  product={{
                    ...product,
                    id: product._id,
                    image:
                      product.images?.[0] || "https://via.placeholder.com/150",
                    brand: product.brandName,
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 bg-white rounded-lg shadow">
              <FaRegSadTear className="mb-4 text-5xl text-gray-300" />
              <h3 className="mb-2 text-lg font-medium text-gray-800">
                No Products Found
              </h3>
              <p className="max-w-md mb-6 text-center text-gray-500">
                We couldn't find any products that match your filters. Try
                changing your filters or browse our other categories.
              </p>
              <button
                onClick={() =>
                  setFilters({
                    category: "all",
                    priceRange: "all",
                    brand: "all",
                    inStock: false,
                  })
                }
                className="bg-[#2196F3] text-white px-4 py-2 rounded-md text-sm"
                aria-label="Clear filters"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
