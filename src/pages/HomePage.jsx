import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import TestimonialCard from "../components/TestimonialCard";
import NewsletterForm from "../components/NewsletterForm";
import { FaRegSadTear, FaShoppingCart } from "react-icons/fa";
import {
  TruckIcon,
  Pill,
  ShieldCheck,
  Clock,
  Headphones,
  BadgePercent,
} from "lucide-react";
// import goli from "../../public/goli.png"
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import { productsAll } from "../utils";
import Spinners from "../components/reuse/Spinners";
import LegalDisclaimerBanner from "../components/LegalDisclaimerBanner";
import CategoryScroller from "../components/CategorySlider";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const result = await productsAll();
        const productsData = Array.isArray(result)
          ? result
          : result.products || [];
        setProducts(productsData);
      } catch (err) {
        setError(
          err.message.includes("Network Error")
            ? "Network error. Please check your internet connection."
            : "Failed to fetch products. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const categories = [
    {
      name: "Vitamins",
      slug: "vitamins",
      icon: "https://cdn-icons-png.freepik.com/256/5865/5865759.png?ga=GA1.1.642372306.1746340677&semt=ais_hybrid",
    },
    {
      name: "Protein",
      slug: "protein",
      icon: "https://cdn-icons-png.freepik.com/256/833/833102.png?ga=GA1.1.642372306.1746340677&semt=ais_hybrid",
    },
    {
      name: "Omega Fatty Acids",
      slug: "omega-fatty-acids",
      icon: "https://cdn-icons-png.freepik.com/256/16124/16124735.png?ga=GA1.1.642372306.1746340677&semt=ais_hybrid",
    },
    {
      name: "Performance",
      slug: "performance",
      icon: "https://cdn-icons-png.freepik.com/256/14654/14654022.png?ga=GA1.1.642372306.1746340677&semt=ais_hybrid",
    },
    {
      name: "Minerals",
      slug: "minerals",
      icon: "https://cdn-icons-png.freepik.com/256/13015/13015954.png?ga=GA1.1.642372306.1746340677&semt=ais_hybrid",
    },
    {
      name: "Herbs",
      slug: "herbs",
      icon: "https://cdn-icons-png.freepik.com/256/15521/15521695.png?ga=GA1.1.642372306.1746340677&semt=ais_hybrid",
    },
    {
      name: "Supplements",
      slug: "supplements",
      icon: "https://cdn-icons-png.freepik.com/256/6442/6442363.png?ga=GA1.1.642372306.1746340677&semt=ais_hybrid",
    },
    {
      name: "Beauty & Personal Care",
      slug: "beauty-personal-care",
      icon: "https://cdn-icons-png.freepik.com/256/5802/5802200.png?ga=GA1.1.642372306.1746340677&semt=ais_hybrid",
    },
      {
      name: "Sexual Wellbeing",
      slug: "sexual-wellbeing",
      icon: "https://cdn-icons-png.freepik.com/256/18328/18328449.png?ga=GA1.1.642372306.1746340677&semt=ais_hybrid",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Adebayo Johnson",
      location: "Lagos",
      rating: 5,
      comment:
        "MedzionPharma's same-day delivery saved me when I urgently needed medicine for my daughter. Great service! I’ve also been impressed with the range of wellness products available.",
      avatar:
        "https://i.pinimg.com/736x/3b/0e/c6/3b0ec6ed87d312bc4d449f7ed05016ff.jpg",
    },
    {
      id: 2,
      name: "Chioma Okonkwo",
      location: "Abuja",
      rating: 4,
      comment:
        "Ordering supplements from MedzionPharma is quick and stress-free. The whey protein has been a great addition to my fitness routine.",
      avatar:
        "https://i.pinimg.com/736x/a9/25/82/a92582d3de6f1277450d7e9fd8fa27c6.jpg",
    },
    {
      id: 3,
      name: "keemah",
      location: "Port Harcourt",
      rating: 5,
      comment:
        "The prices are competitive and the website is so easy to use. I've made MedzionPharma my go-to pharmacy. Their beauty supplements have really helped my skin.",
      avatar:
        "https://i.pinimg.com/736x/db/e3/98/dbe398c23bdc84b3c69eb819f51e663f.jpg",
    },
  ];

  const features = [
    {
      icon: <TruckIcon className="w-10 h-10 text-[#2196F3]" />,
      title: "Fast Delivery",
      description: "Same-day delivery available in selected areas",
    },
    {
      icon: <Pill className="w-10 h-10 text-[#2196F3]" />,
      title: "Genuine Products",
      description: "All products are sourced from authorized distributors",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#2196F3]" />,
      title: "Secure Payments",
      description: "Multiple secure payment options available",
    },
    {
      icon: <Clock className="w-10 h-10 text-[#2196F3]" />,
      title: "24/7 Support",
      description: "Our pharmacists are available round the clock",
    },
    {
      icon: <Headphones className="w-10 h-10 text-[#2196F3]" />,
      title: "Professional Advice",
      description: "Get expert advice from our certified pharmacists",
    },
    {
      icon: <BadgePercent className="w-10 h-10 text-[#2196F3]" />,
      title: "Regular Discounts",
      description: "Special offers and promotions every week",
    },
  ];

  if (loading) return <Spinners />;
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <FaRegSadTear className="mb-4 text-5xl text-gray-300" />
        <h2 className="mb-2 text-2xl font-semibold text-gray-400">Error</h2>
        <p className="max-w-md mb-6 text-gray-500">{error}</p>
        <Link
          to="/shop"
          className="flex items-center gap-2 px-6 py-2 font-medium text-white transition duration-300 bg-[#2196F3] rounded-lg hover:bg-[#2196F3]"
        >
          <FaShoppingCart />
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
              Shop By Categories
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Browse our wide range of healthcare products categorized for your
              convenience.
            </p>
          </div>

          <CategoryScroller categories={categories} />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-between mb-10 md:flex-row">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
                Featured Products
              </h2>
              <p className="text-gray-600">
                Explore our handpicked selection of high-quality healthcare
                products.
              </p>
            </div>
            <Link to="/shop" className="mt-4 md:mt-0 btn-accent">
              View All Products
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .slice(0, 10)
              .map((product) => (
                <ProductCard
                  key={product._id}
                  product={{
                    ...product,
                    id: product._id,
                    image: product.images[0] || "",
                  }}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
              What Our Customers Say
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Trusted by thousands of customers across Nigeria for their
              healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
              Why Choose MedzionPharma
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We're committed to providing you with the best healthcare
              experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 text-center bg-white border border-gray-100 rounded-lg shadow-sm"
              >
                {feature.icon}
                <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <NewsletterForm />
        </div>
      </section>
      <LegalDisclaimerBanner />
    </div>
  );
};

export default HomePage;
