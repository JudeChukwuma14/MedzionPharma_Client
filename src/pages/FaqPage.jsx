"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react"

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openItems, setOpenItems] = useState({})
  const [searchQuery, setSearchQuery] = useState("")

  // Toggle FAQ item
  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // FAQ categories
  const categories = [
    { id: "general", name: "General Questions" },
    { id: "orders", name: "Orders & Shipping" },
    { id: "products", name: "Products & Prescriptions" },
    { id: "payments", name: "Payments & Pricing" },
    { id: "returns", name: "Returns & Refunds" },
    { id: "account", name: "Account & Privacy" },
  ]

  // FAQ data
  const faqData = {
    general: [
      {
        id: "general-1",
        question: "What is MedzionPharma?",
        answer:
          "MedzionPharma is Nigeria's trusted online pharmacy, offering a wide range of medications, health supplements, personal care products, and medical devices. We provide convenient access to quality healthcare products with professional pharmaceutical guidance.",
      },
      {
        id: "general-2",
        question: "Is MedzionPharma a licensed pharmacy?",
        answer:
          "Yes, MedzionPharma is fully licensed and registered with the Pharmacists Council of Nigeria (PCN). All our operations comply with the regulatory requirements for pharmaceutical services in Nigeria.",
      },
      {
        id: "general-3",
        question: "Do you have physical stores?",
        answer:
          "Yes, we have our flagship store located in Lagos. However, we primarily operate as an online pharmacy to provide convenient access to medications and healthcare products across Nigeria.",
      },
      {
        id: "general-4",
        question: "How do I contact customer service?",
        answer:
          "You can reach our customer service team through multiple channels: Phone: 080-1234-5678 (8AM-8PM, Monday to Saturday), Email: support@MedzionPharma.com, or through the Contact Us form on our website. We aim to respond to all inquiries within 24 hours.",
      },
      {
        id: "general-5",
        question: "What are your working hours?",
        answer:
          "Our online platform is available 24/7 for browsing and placing orders. Our customer service team is available from 8AM to 8PM, Monday to Saturday, and 10AM to 4PM on Sundays. Deliveries are made during business hours only.",
      },
    ],
    orders: [
      {
        id: "orders-1",
        question: "How do I place an order?",
        answer:
          "Placing an order on MedzionPharma is simple: Browse or search for the products you need, add them to your cart, proceed to checkout, provide your delivery information, select your payment method, and confirm your order. For prescription medications, you'll need to upload a valid prescription during the checkout process.",
      },
      {
        id: "orders-2",
        question: "How long will it take to receive my order?",
        answer:
          "For orders placed before 12pm, we offer same-day delivery in Lagos State. For other locations in Nigeria, delivery typically takes 1-3 business days, depending on your location. You'll receive updates on your order status via email and SMS.",
      },
      {
        id: "orders-3",
        question: "Can I track my order?",
        answer:
          "Yes, once your order is processed and shipped, you'll receive a tracking number via email and SMS. You can use this number to track the status of your delivery through our website or by contacting our customer service team.",
      },
      {
        id: "orders-4",
        question: "Can I modify or cancel my order after it's placed?",
        answer:
          "You can modify or cancel your order within 1 hour of placing it, provided it hasn't been processed for shipping. To do so, please contact our customer service team immediately. Once an order has been processed or shipped, it cannot be modified or canceled.",
      },
      {
        id: "orders-5",
        question: "Do you deliver nationwide?",
        answer:
          "Yes, we deliver to all 36 states in Nigeria and the Federal Capital Territory. Delivery times and fees may vary based on your location. Same-day delivery is currently available only in Lagos State.",
      },
    ],
    products: [
      {
        id: "products-1",
        question: "How do I know if a product is in stock?",
        answer:
          "Product availability is indicated on each product page. If a product is in stock, you'll see an 'Add to Cart' button. If it's out of stock, it will be clearly marked as 'Out of Stock'. You can also sign up for notifications when out-of-stock items become available again.",
      },
      {
        id: "products-2",
        question: "How do I upload a prescription?",
        answer:
          "During the checkout process for prescription medications, you'll be prompted to upload an image of your prescription. You can upload a clear photo or scan of your prescription in JPG, PNG, or PDF format. Our pharmacists will verify the prescription before processing your order.",
      },
      {
        id: "products-3",
        question: "Are your products genuine?",
        answer:
          "Yes, we guarantee that all products sold on MedzionPharma are 100% genuine. We source our products directly from licensed manufacturers and authorized distributors. We have strict quality control measures in place to ensure the authenticity and quality of all products.",
      },
      {
        id: "products-4",
        question: "Do you sell controlled substances or narcotics?",
        answer:
          "We only dispense controlled medications with a valid prescription from a licensed healthcare provider, in strict compliance with Nigerian pharmaceutical regulations. Some controlled substances may require additional verification steps before we can process your order.",
      },
      {
        id: "products-5",
        question: "Can I get professional advice about medications?",
        answer:
          "Yes, our team of licensed pharmacists is available to provide professional advice about medications, potential drug interactions, and proper usage. You can reach them through our customer service channels or by using the 'Ask a Pharmacist' feature on our website.",
      },
    ],
    payments: [
      {
        id: "payments-1",
        question: "What payment methods do you accept?",
        answer:
          "We accept various payment methods including credit/debit cards (Visa, Mastercard), bank transfers, and Cash on Delivery (available only in Lagos State). All online payments are processed through secure payment gateways to ensure your financial information is protected.",
      },
      {
        id: "payments-2",
        question: "Is Cash on Delivery available everywhere?",
        answer:
          "Cash on Delivery is currently available only in Lagos State. For other locations, we require payment to be made online before shipping your order.",
      },
      {
        id: "payments-3",
        question: "Are your online payments secure?",
        answer:
          "Yes, all online payments on MedzionPharma are processed through secure, PCI-compliant payment gateways. We use industry-standard encryption to protect your financial information. We never store your complete credit card details on our servers.",
      },
      {
        id: "payments-4",
        question: "Do you offer discounts or promotions?",
        answer:
          "Yes, we regularly offer discounts and promotions on various products. You can find our current offers in the 'Promotions' section of our website. We also have a loyalty program that rewards repeat customers with points that can be redeemed for discounts on future purchases.",
      },
      {
        id: "payments-5",
        question: "What are the delivery fees?",
        answer:
          "Delivery fees vary based on your location and order value. For orders above ₦10,000 in Lagos State, delivery is free. For other locations and orders below ₦10,000, delivery fees range from ₦1,000 to ₦3,000, depending on the destination and package size.",
      },
    ],
    returns: [
      {
        id: "returns-1",
        question: "What is your return policy?",
        answer:
          "We accept returns within 7 days of delivery for most products, provided they are in their original, unopened packaging. Due to health and safety regulations, certain products cannot be returned once they have been opened or used. Please refer to our detailed Returns Policy for more information.",
      },
      {
        id: "returns-2",
        question: "How do I return a product?",
        answer:
          "To initiate a return, please contact our customer service team within 7 days of receiving your order. They will guide you through the return process and provide you with a Return Authorization Number (RAN). Please do not send returns without first obtaining a RAN.",
      },
      {
        id: "returns-3",
        question: "How long does it take to process a refund?",
        answer:
          "Once we receive and inspect your return, we will process your refund within 3-5 business days. The refund will be issued to the original payment method used for the purchase. Your bank may take an additional 5-10 business days to post the refund to your account.",
      },
      {
        id: "returns-4",
        question: "Can I return prescription medications?",
        answer:
          "Due to regulatory requirements and for safety reasons, prescription medications can only be returned if there was a dispensing error, the medication is defective or damaged upon receipt, or if the medication was recalled by the manufacturer or regulatory authorities.",
      },
      {
        id: "returns-5",
        question: "Who pays for return shipping?",
        answer:
          "If the return is due to a MedzionPharma error (wrong item shipped, defective product, etc.), we will cover the return shipping costs. In all other cases, the customer is responsible for return shipping costs. For customers in Lagos State, we offer a pickup service for returns at a nominal fee.",
      },
    ],
    account: [
      {
        id: "account-1",
        question: "How do I create an account?",
        answer:
          "To create an account, click on the 'My Account' link at the top of our website and select 'Register'. Fill in your details including your name, email address, and password. You'll receive a verification email to activate your account. You can also create an account during the checkout process.",
      },
      {
        id: "account-2",
        question: "How do I reset my password?",
        answer:
          "If you've forgotten your password, click on the 'My Account' link and select 'Forgot Password'. Enter the email address associated with your account, and we'll send you a link to reset your password. For security reasons, this link will expire after 24 hours.",
      },
      {
        id: "account-3",
        question: "How do you protect my personal information?",
        answer:
          "We take data protection seriously and comply with Nigerian data protection regulations. We use industry-standard security measures to protect your personal information. We never share your personal data with third parties without your consent, except as required by law. Please refer to our Privacy Policy for more details.",
      },
      {
        id: "account-4",
        question: "Can I view my order history?",
        answer:
          "Yes, you can view your complete order history by logging into your account and navigating to the 'Order History' section. Here, you can see details of all your past orders, including order status, items purchased, and delivery information.",
      },
      {
        id: "account-5",
        question: "How do I update my account information?",
        answer:
          "You can update your account information by logging into your account and navigating to the 'Account Settings' section. Here, you can update your personal information, change your password, manage your address book, and update your payment methods.",
      },
    ],
  }

  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? Object.values(faqData)
        .flat()
        .filter(
          (faq) =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
        )
    : faqData[activeCategory]

  return (
    <div className="py-8 container-custom md:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-[#2196F3]">
          Home
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-700">Frequently Asked Questions</span>
      </div>

      <div className="max-w-3xl mx-auto mb-10 text-center">
        <h1 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">Frequently Asked Questions</h1>
        <p className="text-gray-600">
          Find answers to common questions about our products, services, ordering process, and more.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mt-6">
          <input
            type="text"
            placeholder="Search for questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2196F3]"
          />
          <Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={20} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="overflow-hidden bg-white rounded-lg shadow-md">
            <div className="p-4 bg-[#E3F2FD]">
              <h2 className="font-semibold text-gray-800">FAQ Categories</h2>
            </div>
            <nav className="p-4">
              <ul className="space-y-1">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => {
                        setActiveCategory(category.id)
                        setSearchQuery("")
                      }}
                      className={`w-full flex items-center px-4 py-2 rounded-md transition-colors ${
                        activeCategory === category.id && !searchQuery
                          ? "bg-[#E3F2FD] text-[#2196F3]"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 border-t border-gray-200">
              <h3 className="mb-3 font-medium text-gray-800">Need More Help?</h3>
              <p className="mb-4 text-sm text-gray-600">
                Can't find the answer you're looking for? Please contact our customer support team.
              </p>
              <Link to="/contact" className="flex items-center justify-center w-full btn-accent">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="lg:col-span-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            {searchQuery ? (
              <h2 className="mb-6 text-xl font-semibold text-gray-800">
                Search Results: {filteredFaqs.length} {filteredFaqs.length === 1 ? "result" : "results"} found
              </h2>
            ) : (
              <h2 className="mb-6 text-xl font-semibold text-gray-800">
                {categories.find((cat) => cat.id === activeCategory)?.name}
              </h2>
            )}

            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="overflow-hidden border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="flex items-center justify-between w-full p-4 text-left transition-colors bg-gray-50 hover:bg-gray-100"
                    >
                      <span className="font-medium text-gray-800">{faq.question}</span>
                      {openItems[faq.id] ? (
                        <ChevronUp size={20} className="text-gray-500" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-500" />
                      )}
                    </button>

                    {openItems[faq.id] && (
                      <div className="p-4 bg-white">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center">
                <HelpCircle size={48} className="mx-auto mb-4 text-gray-300" />
                <h3 className="mb-2 text-lg font-medium text-gray-800">No results found</h3>
                <p className="mb-4 text-gray-500">
                  We couldn't find any FAQs matching your search. Please try different keywords or contact our support
                  team.
                </p>
                <button onClick={() => setSearchQuery("")} className="text-[#2196F3] font-medium hover:underline">
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Still Have Questions */}
      <div className="mt-12 bg-[#E3F2FD] rounded-lg p-8 text-center">
        <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl">Still Have Questions?</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-600">
          If you couldn't find the answer to your question in our FAQ, our dedicated customer support team is here to
          help you.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/contact" className="btn-accent">
            Contact Us
          </Link>
          <a href="tel:+2348012345678" className="btn-primary">
            Call Us: 080-1234-5678
          </a>
        </div>
      </div>
    </div>
  )
}

export default FaqPage
