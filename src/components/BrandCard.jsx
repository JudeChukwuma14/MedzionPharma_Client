import { Link } from "react-router-dom";

const BrandCard = ({ brandName }) => {
  // Ensure brandName.name exists
  if (!brandName?.name) {
    console.warn("BrandCard: Missing brandName.name", brandName);
    return null;
  }

  const encodedBrandName = encodeURIComponent(brandName.name);
  const linkTo = `/shop?brand=${encodedBrandName}`;

  return (
    <Link
      to={linkTo}
      className="flex flex-col items-center justify-center p-6 text-center card group"
      aria-label={`View products by ${brandName.name}`}
    >
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#E3F2FD] flex items-center justify-center mb-4 group-hover:bg-[#BBDEFB] transition-colors overflow-hidden">
        <img
          src={brandName.icon || "/placeholder.svg"}
          alt={brandName.name}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-medium text-gray-800 group-hover:text-[#2196F3] transition-colors">
        {brandName.name}
      </h3>
    </Link>
  );
};

export default BrandCard;
