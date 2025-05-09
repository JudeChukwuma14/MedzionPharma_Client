"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Calendar, User, Clock, ChevronRight, Tag } from "lucide-react"

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Hypertension: Causes, Symptoms, and Management",
      excerpt:
        "Hypertension affects millions of Nigerians. Learn about the causes, symptoms, and effective management strategies for this common condition.",
      image: "/placeholder.svg?height=400&width=600",
      date: "May 15, 2023",
      author: "Dr. Adebayo Johnson",
      readTime: "8 min read",
      category: "Health Conditions",
      tags: ["hypertension", "blood pressure", "heart health"],
    },
    {
      id: 2,
      title: "The Importance of Vitamin D: Are You Getting Enough?",
      excerpt:
        "Vitamin D deficiency is common in Nigeria despite our sunny climate. Discover why this vitamin is crucial and how to ensure you're getting enough.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 28, 2023",
      author: "Dr. Sarah Tanko",
      readTime: "6 min read",
      category: "Nutrition",
      tags: ["vitamins", "nutrition", "health tips"],
    },
    {
      id: 3,
      title: "Managing Diabetes Through Diet and Exercise",
      excerpt:
        "Lifestyle modifications play a crucial role in diabetes management. Learn effective dietary changes and exercise routines for better blood sugar control.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 10, 2023",
      author: "Dr. Michael Osei",
      readTime: "10 min read",
      category: "Health Conditions",
      tags: ["diabetes", "diet", "exercise"],
    },
    {
      id: 4,
      title: "Common Skin Conditions in Tropical Climates",
      excerpt:
        "Nigeria's tropical climate can lead to various skin issues. Explore common skin conditions, their causes, and effective treatment options.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 22, 2023",
      author: "Dr. Chioma Okonkwo",
      readTime: "7 min read",
      category: "Skin Care",
      tags: ["skin health", "dermatology", "tropical climate"],
    },
    {
      id: 5,
      title: "Understanding Antibiotics: Uses, Misuses, and Resistance",
      excerpt:
        "Antibiotic resistance is a growing concern globally. Learn about proper antibiotic use and why self-medication can be dangerous.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 5, 2023",
      author: "Dr. Adebayo Johnson",
      readTime: "9 min read",
      category: "Medications",
      tags: ["antibiotics", "medication safety", "drug resistance"],
    },
    {
      id: 6,
      title: "Mental Health Awareness: Breaking the Stigma",
      excerpt:
        "Mental health issues affect millions of Nigerians but are often stigmatized. Discover the importance of mental health awareness and seeking help.",
      image: "/placeholder.svg?height=400&width=600",
      date: "February 18, 2023",
      author: "Dr. Sarah Tanko",
      readTime: "8 min read",
      category: "Mental Health",
      tags: ["mental health", "psychology", "wellness"],
    },
  ]

  // Categories derived from blog posts
  const categories = ["all", ...new Set(blogPosts.map((post) => post.category))]

  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = activeCategory === "all" || post.category === activeCategory

    return matchesSearch && matchesCategory
  })

  // Featured post (first post)
  const featuredPost = blogPosts[0]

  // Recent posts (excluding featured)
  const recentPosts = blogPosts.slice(1, 4)

  return (
    <div className="container-custom py-8 md:py-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Health Blog</h1>
        <p className="text-gray-600 max-w-3xl">
          Stay informed with the latest health tips, medication guides, and wellness advice from our team of healthcare
          professionals.
        </p>
      </div>

      {/* Search and Categories */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2196F3]"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                activeCategory === category ? "bg-[#2196F3] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category === "all" ? "All Topics" : category}
            </button>
          ))}
        </div>
      </div>

      {searchQuery || activeCategory !== "all" ? (
        /* Search Results */
        <div>
          <h2 className="text-xl font-semibold mb-6">
            {filteredPosts.length} {filteredPosts.length === 1 ? "result" : "results"} found
            {activeCategory !== "all" && ` in "${activeCategory}"`}
            {searchQuery && ` for "${searchQuery}"`}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link to={`/blog/${post.id}`} className="block">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <div className="p-5">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <span className="bg-[#E3F2FD] text-[#2196F3] px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" /> {post.readTime}
                    </span>
                  </div>

                  <Link to={`/blog/${post.id}`} className="block">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2 hover:text-[#2196F3] transition-colors">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="text-[#2196F3] text-sm font-medium hover:text-[#1976D2] flex items-center"
                    >
                      Read More <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">We couldn't find any articles matching your search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("all")
                }}
                className="text-[#2196F3] font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Default Blog Layout */
        <div>
          {/* Featured Article */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Featured Article</h2>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="overflow-hidden">
                  <Link to={`/blog/${featuredPost.id}`} className="block">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                </div>

                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <span className="bg-[#E3F2FD] text-[#2196F3] px-2 py-0.5 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" /> {featuredPost.readTime}
                    </span>
                  </div>

                  <Link to={`/blog/${featuredPost.id}`} className="block">
                    <h3 className="font-semibold text-gray-800 text-xl md:text-2xl mb-3 hover:text-[#2196F3] transition-colors">
                      {featuredPost.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-sm text-gray-500">
                      <User size={16} className="mr-1" />
                      <span>{featuredPost.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar size={16} className="mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>

                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="text-[#2196F3] font-medium hover:text-[#1976D2] flex items-center"
                    >
                      Read More <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Articles */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Recent Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link to={`/blog/${post.id}`} className="block">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                  <div className="p-5">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <span className="bg-[#E3F2FD] text-[#2196F3] px-2 py-0.5 rounded-full">{post.category}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" /> {post.readTime}
                      </span>
                    </div>

                    <Link to={`/blog/${post.id}`} className="block">
                      <h3 className="font-semibold text-gray-800 text-lg mb-2 hover:text-[#2196F3] transition-colors">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="text-[#2196F3] text-sm font-medium hover:text-[#1976D2] flex items-center"
                      >
                        Read More <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Articles */}
          <div>
            <h2 className="text-xl font-semibold mb-6">All Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link to={`/blog/${post.id}`} className="block">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                  <div className="p-5">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <span className="bg-[#E3F2FD] text-[#2196F3] px-2 py-0.5 rounded-full">{post.category}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" /> {post.readTime}
                      </span>
                    </div>

                    <Link to={`/blog/${post.id}`} className="block">
                      <h3 className="font-semibold text-gray-800 text-lg mb-2 hover:text-[#2196F3] transition-colors">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="text-[#2196F3] text-sm font-medium hover:text-[#1976D2] flex items-center"
                      >
                        Read More <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Popular Tags */}
      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {[...new Set(blogPosts.flatMap((post) => post.tags))].map((tag, index) => (
            <button
              key={index}
              onClick={() => setSearchQuery(tag)}
              className="flex items-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
            >
              <Tag size={14} className="mr-1" /> {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-12 bg-[#E3F2FD] rounded-lg p-6 md:p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-6">
            Get the latest health tips, medication guides, and wellness advice delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2196F3]"
            />
            <button
              type="submit"
              className="bg-[#2196F3] hover:bg-[#1976D2] text-white font-medium px-6 py-2 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
