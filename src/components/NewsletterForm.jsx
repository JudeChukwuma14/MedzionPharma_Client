"use client"

import { useState } from "react"
import { Mail, ArrowRight, CheckCircle } from "lucide-react"

const NewsletterForm = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    // Reset error if any
    setError("")

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setEmail("")
    }, 500)
  }

  return (
    <div className="bg-[#E3F2FD] py-12 px-4 rounded-lg">
      <div className="max-w-lg mx-auto text-center">
        {!isSubmitted ? (
          <>
            <div className="flex justify-center mb-4">
              <div className="bg-[#2196F3] rounded-full p-3">
                <Mail size={24} className="text-white" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Stay updated with our latest products, health tips, and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                    error ? "ring-2 ring-red-500" : "focus:ring-[#2196F3]"
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm mt-1 text-left">{error}</p>}
              </div>
              <button
                type="submit"
                className="bg-[#2196F3] hover:bg-[#1976D2] text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                Subscribe <ArrowRight size={16} className="ml-1" />
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <CheckCircle size={48} className="text-[#4CAF50] mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Thank You for Subscribing!</h2>
            <p className="text-gray-600">
              You've been added to our newsletter list. Get ready for health tips and exclusive offers!
            </p>
            <button onClick={() => setIsSubmitted(false)} className="mt-6 text-[#2196F3] font-medium flex items-center">
              Subscribe another email
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsletterForm
