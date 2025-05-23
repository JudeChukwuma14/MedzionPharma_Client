"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  ChevronLeft,
  CreditCard,
  CheckCircle,
  AlertCircle,
  MapPin,
  Mail,
  User,
} from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  // const navigate = useNavigate();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "NG",
      state: "",
      city: "",
      address: "",
      notes: "",
      paymentMethod: "payOnDelivery",
    },
  });

  // Watch country and state for dependent dropdowns
  const watchCountry = watch("country");
  const watchState = watch("state");

  // Get countries, states and cities
  const countries = Country.getAllCountries();
  const states = State.getStatesOfCountry(watchCountry);
  const cities = City.getCitiesOfState(watchCountry, watchState);

  // Calculate totals
  const subtotal = getCartTotal();
  const deliveryFee = subtotal > 10000 ? 0 : 1000;
  const total = subtotal + deliveryFee;

  // Format cart items for WhatsApp message
  const formatCartItems = () => {
    return cartItems
      .map(
        (item) =>
          `• ${item.name} (${item.quantity} x ₦${(item.discount
            ? (item.price * (100 - item.discount)) / 100
            : item.price
          ).toFixed(2)}) = ₦${(
            (item.discount
              ? (item.price * (100 - item.discount)) / 100
              : item.price) * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");
  };

  // Create WhatsApp message with order details
  const createWhatsAppMessage = (data) => {
    const countryName =
      countries.find((c) => c.isoCode === data.country)?.name || "";
    const stateName = states.find((s) => s.isoCode === data.state)?.name || "";
    const cityName = data.city;

    const message = `
*NEW ORDER FROM MEDZIONPHARMA*
----------------------------------
*Order Reference:* KLI-${Math.floor(100000 + Math.random() * 900000)}

*CUSTOMER INFORMATION:*
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}
City: ${cityName}
State: ${stateName}
Country: ${countryName}
Notes: ${data.notes || "None"}

*ORDER SUMMARY:*
${formatCartItems()}

*Subtotal:* ₦${subtotal.toFixed(2)}
*Delivery Fee:* ${deliveryFee === 0 ? "Free" : `₦${deliveryFee.toFixed(2)}`}
*Total Amount:* ₦${total.toFixed(2)}

*Payment Method:* ${
      data.paymentMethod === "card" ? "Credit/Debit Card" : "Pay Before Delivery"
    }
----------------------------------
Thank you for your order!
`;
    return encodeURIComponent(message);
  };

  // Form submission handler
  const onSubmit = (data) => {
    setIsProcessing(true);

    // Create WhatsApp message
    const message = createWhatsAppMessage(data);
    const whatsappUrl = `https://wa.me/2348176765163?text=${message}`;

    // Show success message and clear cart
    setTimeout(() => {
      setIsProcessing(false);
      setOrderPlaced(true);
      clearCart();

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <div className="py-12 container-custom">
        <div className="max-w-2xl p-8 mx-auto text-center bg-white shadow-md">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-green-100 rounded-full">
              <CheckCircle size={48} className="text-green-600" />
            </div>
          </div>
          <h1 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            Order Placed Successfully!
          </h1>
          <p className="mb-6 text-gray-600">
            Thank you for your order. We've received your order and will begin
            processing it right away. Your order details have been sent to our
            WhatsApp for confirmation.
          </p>
          <div className="p-4 mb-6 bg-gray-50">
            <p className="font-medium text-gray-800">
              Order Reference:{" "}
              <span className="text-[#2196F3]">
                KLI-{Math.floor(100000 + Math.random() * 900000)}
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/" className="btn-accent">
              Return to Home
            </Link>
            <Link to="/shop" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 container-custom">
      <div className="flex items-center mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-[#2196F3]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/cart" className="hover:text-[#2196F3]">
          Cart
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Checkout</span>
      </div>

      <h1 className="mb-8 text-2xl font-bold md:text-3xl">Checkout</h1>

      {cartItems.length === 0 ? (
        <div className="p-6 text-center bg-white shadow-md">
          <div className="flex justify-center mb-4">
            <AlertCircle size={48} className="text-yellow-500" />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            Your cart is empty
          </h2>
          <p className="mb-6 text-gray-600">
            You need to add items to your cart before checking out.
          </p>
          <Link to="/shop" className="btn-accent">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 bg-white shadow-md"
            >
              <h2 className="pb-4 mb-6 text-xl font-semibold border-b">
                Shipping Information
              </h2>

              {/* Personal Information */}
              <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    First Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User size={16} className="text-gray-400" />
                    </div>
                    <input
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      type="text"
                      id="firstName"
                      className={`block w-full  h-[48px] px-4 py-2 mt-1 border border-gray-300 focus:border-[#2196F3] focus:outline-none ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      } shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3] pl-10`}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Last Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User size={16} className="text-gray-400" />
                    </div>
                    <input
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      type="text"
                      id="lastName"
                      className={`block w-full  h-[48px] px-4 py-2 mt-1 border border-gray-300 focus:border-[#2196F3] focus:outline-none ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      } shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3] pl-10`}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail size={16} className="text-gray-400" />
                    </div>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Please enter a valid email address",
                        },
                      })}
                      type="email"
                      id="email"
                      className={`block w-full  h-[48px] px-4 py-2 mt-1 border border-gray-300 focus:border-[#2196F3] focus:outline-none ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3] pl-10`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Phone Number *
                  </label>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{ required: "Phone number is required" }}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        country={"ng"}
                        countryCodeEditable={false}
                        enableSearch={true}
                        inputProps={{
                          name: "phone",
                          id: "phone",
                        }}
                        containerClass="phone-input-container"
                        inputClass={`!w-full !h-[48px] !pl-14 !border !rounded-none !border-gray-300 !py-2 !px-4 focus:!outline-none ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        } shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                        buttonClass={
                          errors.phone ? "phone-select-error" : "phone-select"
                        }
                      />
                    )}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Location Information */}
              <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
                <div>
                  <label
                    htmlFor="country"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Country *
                  </label>
                  <Controller
                    name="country"
                    control={control}
                    rules={{ required: "Country is required" }}
                    render={({ field }) => (
                      <select
                        {...field}
                        id="country"
                        className={`block w-full  h-[48px] px-4 py-2 mt-1 border border-gray-300 focus:border-[#2196F3] focus:ring-[#2196F3] focus:outline-none disabled:bg-gray-100 disabled:text-gray-400${
                          errors.country ? "border-red-500" : "border-gray-300"
                        } shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country.isoCode} value={country.isoCode}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  {errors.country && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.country.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    State/Province *
                  </label>
                  <Controller
                    name="state"
                    control={control}
                    rules={{ required: "State is required" }}
                    render={({ field }) => (
                      <select
                        {...field}
                        id="state"
                        className={`block w-full  h-[48px] px-4 py-2 mt-1 border border-gray-300 focus:border-[#2196F3] focus:ring-[#2196F3] focus:outline-none disabled:bg-gray-100 disabled:text-gray-400 ${
                          errors.state ? "border-red-500" : "border-gray-300"
                        } shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                        disabled={!watchCountry}
                      >
                        <option value="">Select State</option>
                        {states.map((state) => (
                          <option key={state.isoCode} value={state.isoCode}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  {errors.state && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.state.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    City *
                  </label>
                  <Controller
                    name="city"
                    control={control}
                    rules={{ required: "City is required" }}
                    render={({ field }) => (
                      <select
                        {...field}
                        id="city"
                        className={`block w-full  h-[48px] px-4 py-2 mt-1 border border-gray-300 focus:border-[#2196F3] focus:ring-[#2196F3] focus:outline-none disabled:bg-gray-100 disabled:text-gray-400 ${
                          errors.city ? "border-red-500" : "border-gray-300"
                        } shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                        disabled={!watchState}
                      >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city.name} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="address"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Delivery Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MapPin size={16} className="text-gray-400" />
                  </div>
                  <input
                    {...register("address", {
                      required: "Address is required",
                    })}
                    type="text"
                    id="address"
                    placeholder="Street address, apartment, suite, etc."
                    className={`block w-full  h-[48px] px-4 py-2 mt-1 border border-gray-300 focus:border-[#2196F3] focus:outline-none ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    } shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3] pl-10`}
                  />
                </div>
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="notes"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Order Notes (Optional)
                </label>
                <textarea
                  {...register("notes")}
                  id="notes"
                  rows="3"
                  placeholder="Special instructions for delivery or order"
                  className="block w-full h-[150px] resize-none px-4 py-2 mt-1 border border-gray-300 focus:border-[#2196F3] focus:outline-none shadow-sm focus:ring-[#2196F3]"
                ></textarea>
              </div>

              <h2 className="pb-4 mb-6 text-xl font-semibold border-b">
                Payment Method
              </h2>

              <div className="mb-6 space-y-4">
                <div className="flex items-center">
                  <input
                    {...register("paymentMethod")}
                    type="radio"
                    id="card"
                    value="card"
                    className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                  />
                  <label htmlFor="card" className="flex items-center ml-2">
                    <CreditCard size={20} className="mr-2 text-gray-600" />
                    <span className="text-sm md:text-lg">
                      Credit/Debit Card (Pay via WhatsApp)
                    </span>
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    {...register("paymentMethod")}
                    type="radio"
                    id="payOnDelivery"
                    value="payOnDelivery"
                    className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                  />
                  <label htmlFor="payOnDelivery" className="ml-2">
                   Pay Before Delivery
                  </label>
                </div>
              </div>

              <div className="flex justify-between mt-8 ">
                <Link
                  to="/cart"
                  className="flex items-center text-[#2196F3] hover:text-[#1976D2] text-sm md:text-lg"
                >
                  <ChevronLeft size={16} className="mr-1" /> Back to Cart
                </Link>
                <button
                  type="submit"
                  className="flex items-center justify-center text-sm btn-success md:text-lg"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Place Order via WhatsApp"}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky p-6 bg-white shadow-md top-24">
              <h2 className="pb-4 mb-6 text-xl font-semibold border-b">
                Order Summary
              </h2>

              <div className="mb-6 overflow-y-auto max-h-60">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center py-3 border-b"
                  >
                    <div className="flex-shrink-0 w-16 h-16">
                      <img
                        src={item.image || item.images?.[0]}
                        alt={item.name}
                        className="object-cover w-full h-full rounded-md"
                      />
                    </div>
                    <div className="flex-grow ml-4">
                      <h3 className="text-sm font-medium text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-medium text-gray-800">
                        ₦
                        {(
                          (item.discount
                            ? (item.price * (100 - item.discount)) / 100
                            : item.price) * item.quantity
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₦{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">
                    {deliveryFee === 0 ? "Free" : `₦${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between pt-3 font-bold text-gray-800 border-t">
                  <span>Total</span>
                  <span className="text-[#2196F3]">₦{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="p-4 text-sm text-gray-600 bg-gray-50">
                <p className="mb-2">By placing your order, you agree to our:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>
                    <Link
                      to="/terms"
                      className="text-[#2196F3] hover:underline"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-[#2196F3] hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/returns"
                      className="text-[#2196F3] hover:underline"
                    >
                      Returns Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
