"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Upload, FileText, CheckCircle, AlertCircle, X, Camera, ImageIcon, Info } from "lucide-react"

const PrescriptionPage = () => {
  const [files, setFiles] = useState([])
  const [dragActive, setDragActive] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    deliveryOption: "standard",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle file input change
  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files)

    // Validate files (only images and PDFs allowed)
    const validFiles = newFiles.filter((file) => file.type.startsWith("image/") || file.type === "application/pdf")

    if (validFiles.length + files.length > 5) {
      alert("You can upload a maximum of 5 files")
      return
    }

    // Add preview URLs for images
    const filesWithPreviews = validFiles.map((file) => ({
      file,
      preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
      name: file.name,
      size: file.size,
      type: file.type,
    }))

    setFiles([...files, ...filesWithPreviews])
  }

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files)

      // Validate files (only images and PDFs allowed)
      const validFiles = newFiles.filter((file) => file.type.startsWith("image/") || file.type === "application/pdf")

      if (validFiles.length + files.length > 5) {
        alert("You can upload a maximum of 5 files")
        return
      }

      // Add preview URLs for images
      const filesWithPreviews = validFiles.map((file) => ({
        file,
        preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
        name: file.name,
        size: file.size,
        type: file.type,
      }))

      setFiles([...files, ...filesWithPreviews])
    }
  }

  // Remove file
  const removeFile = (index) => {
    const newFiles = [...files]

    // Revoke object URL to avoid memory leaks
    if (newFiles[index].preview) {
      URL.revokeObjectURL(newFiles[index].preview)
    }

    newFiles.splice(index, 1)
    setFiles(newFiles)
  }

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " bytes"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    // Required fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Delivery address is required"
    }

    // Check if prescription files are uploaded
    if (files.length === 0) {
      newErrors.files = "Please upload at least one prescription image or PDF"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Clean up file previews
      files.forEach((file) => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview)
        }
      })
    }, 2000)
  }

  return (
    <div className="py-8 container-custom md:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-[#2196F3]">
          Home
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-700">Upload Prescription</span>
      </div>

      {isSubmitted ? (
        <div className="max-w-2xl p-8 mx-auto text-center bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h1 className="mb-4 text-2xl font-bold text-gray-800">Prescription Uploaded Successfully!</h1>
          <p className="mb-6 text-gray-600">
            Thank you for submitting your prescription. Our pharmacists will review it and contact you shortly to
            confirm your order.
          </p>
          <p className="mb-8 text-gray-600">
            You will receive an email confirmation with the details of your submission.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/" className="btn-accent">
              Return to Home
            </Link>
            <Link to="/shop" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="p-6 bg-white rounded-lg shadow-md md:p-8">
              <h1 className="mb-6 text-2xl font-bold text-gray-800">Upload Your Prescription</h1>

              <form onSubmit={handleSubmit}>
                {/* File Upload Section */}
                <div className="mb-8">
                  <h2 className="mb-4 text-lg font-semibold text-gray-800">Prescription Upload</h2>

                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center ${
                      dragActive ? "border-[#2196F3] bg-[#E3F2FD]" : "border-gray-300"
                    } ${errors.files ? "border-red-500" : ""}`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <div className="flex flex-col items-center">
                      <Upload size={40} className="mb-4 text-gray-400" />
                      <p className="mb-2 font-medium text-gray-700">Drag & drop your prescription here</p>
                      <p className="mb-4 text-sm text-gray-500">or click to browse files from your device</p>
                      <input
                        type="file"
                        id="prescription-upload"
                        multiple
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <div className="flex flex-wrap gap-3">
                        <label htmlFor="prescription-upload" className="flex items-center btn-accent">
                          <ImageIcon size={16} className="mr-2" />
                          Upload Images
                        </label>
                        <button
                          type="button"
                          className="flex items-center btn-primary"
                          onClick={() => {
                            // In a real app, this would open the device camera
                            alert("Camera functionality would open here")
                          }}
                        >
                          <Camera size={16} className="mr-2" />
                          Take Photo
                        </button>
                      </div>
                    </div>
                  </div>

                  {errors.files && <p className="mt-2 text-sm text-red-600">{errors.files}</p>}

                  <div className="flex items-start mt-4 text-sm text-gray-500">
                    <Info size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                    <p>
                      Accepted formats: JPG, PNG, PDF. Maximum 5 files. Each file should not exceed 10MB. Please ensure
                      your prescription is clear and all details are visible.
                    </p>
                  </div>

                  {/* Uploaded Files */}
                  {files.length > 0 && (
                    <div className="mt-6">
                      <h3 className="mb-3 font-medium text-gray-800">Uploaded Files</h3>
                      <div className="space-y-3">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center p-3 rounded-lg bg-gray-50">
                            <div className="flex-shrink-0 mr-3">
                              {file.preview ? (
                                <img
                                  src={file.preview || "/placeholder.svg"}
                                  alt={file.name}
                                  className="object-cover w-12 h-12 rounded"
                                />
                              ) : (
                                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded">
                                  <FileText size={24} className="text-gray-500" />
                                </div>
                              )}
                            </div>
                            <div className="flex-grow min-w-0">
                              <p className="font-medium text-gray-800 truncate">{file.name}</p>
                              <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="p-1 ml-2 text-gray-500 hover:text-red-500"
                            >
                              <X size={18} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Personal Information */}
                <div className="mb-8">
                  <h2 className="mb-4 text-lg font-semibold text-gray-800">Personal Information</h2>

                  <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 08012345678"
                      className={`w-full rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="address" className="block mb-1 text-sm font-medium text-gray-700">
                      Delivery Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows="3"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${errors.address ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                    ></textarea>
                    {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                  </div>

                  <div>
                    <label htmlFor="notes" className="block mb-1 text-sm font-medium text-gray-700">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows="3"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any specific instructions or information about your prescription"
                      className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]"
                    ></textarea>
                  </div>
                </div>

                {/* Delivery Options */}
                <div className="mb-8">
                  <h2 className="mb-4 text-lg font-semibold text-gray-800">Delivery Options</h2>

                  <div className="space-y-3">
                    <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                      <input
                        type="radio"
                        id="standard"
                        name="deliveryOption"
                        value="standard"
                        checked={formData.deliveryOption === "standard"}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#2196F3] focus:ring-[#2196F3]"
                      />
                      <label htmlFor="standard" className="block ml-3">
                        <span className="font-medium text-gray-800">Standard Delivery</span>
                        <span className="block text-sm text-gray-500">1-3 business days (₦1,000)</span>
                      </label>
                    </div>

                    <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                      <input
                        type="radio"
                        id="express"
                        name="deliveryOption"
                        value="express"
                        checked={formData.deliveryOption === "express"}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#2196F3] focus:ring-[#2196F3]"
                      />
                      <label htmlFor="express" className="block ml-3">
                        <span className="font-medium text-gray-800">Express Delivery</span>
                        <span className="block text-sm text-gray-500">Same day delivery in Lagos (₦2,000)</span>
                      </label>
                    </div>

                    <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                      <input
                        type="radio"
                        id="pickup"
                        name="deliveryOption"
                        value="pickup"
                        checked={formData.deliveryOption === "pickup"}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#2196F3] focus:ring-[#2196F3]"
                      />
                      <label htmlFor="pickup" className="block ml-3">
                        <span className="font-medium text-gray-800">Store Pickup</span>
                        <span className="block text-sm text-gray-500">Collect from our Lagos store (Free)</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button type="submit" className="flex items-center justify-center btn-accent" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Prescription"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky p-6 bg-white rounded-lg shadow-md top-24">
              <h2 className="mb-4 text-lg font-semibold text-gray-800">How It Works</h2>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#E3F2FD] rounded-full flex items-center justify-center mr-3">
                    <span className="font-medium text-[#2196F3]">1</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-gray-800">Upload Prescription</h3>
                    <p className="text-sm text-gray-600">Upload a clear image or PDF of your valid prescription.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#E3F2FD] rounded-full flex items-center justify-center mr-3">
                    <span className="font-medium text-[#2196F3]">2</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-gray-800">Verification</h3>
                    <p className="text-sm text-gray-600">
                      Our pharmacists will verify your prescription and prepare your medications.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#E3F2FD] rounded-full flex items-center justify-center mr-3">
                    <span className="font-medium text-[#2196F3]">3</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-gray-800">Confirmation</h3>
                    <p className="text-sm text-gray-600">
                      We'll contact you to confirm your order and payment details.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#E3F2FD] rounded-full flex items-center justify-center mr-3">
                    <span className="font-medium text-[#2196F3]">4</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-gray-800">Delivery</h3>
                    <p className="text-sm text-gray-600">
                      Your medications will be delivered to your doorstep in discreet packaging.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 mt-8 border-l-4 border-yellow-400 bg-yellow-50">
                <div className="flex">
                  <AlertCircle className="flex-shrink-0 mr-2 text-yellow-500" size={20} />
                  <div>
                    <h3 className="mb-1 font-medium text-yellow-800">Important Note</h3>
                    <p className="text-sm text-yellow-700">
                      We can only accept prescriptions that are valid, legible, and issued by a licensed healthcare
                      provider. Prescriptions for controlled substances may require additional verification.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-3 font-medium text-gray-800">Need Help?</h3>
                <p className="mb-4 text-sm text-gray-600">
                  If you have any questions or need assistance with uploading your prescription, our customer service
                  team is here to help.
                </p>
                <a href="tel:+2348012345678" className="flex items-center justify-center w-full btn-primary">
                  Call Us: 080-1234-5678
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PrescriptionPage
