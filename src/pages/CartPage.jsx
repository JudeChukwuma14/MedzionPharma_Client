"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ChevronRight, Info } from "lucide-react"
import { useCart } from "../context/CartContext"

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()
  const [couponCode, setCouponCode] = useState("")
  const [couponError, setCouponError] = useState("")
  const [couponSuccess, setCouponSuccess] = useState("")

  const handleApplyCoupon = (e) => {
    e.preventDefault()

    if (!couponCode) {
      setCouponError("Please enter a coupon code")
      setCouponSuccess("")
      return
    }

    // Example validation
    if (couponCode.toUpperCase() === "WELCOME10") {
      setCouponSuccess("Coupon applied successfully! You got 10% off.")
      setCouponError("")
    } else {
      setCouponError("Invalid coupon code")
      setCouponSuccess("")
    }
  }

  const deliveryFee = 1000
  const subtotal = getCartTotal()
  const total = subtotal + (subtotal > 0 ? deliveryFee : 0)

  return (
    <div className="container-custom py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center mb-4">
            <ShoppingBag size={64} className="text-gray-300" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/shop" className="btn-accent">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4 md:p-6">
            <div className="hidden md:grid grid-cols-12 border-b pb-3 mb-3 text-gray-500 text-sm">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-center">Total</div>
            </div>

            {cartItems.map((item) => {
              const itemTotal = item.discount
                ? ((item.price * (100 - item.discount)) / 100) * item.quantity
                : item.price * item.quantity

              return (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 py-4 border-b gap-4 items-center">
                  {/* Product Info */}
                  <div className="col-span-1 md:col-span-6 flex gap-4">
                    <Link to={`/products/${item.id}`} className="w-20 h-20 flex-shrink-0">
                      <img
                        src={item.image || item.images?.[0]}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </Link>
                    <div>
                      <Link to={`/products/${item.id}`} className="font-medium text-gray-800 hover:text-[#2196F3]">
                        {item.name}
                      </Link>
                      {item.discount > 0 && (
                        <div className="mt-1">
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded">
                            {item.discount}% OFF
                          </span>
                        </div>
                      )}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center text-red-500 text-sm mt-2 hover:text-red-700"
                      >
                        <Trash2 size={14} className="mr-1" /> Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center">
                    <span className="md:hidden text-gray-500">Price:</span>
                    <div>
                      {item.discount > 0 ? (
                        <div>
                          <span className="font-medium">
                            ₦{((item.price * (100 - item.discount)) / 100).toFixed(2)}
                          </span>
                          <span className="text-gray-500 text-sm line-through ml-1">₦{item.price.toFixed(2)}</span>
                        </div>
                      ) : (
                        <span className="font-medium">₦{item.price.toFixed(2)}</span>
                      )}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center">
                    <span className="md:hidden text-gray-500">Quantity:</span>
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-gray-600 hover:bg-gray-100"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                        className="w-10 text-center border-x border-gray-300 py-0.5"
                      />
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-gray-600 hover:bg-gray-100"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center">
                    <span className="md:hidden text-gray-500">Total:</span>
                    <span className="font-medium text-[#2196F3]">₦{itemTotal.toFixed(2)}</span>
                  </div>
                </div>
              )
            })}

            <div className="flex justify-between mt-6">
              <button onClick={clearCart} className="text-red-500 hover:text-red-700 text-sm font-medium">
                Clear Cart
              </button>
              <Link to="/shop" className="text-[#2196F3] hover:text-[#1976D2] text-sm font-medium flex items-center">
                Continue Shopping <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
              <h2 className="font-semibold text-lg text-gray-800 pb-4 border-b mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₦{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">₦{deliveryFee.toFixed(2)}</span>
                </div>
                {couponSuccess && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>-₦{(subtotal * 0.1).toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t pt-3 flex justify-between font-bold text-gray-800">
                  <span>Total</span>
                  <span className="text-[#2196F3]">
                    ₦{couponSuccess ? (total - subtotal * 0.1).toFixed(2) : total.toFixed(2)}
                  </span>
                </div>
              </div>

              <form onSubmit={handleApplyCoupon} className="mb-6">
                <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-1">
                  Apply Coupon Code
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="coupon"
                    placeholder="Enter coupon code"
                    className="flex-grow rounded-l-lg border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-[#2196F3] hover:bg-[#1976D2] text-white font-medium px-4 rounded-r-lg transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {couponError && <p className="mt-1 text-sm text-red-600">{couponError}</p>}
                {couponSuccess && <p className="mt-1 text-sm text-green-600">{couponSuccess}</p>}
              </form>

              <Link to="/checkout" className="w-full btn-success flex items-center justify-center gap-1">
                Proceed to Checkout <ArrowRight size={16} />
              </Link>

              <div className="mt-4 bg-blue-50 rounded-md p-3 text-sm text-blue-800 flex items-start">
                <Info size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <p>Orders over ₦10,000 qualify for free delivery in selected areas.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
