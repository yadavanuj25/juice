import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-green-100 flex flex-col items-center justify-center min-h-screen text-center px-4">
      <img
        src="/userImages/404.png"
        alt="404 Not Found"
        className="h-80 md:h-96 object-contain"
      />
      <h1 className="text-4xl font-bold text-gray-800 mt-6">404</h1>
      <p className="text-lg text-gray-600 mt-2">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
