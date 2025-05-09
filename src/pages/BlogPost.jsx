"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Calendar, User, Clock, ChevronLeft, Facebook, Twitter, Linkedin, Copy, CheckCircle, Tag } from "lucide-react"

const BlogPost = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [copied, setCopied] = useState(false)

  // Sample blog posts data
  const blogPosts = [
    {
      id: "1",
      title: "Understanding Hypertension: Causes, Symptoms, and Management",
      content: `
        <p>Hypertension, commonly known as high blood pressure, is a prevalent health condition affecting millions of Nigerians. It's often called the "silent killer" because it typically has no symptoms but can lead to serious health complications if left untreated.</p>
        
        <h2>What is Hypertension?</h2>
        <p>Blood pressure is the force exerted by blood against the walls of your arteries as your heart pumps it around your body. Hypertension occurs when this pressure is consistently too high. A normal blood pressure reading is typically around 120/80 mmHg. Hypertension is generally defined as blood pressure of 130/80 mmHg or higher.</p>
        
        <h2>Causes and Risk Factors</h2>
        <p>While the exact cause of hypertension is often unknown, several factors can increase your risk:</p>
        <ul>
          <li>Age: The risk increases as you get older</li>
          <li>Family history: Hypertension tends to run in families</li>
          <li>Obesity: Being overweight or obese significantly increases your risk</li>
          <li>Sedentary lifestyle: Lack of physical activity</li>
          <li>Diet: High sodium (salt) intake, low potassium intake, excessive alcohol consumption</li>
          <li>Tobacco use: Smoking or chewing tobacco</li>
          <li>Stress: Chronic stress may contribute to hypertension</li>
          <li>Certain chronic conditions: Kidney disease, diabetes, and sleep apnea can increase risk</li>
        </ul>
        
        <h2>Symptoms to Watch For</h2>
        <p>Most people with hypertension don't experience any symptoms, which is why regular blood pressure checks are important. However, extremely high blood pressure may cause:</p>
        <ul>
          <li>Severe headaches</li>
          <li>Chest pain</li>
          <li>Difficulty breathing</li>
          <li>Irregular heartbeat</li>
          <li>Blood in the urine</li>
          <li>Vision problems</li>
        </ul>
        <p>If you experience these symptoms, seek medical attention immediately as they could indicate a hypertensive crisis, which is a medical emergency.</p>
        
        <h2>Management and Treatment</h2>
        <p>Hypertension is a chronic condition that usually requires lifelong management. The good news is that with proper treatment and lifestyle changes, it can be controlled effectively.</p>
        
        <h3>Lifestyle Modifications</h3>
        <ul>
          <li><strong>Healthy diet:</strong> Follow the DASH (Dietary Approaches to Stop Hypertension) diet, which emphasizes fruits, vegetables, whole grains, lean proteins, and low-fat dairy products while limiting sodium, saturated fats, and added sugars.</li>
          <li><strong>Regular physical activity:</strong> Aim for at least 150 minutes of moderate-intensity exercise per week.</li>
          <li><strong>Maintain a healthy weight:</strong> Losing even a small amount of weight if you're overweight can help reduce blood pressure.</li>
          <li><strong>Limit alcohol consumption:</strong> Men should have no more than two drinks per day, and women no more than one.</li>
          <li><strong>Quit smoking:</strong> Tobacco use increases blood pressure and risk of heart disease.</li>
          <li><strong>Manage stress:</strong> Practice relaxation techniques such as deep breathing, meditation, or yoga.</li>
        </ul>
        
        <h3>Medications</h3>
        <p>If lifestyle changes alone aren't enough to control your blood pressure, your doctor may prescribe medications. Common types include:</p>
        <ul>
          <li>Diuretics</li>
          <li>ACE inhibitors</li>
          <li>Angiotensin II receptor blockers (ARBs)</li>
          <li>Calcium channel blockers</li>
          <li>Beta-blockers</li>
        </ul>
        <p>It's important to take your medications as prescribed, even if you feel well. Never stop taking your medication without consulting your healthcare provider.</p>
        
        <h2>Monitoring Your Blood Pressure</h2>
        <p>Regular monitoring is essential for managing hypertension. Your doctor may recommend:</p>
        <ul>
          <li>Regular check-ups to monitor your blood pressure</li>
          <li>Home blood pressure monitoring</li>
          <li>Keeping a blood pressure journal</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Hypertension is a common but serious condition that requires proper management. By understanding the causes, recognizing potential symptoms, and following a treatment plan that includes lifestyle modifications and possibly medications, you can effectively control your blood pressure and reduce your risk of serious health complications.</p>
        
        <p>Remember, early detection and consistent management are key to living well with hypertension. If you haven't had your blood pressure checked recently, schedule an appointment with your healthcare provider today.</p>
      `,
      excerpt:
        "Hypertension affects millions of Nigerians. Learn about the causes, symptoms, and effective management strategies for this common condition.",
      image: "/placeholder.svg?height=800&width=1200",
      date: "May 15, 2023",
      author: "Dr. Adebayo Johnson",
      authorTitle: "Chief Pharmacist, MedzionPharma",
      authorImage: "/placeholder.svg?height=100&width=100",
      readTime: "8 min read",
      category: "Health Conditions",
      tags: ["hypertension", "blood pressure", "heart health"],
    },
    {
      id: "2",
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
      id: "3",
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
      id: "4",
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
  ]

  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find((post) => post.id === id)
    setPost(currentPost)

    // Find related posts (same category or shared tags)
    if (currentPost) {
      const related = blogPosts
        .filter((p) => p.id !== id) // Exclude current post
        .filter((p) => p.category === currentPost.category || p.tags.some((tag) => currentPost.tags.includes(tag)))
        .slice(0, 3) // Limit to 3 related posts

      setRelatedPosts(related)
    }

    // Scroll to top when post changes
    window.scrollTo(0, 0)
  }, [id])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!post) {
    return (
      <div className="container-custom py-12">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Article not found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="btn-accent">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container-custom py-8 md:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-[#2196F3]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/blog" className="hover:text-[#2196F3]">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700 truncate max-w-xs">{post.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Featured Image */}
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 md:h-96 object-cover" />

            {/* Article Header */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-3">
                <span className="bg-[#E3F2FD] text-[#2196F3] px-2 py-0.5 rounded-full">{post.category}</span>
                <span className="flex items-center">
                  <Calendar size={16} className="mr-1" /> {post.date}
                </span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" /> {post.readTime}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>

              {/* Author Info */}
              <div className="flex items-center mb-6">
                <img
                  src={post.authorImage || "/placeholder.svg?height=100&width=100"}
                  alt={post.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{post.author}</h3>
                  <p className="text-sm text-gray-500">{post.authorTitle || "Healthcare Professional"}</p>
                </div>
              </div>

              {/* Social Share */}
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-sm text-gray-500">Share:</span>
                <button className="p-2 bg-[#E3F2FD] text-[#2196F3] rounded-full hover:bg-[#BBDEFB] transition-colors">
                  <Facebook size={16} />
                </button>
                <button className="p-2 bg-[#E3F2FD] text-[#2196F3] rounded-full hover:bg-[#BBDEFB] transition-colors">
                  <Twitter size={16} />
                </button>
                <button className="p-2 bg-[#E3F2FD] text-[#2196F3] rounded-full hover:bg-[#BBDEFB] transition-colors">
                  <Linkedin size={16} />
                </button>
                <button
                  className="p-2 bg-[#E3F2FD] text-[#2196F3] rounded-full hover:bg-[#BBDEFB] transition-colors relative"
                  onClick={handleCopyLink}
                >
                  {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                  {copied && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                      Link copied!
                    </span>
                  )}
                </button>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-gray-700 font-medium">Tags:</span>
                  {post.tags.map((tag, index) => (
                    <Link
                      key={index}
                      to={`/blog?tag=${tag}`}
                      className="flex items-center px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
                    >
                      <Tag size={14} className="mr-1" /> {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Back to Blog */}
          <div className="mt-6">
            <Link to="/blog" className="flex items-center text-[#2196F3] hover:text-[#1976D2] font-medium">
              <ChevronLeft size={18} className="mr-1" /> Back to Blog
            </Link>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-6">Related Articles</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Link to={`/blog/${post.id}`} className="block">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                    <div className="p-4">
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <span className="bg-[#E3F2FD] text-[#2196F3] px-2 py-0.5 rounded-full">{post.category}</span>
                      </div>

                      <Link to={`/blog/${post.id}`} className="block">
                        <h3 className="font-semibold text-gray-800 mb-2 hover:text-[#2196F3] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center">
                          <User size={14} className="mr-1" /> {post.author}
                        </span>
                        <span className="flex items-center">
                          <Clock size={14} className="mr-1" /> {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Author Bio */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">About the Author</h3>
            <div className="flex items-center mb-4">
              <img
                src={post.authorImage || "/placeholder.svg?height=100&width=100"}
                alt={post.author}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="font-medium text-gray-800">{post.author}</h4>
                <p className="text-sm text-gray-500">{post.authorTitle || "Healthcare Professional"}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              {post.authorBio ||
                `${post.author} is a healthcare professional at MedzionPharma with expertise in pharmaceutical care and patient education. They are passionate about sharing health knowledge to improve public health awareness.`}
            </p>
          </div>

          {/* Popular Articles */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Popular Articles</h3>
            <div className="space-y-4">
              {blogPosts.slice(0, 4).map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="flex items-start group">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-[#2196F3] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {[...new Set(blogPosts.map((post) => post.category))].map((category, index) => (
                <li key={index}>
                  <Link
                    to={`/blog?category=${category}`}
                    className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-gray-700">{category}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                      {blogPosts.filter((post) => post.category === category).length}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-[#E3F2FD] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get the latest health tips and articles delivered straight to your inbox.
            </p>
            <form>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-[#2196F3]"
              />
              <button
                type="submit"
                className="w-full bg-[#2196F3] hover:bg-[#1976D2] text-white font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
