import React, { useState } from "react";
import * as yup from "yup";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const handleChange = (e) => {
    setEmail(e.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate({ email }, { abortEarly: false });
      setErrors({});
      console.log("ForgotPassword successful:", email);
      setEmail("");
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#003b19] mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              value={email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#003b19] text-white py-2 rounded-lg hover:bg-[#014d21] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
