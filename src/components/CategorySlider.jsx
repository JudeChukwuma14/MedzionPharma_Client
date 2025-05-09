"use client"

import { useRef } from "react"
import { Link } from "react-router-dom"

const CategoryScroller = ({ categories }) => {
  const scrollRef = useRef(null)

  // Handle mouse wheel scrolling horizontally
  const handleWheel = (e) => {
    if (scrollRef.current) {
      e.preventDefault()
      scrollRef.current.scrollLeft += e.deltaY
    }
  }

  return (
    <div className="relative w-full overflow-x-auto hide-scrollbar" ref={scrollRef} onWheel={handleWheel}>
      <div className="flex gap-4 pb-4 md:gap-6" style={{ minWidth: "min-content" }}>
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/shop?category=${category.slug}`}
            className="card group flex-shrink-0 flex flex-col items-center justify-center p-6 text-center w-[140px] md:w-[160px]"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#E3F2FD] flex items-center justify-center mb-4 group-hover:bg-[#BBDEFB] transition-colors">
              <img
                src={category.icon || "/placeholder.svg?height=64&width=64"}
                alt={category.name}
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
            </div>
            <h3 className="font-medium text-gray-800 group-hover:text-[#2196F3] transition-colors">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryScroller
