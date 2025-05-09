import { Star } from "lucide-react"

const TestimonialCard = ({ testimonial }) => {
  // Generate star rating
  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={i <= testimonial.rating ? "fill-[#FFC107] text-[#FFC107]" : "text-gray-300"}
        />,
      )
    }
    return stars
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex items-center gap-1 mb-3">{renderStars()}</div>
      <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
      <div className="flex items-center">
        <img
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
