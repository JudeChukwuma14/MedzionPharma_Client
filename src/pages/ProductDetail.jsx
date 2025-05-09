"use client";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Plus,
  Minus,
  Heart,
  Tag,
  DollarSign,
  Package,
  Scale,
  Image as ImageIcon,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { toast } from "react-toastify";
import { formatDate, getProductById, getRelatedProducts } from "../utils";
import Spinners from "../components/reuse/Spinners";
import { FaRegSadTear, FaShoppingCart } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [relatedLoading, setRelatedLoading] = useState(false);
  const { addToCart } = useCart();

  // Fetch main product
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const productData = await getProductById(id);
        console.log("Main product data:", productData); // Debug
        setProduct({
          ...productData.product,
          id: productData.product._id,
          images: productData.product.images || [],
          stock: productData.product.stock || 0,
          discount: productData.product.discount || 0,
          price: productData.product.price || 0,
          costPrice: productData.product.costPrice || 0,
          weight: productData.product.weight || 0,
          sku: productData.product.sku || "N/A",
          brand: productData.product.brandName || "Unknown",
          brandLogo: productData.product.brandLogo || "/placeholder.svg",
          category: productData.product.category || "Vitamins",
          description:
            productData.product.description || "No description available",
          containerType: productData.product.containerType || "N/A",
          productForm: productData.product.productForm || "N/A",
          published: productData.product.published || false,
          featured: productData.product.featured || false,
          createdAt: productData.product.createdAt || new Date().toISOString(),
          updatedAt: productData.product.updatedAt || new Date().toISOString(),
        });
      } catch (err) {
        setError(err.message || "Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Fetch related products
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (!product) return;
      setRelatedLoading(true);
      try {
        const relatedData = await getRelatedProducts(
          product.category,
          2,
          product.id
        );
        console.log("Related products data:", relatedData); // Debug
        setRelatedProducts(
          relatedData.map((p) => ({
            ...p,
            id: p._id,
            images: p.images || [],
            stock: p.stock || 0,
            discount: p.discount || 0,
            price: p.price || 0,
            costPrice: p.costPrice || 0,
            weight: p.weight || 0,
            sku: p.sku || "N/A",
            brand: p.brandName || "Unknown",
            brandLogo: p.brandLogo || "/placeholder.svg",
            category: p.category || "Vitamins",
            description: p.description || "No description available",
            containerType: p.containerType || "N/A",
            productForm: p.productForm || "N/A",
            published: p.published || false,
            featured: p.featured || false,
            isNew: p.isNew || false,
            createdAt: p.createdAt || new Date().toISOString(),
            updatedAt: p.updatedAt || new Date().toISOString(),
          }))
        );
      } catch (err) {
        console.error("Failed to set related products:", err);
        setRelatedProducts([]);
      } finally {
        setRelatedLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [product]);

  // Handle quantity changes
  const handleQuantityChange = (action) => {
    if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (action === "increase" && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  // Add to cart with toast
  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success(`${product.name} added to cart!`, {
      autoClose: 3000,
      position: "top-right",
    });
    setQuantity(1);
  };

  // Loading state for main product
  if (loading) return <Spinners />;

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <FaRegSadTear className="mb-4 text-5xl text-gray-300" />
        <h2 className="mb-2 text-2xl font-semibold text-gray-400">Error</h2>
        <p className="max-w-md mb-6 text-gray-500">{error}</p>
        <Link
          to="/shop"
          className="flex items-center gap-2 px-6 py-2 font-medium text-white transition duration-300 bg-[#2196F3] rounded-lg hover:bg-[#2196F3]"
        >
          <FaShoppingCart />
          Continue Shopping
        </Link>
      </div>
    );
  }

  // Product not found
  if (!product)
    return (
      <div className="p-6 text-center bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          <FaRegSadTear size={64} className="text-gray-300" />
        </div>
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          Empty
        </h2>
        <p className="mb-6 text-gray-600">
          This Product is not available
        </p>
        <Link to="/shop" className="btn-accent">
          Start Shopping
        </Link>
      </div>
    );

  // Calculate discounted price with validation
  const discountedPrice =
    product.discount && product.price
      ? (product.price * (100 - product.discount)) / 100
      : product.price || 0;

  return (
    <div className="container py-8 mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-blue-500">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{product.name}</span>
      </div>

      {/* Product Images and Details */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Product Images */}
        <div className="lg:col-span-1">
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">
                Product Images
              </h2>
            </div>
            <div className="p-4">
              <div className="mb-4 overflow-hidden bg-gray-100 rounded-lg aspect-square">
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[activeImage] || "/placeholder.svg"}
                    alt={product.name}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <ImageIcon className="w-16 h-16 text-gray-400" />
                    <span className="sr-only">No image available</span>
                  </div>
                )}
              </div>
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`aspect-square rounded-md overflow-hidden border-2 ${
                        activeImage === index
                          ? "border-[#2196F3]"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Product thumbnail ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Status */}
          <div className="mt-6 overflow-hidden bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">
                Product Status
              </h2>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-gray-700">
                  Published
                </span>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    product.published
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {product.published ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Yes
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 mr-1" />
                      No
                    </>
                  )}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-gray-700">
                  Featured
                </span>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    product.featured
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {product.featured ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Yes
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 mr-1" />
                      No
                    </>
                  )}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-gray-700">
                  Created
                </span>
                <span className="text-sm text-gray-500">
                  {formatDate(product.createdAt)}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-gray-700">
                  Last Updated
                </span>
                <span className="text-sm text-gray-500">
                  {formatDate(product.updatedAt)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:col-span-2">
          {/* Basic Information */}
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">
                Basic Information
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Product Name
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">{product.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">SKU</h3>
                  <p className="mt-1 text-sm text-gray-900">{product.sku}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Category
                  </h3>
                  <div className="flex items-center mt-1">
                    <Tag className="h-5 w-5 text-gray-400 mr-1.5" />
                    <span className="text-sm text-gray-900">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-sm font-medium text-gray-500">
                    Description
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Inventory */}
          <div className="mt-6 overflow-hidden bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">
                Pricing & Inventory
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Price</h3>
                  <div className="flex items-center mt-1">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-1.5" />
                    {product.discount > 0 && product.price ? (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900">
                          ₦{discountedPrice.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ₦{product.price.toFixed(2)}
                        </span>
                        <span className="px-2 py-1 text-xs text-white bg-red-500 rounded">
                          {product.discount}% OFF
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-900">
                        ₦{(product.price || 0).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Cost Price
                  </h3>
                  <div className="flex items-center mt-1">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-1.5" />
                    <span className="text-sm text-gray-900">
                      ₦{(product.costPrice || 0).toFixed(2)}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Stock Quantity
                  </h3>
                  <div className="flex items-center mt-1">
                    <Package className="h-5 w-5 text-gray-400 mr-1.5" />
                    <span className="text-sm text-gray-900">
                      {product.stock} units
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Weight</h3>
                  <div className="flex items-center mt-1">
                    <Scale className="h-5 w-5 text-gray-400 mr-1.5" />
                    <span className="text-sm text-gray-900">
                      {product.weight} grams
                    </span>
                  </div>
                </div>
              </div>
              {product.stock > 0 && (
                <div className="mt-6">
                  <div className="flex items-center mb-4">
                    <span className="mr-4 text-gray-700">Quantity:</span>
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={() => handleQuantityChange("decrease")}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        disabled={quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <input
                        type="number"
                        min="1"
                        max={product.stock}
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(Number.parseInt(e.target.value) || 1)
                        }
                        className="w-12 py-1 text-center border-gray-300 border-x"
                      />
                      <button
                        onClick={() => handleQuantityChange("increase")}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        disabled={quantity >= product.stock}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleAddToCart}
                      className="flex-grow py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                      disabled={quantity > product.stock}
                    >
                      Add to Cart
                    </button>
                    <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
                      <Heart size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Brand Information */}
          <div className="mt-6 overflow-hidden bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">
                Brand Information
              </h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <div className="w-40 h-20 overflow-hidden bg-gray-100 rounded-md">
                    <img
                      src={product.brandLogo || "/placeholder.svg"}
                      alt={`${product.brand} logo`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Brand Name
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">{product.brand}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-6 overflow-hidden bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">
                Product Details
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Container Type
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">
                    {product.containerType}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Product Form
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">
                    {product.productForm}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-8 mb-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          You Might Also Like
        </h2>
        {relatedLoading ? (
          <div className="text-gray-600">Loading related products...</div>
        ) : relatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={{
                  ...relatedProduct,
                  id: relatedProduct.id,
                  image: relatedProduct.images[0] || "/placeholder.svg",
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-gray-600">No related products available.</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
