import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <div className="w-full border-b py-2 text-sm">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center gap-6 text-[#003b19]  font-semibold">
          <span className="flex items-center gap-2 hover:text-[#059240] cursor-pointer">
            <FaEnvelope /> easeesqueezy@gmail.com
          </span>
          <span className="flex items-center gap-2 hover:text-[#059240] cursor-pointer">
            <FaWhatsapp /> +91 940 960 1399
          </span>
        </div>

        <div className="flex items-center gap-4 mt-2 md:mt-0 text-gray-700">
          <Link
            to="#"
            className="text-[#003b19] hover:text-[#059240] font-semibold text-lg"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="#"
            className="text-[#003b19] hover:text-[#059240] font-semibold text-lg"
          >
            <FaInstagram />
          </Link>
          <Link
            to="#"
            className="text-[#003b19] hover:text-[#059240] font-semibold text-lg"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
}
