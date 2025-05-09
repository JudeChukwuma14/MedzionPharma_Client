import { Link } from "react-router-dom"

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${category.slug}`}
      className="flex flex-col items-center justify-center p-6 text-center card group"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#E3F2FD] flex items-center justify-center mb-4 group-hover:bg-[#BBDEFB] transition-colors overflow-hidden">
        <img
          src={category.icon || "/placeholder.svg"}
          alt={category.name}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-medium text-gray-800 group-hover:text-[#2196F3] transition-colors">{category.name}</h3>
    </Link>
  )
}

export default CategoryCard
