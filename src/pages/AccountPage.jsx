"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  User,
  Package,
  Heart,
  CreditCard,
  MapPin,
  LogOut,
  Edit,
  ChevronRight,
  Eye,
  EyeOff,
  Bell,
  Settings,
} from "lucide-react"

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [showPassword, setShowPassword] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)

  // Sample user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "08012345678",
    address: "123 Main Street, Lagos, Nigeria",
    profileImage: "/placeholder.svg?height=200&width=200",
  }

  // Sample order data
  const orders = [
    {
      id: "ORD-12345",
      date: "May 15, 2023",
      status: "Delivered",
      total: 15500,
      items: 3,
    },
    {
      id: "ORD-12346",
      date: "April 28, 2023",
      status: "Processing",
      total: 8200,
      items: 2,
    },
    {
      id: "ORD-12347",
      date: "April 10, 2023",
      status: "Cancelled",
      total: 3500,
      items: 1,
    },
  ]

  // Sample wishlist data
  const wishlist = [
    {
      id: 1,
      name: "Vitamin C 1000mg",
      price: 3500,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Pain Relief Gel",
      price: 1800,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="py-8 container-custom md:py-12">
      <h1 className="mb-8 text-2xl font-bold text-gray-800 md:text-3xl">My Account</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="overflow-hidden bg-white rounded-lg shadow-md">
            {/* User Profile Summary */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <img
                  src={user.profileImage || "/placeholder.svg"}
                  alt={user.name}
                  className="object-cover w-16 h-16 mr-4 rounded-full"
                />
                <div>
                  <h2 className="font-semibold text-gray-800">{user.name}</h2>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-4">
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`w-full flex items-center px-4 py-2 rounded-md transition-colors ${
                      activeTab === "dashboard" ? "bg-[#E3F2FD] text-[#2196F3]" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <User size={18} className="mr-3" />
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`w-full flex items-center px-4 py-2 rounded-md transition-colors ${
                      activeTab === "orders" ? "bg-[#E3F2FD] text-[#2196F3]" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Package size={18} className="mr-3" />
                    Orders
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("wishlist")}
                    className={`w-full flex items-center px-4 py-2 rounded-md transition-colors ${
                      activeTab === "wishlist" ? "bg-[#E3F2FD] text-[#2196F3]" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Heart size={18} className="mr-3" />
                    Wishlist
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("payment")}
                    className={`w-full flex items-center px-4 py-2 rounded-md transition-colors ${
                      activeTab === "payment" ? "bg-[#E3F2FD] text-[#2196F3]" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <CreditCard size={18} className="mr-3" />
                    Payment Methods
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("addresses")}
                    className={`w-full flex items-center px-4 py-2 rounded-md transition-colors ${
                      activeTab === "addresses" ? "bg-[#E3F2FD] text-[#2196F3]" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <MapPin size={18} className="mr-3" />
                    Addresses
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full flex items-center px-4 py-2 rounded-md transition-colors ${
                      activeTab === "settings" ? "bg-[#E3F2FD] text-[#2196F3]" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Settings size={18} className="mr-3" />
                    Account Settings
                  </button>
                </li>
                <li className="pt-2 mt-2 border-t border-gray-200">
                  <button className="flex items-center w-full px-4 py-2 text-red-500 transition-colors rounded-md hover:bg-red-50">
                    <LogOut size={18} className="mr-3" />
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-6 text-xl font-semibold text-gray-800">Dashboard</h2>

              <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3">
                <div className="bg-[#E3F2FD] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-800">Orders</h3>
                    <Package size={20} className="text-[#2196F3]" />
                  </div>
                  <p className="text-2xl font-bold text-[#2196F3]">{orders.length}</p>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className="text-sm text-[#2196F3] mt-2 flex items-center hover:underline"
                  >
                    View all <ChevronRight size={14} />
                  </button>
                </div>

                <div className="bg-[#E8F5E9] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-800">Wishlist</h3>
                    <Heart size={20} className="text-[#4CAF50]" />
                  </div>
                  <p className="text-2xl font-bold text-[#4CAF50]">{wishlist.length}</p>
                  <button
                    onClick={() => setActiveTab("wishlist")}
                    className="text-sm text-[#4CAF50] mt-2 flex items-center hover:underline"
                  >
                    View all <ChevronRight size={14} />
                  </button>
                </div>

                <div className="bg-[#FFF8E1] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-800">Pending</h3>
                    <Bell size={20} className="text-[#FFC107]" />
                  </div>
                  <p className="text-2xl font-bold text-[#FFC107]">1</p>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className="text-sm text-[#FFC107] mt-2 flex items-center hover:underline"
                  >
                    View all <ChevronRight size={14} />
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Recent Orders</h3>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className="text-sm text-[#2196F3] flex items-center hover:underline"
                  >
                    View all <ChevronRight size={14} />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Order ID
                        </th>
                        <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Date
                        </th>
                        <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Total
                        </th>
                        <th className="px-4 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orders.slice(0, 3).map((order) => (
                        <tr key={order.id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{order.id}</td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{order.date}</td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : order.status === "Processing"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            ₦{order.total.toLocaleString()}
                          </td>
                          <td className="px-4 py-4 text-sm text-right whitespace-nowrap">
                            <button className="text-[#2196F3] hover:underline">View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Account Information</h3>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className="text-sm text-[#2196F3] flex items-center hover:underline"
                  >
                    Edit <Edit size={14} className="ml-1" />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="p-4 rounded-lg bg-gray-50">
                    <h4 className="mb-2 text-sm font-medium text-gray-500">Contact Information</h4>
                    <p className="mb-1 text-gray-800">{user.name}</p>
                    <p className="mb-1 text-gray-800">{user.email}</p>
                    <p className="text-gray-800">{user.phone}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-50">
                    <h4 className="mb-2 text-sm font-medium text-gray-500">Default Shipping Address</h4>
                    <p className="text-gray-800">{user.address}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-6 text-xl font-semibold text-gray-800">My Orders</h2>

              {orders.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Order ID
                        </th>
                        <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Date
                        </th>
                        <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Items
                        </th>
                        <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                          Total
                        </th>
                        <th className="px-4 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{order.id}</td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{order.date}</td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : order.status === "Processing"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{order.items}</td>
                          <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                            ₦{order.total.toLocaleString()}
                          </td>
                          <td className="px-4 py-4 text-sm text-right whitespace-nowrap">
                            <button className="text-[#2196F3] hover:underline mr-3">View</button>
                            {order.status === "Delivered" && (
                              <button className="text-[#4CAF50] hover:underline">Reorder</button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="py-8 text-center">
                  <Package size={48} className="mx-auto mb-4 text-gray-300" />
                  <h3 className="mb-2 text-lg font-medium text-gray-800">No orders yet</h3>
                  <p className="mb-4 text-gray-500">You haven't placed any orders yet.</p>
                  <Link to="/shop" className="btn-accent">
                    Start Shopping
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Wishlist Tab */}
          {activeTab === "wishlist" && (
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-6 text-xl font-semibold text-gray-800">My Wishlist</h2>

              {wishlist.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {wishlist.map((item) => (
                    <div key={item.id} className="flex overflow-hidden border border-gray-200 rounded-lg">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} className="object-cover w-24 h-24" />
                      <div className="flex flex-col flex-1 p-4">
                        <h3 className="mb-1 font-medium text-gray-800">{item.name}</h3>
                        <p className="text-[#2196F3] font-medium mb-2">₦{item.price.toLocaleString()}</p>
                        <div className="flex mt-auto space-x-2">
                          <button className="text-sm bg-[#2196F3] text-white px-3 py-1 rounded hover:bg-[#1976D2] transition-colors">
                            Add to Cart
                          </button>
                          <button className="px-3 py-1 text-sm text-red-500 transition-colors border border-red-500 rounded hover:bg-red-50">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center">
                  <Heart size={48} className="mx-auto mb-4 text-gray-300" />
                  <h3 className="mb-2 text-lg font-medium text-gray-800">Your wishlist is empty</h3>
                  <p className="mb-4 text-gray-500">Save items you like to your wishlist.</p>
                  <Link to="/shop" className="btn-accent">
                    Browse Products
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Payment Methods Tab */}
          {activeTab === "payment" && (
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-6 text-xl font-semibold text-gray-800">Payment Methods</h2>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-800">Saved Payment Methods</h3>
                  <button className="text-sm text-[#2196F3] px-3 py-1 rounded border border-[#2196F3] hover:bg-[#E3F2FD] transition-colors">
                    Add New
                  </button>
                </div>

                <div className="p-4 mb-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 mr-3 bg-gray-100 rounded">
                        <CreditCard size={24} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Visa ending in 4242</p>
                        <p className="text-sm text-gray-500">Expires 12/2025</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button className="mr-3 text-sm text-gray-500 hover:text-gray-700">Edit</button>
                      <button className="text-sm text-red-500 hover:text-red-700">Remove</button>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 mr-3 bg-gray-100 rounded">
                        <CreditCard size={24} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Mastercard ending in 5678</p>
                        <p className="text-sm text-gray-500">Expires 08/2024</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button className="mr-3 text-sm text-gray-500 hover:text-gray-700">Edit</button>
                      <button className="text-sm text-red-500 hover:text-red-700">Remove</button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-medium text-gray-800">Other Payment Options</h3>

                <div className="space-y-3">
                  <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                    <input
                      type="radio"
                      id="payOnDelivery"
                      name="paymentOption"
                      className="h-4 w-4 text-[#2196F3] focus:ring-[#2196F3]"
                    />
                    <label htmlFor="payOnDelivery" className="block ml-3 text-gray-800">
                      Pay on Delivery (Lagos State Only)
                    </label>
                  </div>

                  <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                    <input
                      type="radio"
                      id="bankTransfer"
                      name="paymentOption"
                      className="h-4 w-4 text-[#2196F3] focus:ring-[#2196F3]"
                    />
                    <label htmlFor="bankTransfer" className="block ml-3 text-gray-800">
                      Bank Transfer
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Addresses Tab */}
          {activeTab === "addresses" && (
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-6 text-xl font-semibold text-gray-800">My Addresses</h2>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-800">Shipping Addresses</h3>
                  <button className="text-sm text-[#2196F3] px-3 py-1 rounded border border-[#2196F3] hover:bg-[#E3F2FD] transition-colors">
                    Add New
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="relative p-4 border border-gray-200 rounded-lg">
                    <div className="absolute top-4 right-4 bg-[#E3F2FD] text-[#2196F3] text-xs px-2 py-0.5 rounded-full">
                      Default
                    </div>
                    <h4 className="mb-2 font-medium text-gray-800">Home</h4>
                    <p className="mb-4 text-gray-600">
                      John Doe
                      <br />
                      123 Main Street
                      <br />
                      Lekki Phase 1<br />
                      Lagos, Nigeria
                      <br />
                      Phone: 08012345678
                    </p>
                    <div className="flex space-x-2">
                      <button className="text-sm text-gray-500 hover:text-gray-700">Edit</button>
                      <button className="text-sm text-red-500 hover:text-red-700">Remove</button>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="mb-2 font-medium text-gray-800">Office</h4>
                    <p className="mb-4 text-gray-600">
                      John Doe
                      <br />
                      45 Business Avenue
                      <br />
                      Victoria Island
                      <br />
                      Lagos, Nigeria
                      <br />
                      Phone: 08087654321
                    </p>
                    <div className="flex space-x-2">
                      <button className="text-sm text-gray-500 hover:text-gray-700">Edit</button>
                      <button className="text-sm text-red-500 hover:text-red-700">Remove</button>
                      <button className="text-sm text-[#2196F3] hover:text-[#1976D2]">Set as Default</button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-800">Billing Addresses</h3>
                  <button className="text-sm text-[#2196F3] px-3 py-1 rounded border border-[#2196F3] hover:bg-[#E3F2FD] transition-colors">
                    Add New
                  </button>
                </div>

                <div className="relative p-4 border border-gray-200 rounded-lg">
                  <div className="absolute top-4 right-4 bg-[#E3F2FD] text-[#2196F3] text-xs px-2 py-0.5 rounded-full">
                    Default
                  </div>
                  <h4 className="mb-2 font-medium text-gray-800">Same as Shipping</h4>
                  <p className="mb-4 text-gray-600">
                    John Doe
                    <br />
                    123 Main Street
                    <br />
                    Lekki Phase 1<br />
                    Lagos, Nigeria
                    <br />
                    Phone: 08012345678
                  </p>
                  <div className="flex space-x-2">
                    <button className="text-sm text-gray-500 hover:text-gray-700">Edit</button>
                    <button className="text-sm text-red-500 hover:text-red-700">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Account Settings Tab */}
          {activeTab === "settings" && (
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-6 text-xl font-semibold text-gray-800">Account Settings</h2>

              <div className="mb-8">
                <h3 className="mb-4 font-medium text-gray-800">Personal Information</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block mb-1 text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        defaultValue="John"
                        className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-1 text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        defaultValue="Doe"
                        className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      defaultValue="john.doe@example.com"
                      className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      defaultValue="08012345678"
                      className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]"
                    />
                  </div>

                  <div>
                    <button type="submit" className="btn-accent">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 font-medium text-gray-800">Change Password</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="currentPassword" className="block mb-1 text-sm font-medium text-gray-700">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        id="currentPassword"
                        className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3] pr-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      >
                        {showCurrentPassword ? (
                          <EyeOff size={18} className="text-gray-500" />
                        ) : (
                          <Eye size={18} className="text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="newPassword" className="block mb-1 text-sm font-medium text-gray-700">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="newPassword"
                        className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3] pr-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={18} className="text-gray-500" />
                        ) : (
                          <Eye size={18} className="text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-700">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="confirmPassword"
                        className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3] pr-10"
                      />
                    </div>
                  </div>

                  <div>
                    <button type="submit" className="btn-accent">
                      Update Password
                    </button>
                  </div>
                </form>
              </div>

              <div>
                <h3 className="mb-4 font-medium text-gray-800">Notification Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-800">Order Updates</h4>
                      <p className="text-sm text-gray-500">Receive notifications about your order status</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2196F3]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-800">Promotions & Offers</h4>
                      <p className="text-sm text-gray-500">Receive notifications about discounts and special offers</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2196F3]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-800">Newsletter</h4>
                      <p className="text-sm text-gray-500">Receive our weekly newsletter with health tips</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2196F3]"></div>
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <button className="btn-accent">Save Preferences</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AccountPage
