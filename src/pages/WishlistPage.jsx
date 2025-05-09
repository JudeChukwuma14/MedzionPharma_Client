"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Heart, ShoppingCart, Trash2, Share2, AlertCircle } from "lucide-react"
import { useCart } from "../context/CartContext"

const WishlistPage = () => {
  // In a real app, this would be managed by a context or fetched from an API
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("MedzionPharma-wishlist")
    return savedWishlist ? JSON.parse(savedWishlist) : []
  })

  const { addToCart } = useCart()
  const [shareModalOpen, setShareModalOpen] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("MedzionPharma-wishlist", JSON.stringify(wishlistItems))
  }, [wishlistItems])

  // Sample wishlist data for demonstration
  useEffect(() => {
    if (wishlistItems.length === 0) {
      setWishlistItems([
        {
          id: 1,
          name: "Vitamin C 1000mg",
          price: 3500,
          discount: 0,
          image: "/placeholder.svg?height=300&width=300",
          category: "Vitamins",
          inStock: true,
        },
        {
          id: 5,
          name: "Pain Relief Gel",
          price: 1800,
          discount: 5,
          image: "/placeholder.svg?height=300&width=300",
          category: "Pain Relief",
          inStock: true,
        },
        {
          id: 9,
          name: "Omega-3 Fish Oil",
          price: 4800,
          discount: 10,
          image: "/placeholder.svg?height=300&width=300",
          category: "Supplements",
          inStock: true,
        },
      ])
    }
  }, [wishlistItems.length])

  const handleRemoveFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id))
  }

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  const handleClearWishlist = () => {
    setWishlistItems([])
  }

  const handleShareWishlist = () => {
    setShareModalOpen(true)
  }

  const handleCopyLink = () => {
    // In a real app, this would generate a shareable link
    navigator.clipboard.writeText("https://MedzionPharma.com/shared-wishlist/user123")
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
  }

  return (
    <div className="container-custom py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">My Wishlist</h1>
          <p className="text-gray-600">
            {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} saved for later
          </p>
        </div>

        {wishlistItems.length > 0 && (
          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              onClick={handleShareWishlist}
              className="flex items-center gap-1 text-[#2196F3] hover:text-[#1976D2] font-medium"
            >
              <Share2 size={18} /> Share List
            </button>
            <button
              onClick={handleClearWishlist}
              className="flex items-center gap-1 text-red-500 hover:text-red-700 font-medium"
            >
              <Trash2 size={18} /> Clear All
            </button>
          </div>
        )}
      </div>

      {wishlistItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 p-4 rounded-full">
              <Heart size={48} className="text-gray-400" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Save your favorite products to your wishlist for easy access later.
          </p>
          <Link to="/shop" className="btn-accent">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative">
                <Link to={`/products/${item.id}`}>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:bg-red-50"
                >
                  <Trash2 size={16} className="text-red-500" />
                </button>

                {!item.inStock && (
                  <div className="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-xs py-1 text-center">
                    Out of Stock
                  </div>
                )}
              </div>

              <div className="p-4">
                <Link to={`/products/${item.id}`} className="block">
                  <h3 className="font-medium text-gray-800 mb-1 hover:text-[#2196F3]">{item.name}</h3>
                </Link>
                <div className="text-sm text-gray-500 mb-3">{item.category}</div>

                <div className="flex items-center justify-between mb-4">
                  {item.discount > 0 ? (
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#2196F3]">
                        ₦{((item.price * (100 - item.discount)) / 100).toFixed(2)}
                      </span>
                      <span className="text-gray-500 text-sm line-through">₦{item.price.toFixed(2)}</span>
                    </div>
                  ) : (
                    <span className="font-bold text-[#2196F3]">₦{item.price.toFixed(2)}</span>
                  )}

                  {item.discount > 0 && (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded">{item.discount}% OFF</span>
                  )}
                </div>

                <button
                  onClick={() => handleAddToCart(item)}
                  disabled={!item.inStock}
                  className={`w-full py-2 px-3 rounded flex items-center justify-center transition-all ${
                    item.inStock
                      ? "bg-[#87CEEB] hover:bg-[#2196F3] text-white"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <ShoppingCart size={16} className="mr-1" />
                  {item.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Share Wishlist Modal */}
      {shareModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Share Your Wishlist</h3>

            <div className="mb-6">
              <p className="text-gray-600 mb-3">Share your wishlist with friends and family via a unique link:</p>
              <div className="flex">
                <input
                  type="text"
                  value="https://MedzionPharma.com/shared-wishlist/user123"
                  readOnly
                  className="flex-grow rounded-l-lg border-gray-300 bg-gray-50"
                />
                <button
                  onClick={handleCopyLink}
                  className="bg-[#2196F3] hover:bg-[#1976D2] text-white font-medium px-4 rounded-r-lg transition-colors"
                >
                  {copySuccess ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-6 flex items-start">
              <AlertCircle size={18} className="text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-yellow-800">Anyone with this link will be able to view your wishlist items.</p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShareModalOpen(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WishlistPage
