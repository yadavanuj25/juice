// Feedback.jsx
import { useState } from "react";
import {
  Mail,
  MapPin,
  CheckCircle,
  Phone,
  UserRound,
  PhoneOutgoing,
  MessageCircle,
} from "lucide-react";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.contact.trim()) newErrors.contact = "Contact is required";
    else if (!/^\d{10}$/.test(formData.contact))
      newErrors.contact = "Enter a valid 10-digit number";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:8000/api/feedback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          setFormData({ name: "", email: "", contact: "", message: "" });
        } else {
          console.log(
            ` Failed to submit feedback: ${data.message || "Try again"}`
          );
        }
      } catch (error) {
        console.error("Feedback error:", error);
        console.log(" Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className=" min-h-screen  px-6 py-20 flex flex-col items-center">
        {/* Contact Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full mb-12">
          {/* Email */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center relative border">
            <Mail className="w-12 h-12 mx-auto text-gray-700" />

            <h3 className="text-lg font-semibold mt-4">Email Address</h3>
            <p className="text-gray-500 mt-2">Reach us at</p>
            <p className="text-green-700 font-medium break-all">
              easeesqueezy@gmail.com
            </p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center relative border">
            <Phone className="w-12 h-12 mx-auto text-gray-700" />
            <h3 className="text-lg font-semibold mt-4">WhatsApp</h3>
            <p className="text-green-700 font-medium mt-2">+91 123-456-7890</p>
          </div>

          {/* Farm Location */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center relative border sm:col-span-2 md:col-span-1">
            <MapPin className="w-12 h-12 mx-auto text-gray-700" />

            <h3 className="text-lg font-semibold mt-4">Company Location</h3>
            <p className="text-gray-500 mt-2">601 , South Bopal</p>
            <p className="text-green-700 font-medium">
              Ahmedabad,Gujarat-380058
            </p>
          </div>
        </div>

        <div className="w-full max-w-6xl ">
          <div className="bg-white shadow-xl rounded-2xl p-8 border">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
              Share Your Feedback
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-medium mb-1">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    className={`w-full border rounded-lg px-4 py-2 focus:outline-none  ${
                      errors.name
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-green-300"
                    }`}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                  <UserRound className="absolute right-3 top-3 text-[#003b19] text-lg" />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1">Email</label>
                <div className="relative">
                  <input
                    type="text"
                    name="email"
                    className={`w-full border rounded-lg px-4 py-2 focus:outline-none  ${
                      errors.email
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-green-300"
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  <Mail className="absolute right-3 top-3 text-[#003b19] text-lg" />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block font-medium mb-1">Contact</label>
                <div className="relative">
                  <input
                    type="text"
                    name="contact"
                    className={`w-full border rounded-lg px-4 py-2 focus:outline-none  ${
                      errors.contact
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-green-300"
                    }`}
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                  />
                  <PhoneOutgoing className="absolute right-3 top-3 text-[#003b19] text-lg" />
                  {errors.contact && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contact}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1">Message</label>
                <div className="relative">
                  <textarea
                    name="message"
                    rows="3"
                    className={`w-full border rounded-lg px-4 py-2 focus:outline-none  ${
                      errors.message
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-green-300"
                    }`}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your feedback..."
                  />
                  <MessageCircle className="absolute right-3 top-3 text-[#003b19] text-lg" />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="w-48 bg-[#003b19] text-white font-semibold py-2 rounded-lg shadow-md hover:bg-green-700 transition-all"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
