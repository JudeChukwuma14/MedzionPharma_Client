"use client";

import { Link } from "react-router-dom";
import { ChevronRight, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#E3F2FD] py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Have questions or need assistance? Our team is here to help you
              with any inquiries about our products or services.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="py-4 container-custom">
        <div className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-[#2196F3]">
            Home
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-gray-700">Contact Us</span>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 text-center rounded-lg bg-gray-50">
              <div className="bg-[#E3F2FD] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-[#2196F3]" size={24} />
              </div>
              <h3 className="mb-2 font-semibold text-gray-800">Phone</h3>
              <p className="mb-2 text-gray-600">Customer Support</p>
              <a
                href="tel:+2348142874556"
                className="text-[#2196F3] font-medium"
              >
                +2348142874556
              </a>
            </div>

            <div className="p-6 text-center rounded-lg bg-gray-50">
              <div className="bg-[#E3F2FD] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-[#2196F3]" size={24} />
              </div>
              <h3 className="mb-2 font-semibold text-gray-800">Email</h3>
              <p className="mb-2 text-gray-600">Send us an email</p>
              <a
                href="mailto: medzionpharmaltd@gmail.com"
                className="text-[#2196F3] font-medium"
              >
                medzionpharmaltd@gmail.com
              </a>
            </div>

            <div className="p-6 text-center rounded-lg bg-gray-50">
              <div className="bg-[#E3F2FD] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-[#2196F3]" size={24} />
              </div>
              <h3 className="mb-2 font-semibold text-gray-800">Location</h3>
              <p className="mb-2 text-gray-600">Visit our store</p>
              <p className="text-[#2196F3] font-medium">
                Ground Floor, Sufficient Grace Build, Fola Agoro St, Akoka,
                Yaba, Lagos. Nigeria.
              </p>
            </div>

            <div className="p-6 text-center rounded-lg bg-gray-50">
              <div className="bg-[#E3F2FD] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-[#2196F3]" size={24} />
              </div>
              <h3 className="mb-2 font-semibold text-gray-800">
                Working Hours
              </h3>
              <p className="mb-2 text-gray-600">Mon - Sat: 8AM - 8PM</p>
              <p className="text-gray-600">Sunday: 10AM - 4PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="p-6 bg-white rounded-lg shadow-md md:p-8">
              <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="py-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                    <Send className="text-green-600" size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    Message Sent Successfully!
                  </h3>
                  <p className="mb-6 text-gray-600">
                    Thank you for contacting us. We've received your message and
                    will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-accent"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-1 text-sm font-medium text-gray-700"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full rounded-lg border ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-1 text-sm font-medium text-gray-700"
                      >
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-lg border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-1 text-sm font-medium text-gray-700"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block mb-1 text-sm font-medium text-gray-700"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full rounded-lg border ${
                          errors.subject ? "border-red-500" : "border-gray-300"
                        } shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full btn-accent md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="bg-gray-200 h-96">
                {/* Replace with actual map */}
                <div className="flex items-center justify-center w-full h-full overflow-hidden bg-gray-100">
               
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9587519794554!2d3.3783667731174973!3d6.526893923127771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d00645c61a5%3A0x6bbe5394382ad217!2sFola%20Agoro%20St%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1746613189883!5m2!1sen!2sng"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-semibold text-gray-800">
                  MedzionPharma Headquarters
                </h3>
                <p className="mb-4 text-gray-600">
                  Our main office and flagship store is located in the heart of
                  Lagos. We're easily accessible by public transportation and
                  have ample parking space for customers.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2196F3] font-medium hover:underline"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find quick answers to common questions about our services,
              delivery, and more.
            </p>
          </div>

          <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto md:grid-cols-2">
            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-2 font-semibold text-gray-800">
                What are your delivery times?
              </h3>
              <p className="text-gray-600">
                For orders placed before 12pm, we offer same-day delivery in
                Lagos State. For other locations, delivery typically takes 1-3
                business days.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-2 font-semibold text-gray-800">
                Do you offer Cash on Delivery?
              </h3>
              <p className="text-gray-600">
                Yes, Cash on Delivery is available for customers in Lagos State
                only. Other payment methods include credit/debit cards and bank
                transfers.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-2 font-semibold text-gray-800">
                How can I track my order?
              </h3>
              <p className="text-gray-600">
                Once your order is shipped, you'll receive a tracking number via
                email and SMS that you can use to track your delivery status.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-2 font-semibold text-gray-800">
                What is your return policy?
              </h3>
              <p className="text-gray-600">
                We accept returns within 7 days of delivery for most products in
                their original, unopened packaging. Please see our Returns
                Policy for more details.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/faq" className="btn-accent">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
