import React, { useState } from "react";
import * as yup from "yup";
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      console.log("Form Submitted:", formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-[#003b19] mb-6">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              type="text"
              name="message"
              placeholder="Your Message"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.message}
              onChange={handleChange}
              rows="2"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <button className="bg-[#003b19] text-white px-6 py-3 rounded-md hover:bg-[#014d21]">
            Send Message
          </button>
        </form>
        <div className="my-5">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            className="w-full h-64 rounded-lg border-0 "
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
