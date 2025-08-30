import React from "react";
const articles = [
  {
    title: "New Mango Flavor Launched!",
    date: "Aug 2025",
    img: "/src/assets/mango.jpg",
  },
  {
    title: "Our Juices Now in 50 Stores!",
    date: "July 2025",
    img: "/src/assets/strawberry1.jpg",
  },
];
const News = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-[#003b19] mb-6">Latest News</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">{article.date}</p>
              <h3 className="text-lg font-semibold">{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
