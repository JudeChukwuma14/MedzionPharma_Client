import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { FaTiktok} from "react-icons/fa"
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = "medzionpharmaltd@gmail.com";
  const Phonenumber = "+2348142874556";
  return (
    <footer className="pt-12 pb-6 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex flex-col ">
              <span className="text-2xl font-bold text-[#2196F3]">
                Medzion<span className="text-[#87CEEB]">Pharma</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-600">
              Your trusted online pharmacy for quality medications and
              healthcare products.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#2196F3]">
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/medzion_pharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#2196F3]"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@medzionpharmltd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#2196F3]"
              >
                <FaTiktok size={20} /> 
              </a>
              <a href="#" className="text-gray-500 hover:text-[#2196F3]">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-[#2196F3]">
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/prescription"
                  className="text-gray-600 hover:text-[#2196F3]"
                >
                  Upload Prescription
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-[#2196F3]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-[#2196F3]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-[#2196F3]">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-[#2196F3]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-[#2196F3]"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-[#2196F3]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-gray-600 hover:text-[#2196F3]"
                >
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="text-gray-600 hover:text-[#2196F3]"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-[#2196F3] mt-1" />
                <a href={`tel:${Phonenumber}`}>
                  <span className="text-gray-600">+2348142874556</span>
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-[#2196F3] mt-1" />
                <a href={`mailto:${email}`}>
                  {" "}
                  <span className="text-gray-600">
                    medzionpharmaltd@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={30} className="mr-2 text-[#2196F3] mt-1" />
                <span className="text-gray-600 text-[0.8rem]">
                  Ground Floor, Sufficient Grace Build, Fola Agoro St, Akoka,
                  Yaba, Lagos. Nigeria.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-10 border-t border-gray-200">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-gray-600 md:mb-0">
              &copy; {currentYear} Medzionpharma. All rights reserved. PCN
              Registered.
            </p>
            <div className="flex items-center space-x-4">
              <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_FrTaaaGEk9eULQpb355SxtAFizG5jleBqp_1q8j2dgMxqfHT"  alt="Visa" className="h-6" />
              <img
                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/homepage/Home/mc-logo-52.svg"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Paystack.png"
                alt="Paystack"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
