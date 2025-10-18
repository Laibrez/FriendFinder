import React from "react";
import { Link } from "react-router-dom";

function Connect() {
  const categories = [
    { name: "Study Buddies", path: "study" },
    { name: "Coffee Chats", path: "coffee" },
    { name: "Clubs", path: "clubs" },
    { name: "Fitness", path: "fitness" },
    { name: "Party & Going Out", path: "party" },
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Connect Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((c, index) => (
          <Link
            key={index}
            to={`/connect/${c.path}`}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-700">{c.name}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Connect;
