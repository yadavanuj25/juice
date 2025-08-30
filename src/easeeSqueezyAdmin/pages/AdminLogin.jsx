import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  // const { setIsAuthenticated } = useAuth();
  const adminToken = localStorage.getItem("adminToken");

  useEffect(() => {
    if (adminToken) {
      navigate("/admin");
    }
  }, [adminToken, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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
      const response = await fetch(
        "https://devshub.easeesqueezy.com/easeesqueezy_backend/public/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        console.log("Admin login successful:", data);
        navigate("/admin");
      } else {
        setErrors({ apiError: data.message || "Login failed" });
      }
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner?.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#003b19] mb-6">
          Admin Sign in
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
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Remember Me
            </label>
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#003b19] text-white py-2 rounded-lg hover:bg-[#014d21] transition"
          >
            Sign in
          </button>

          {/* Create Account */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Create New Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
