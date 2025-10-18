import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-32 px-6">
      <h1 className="text-5xl font-bold mb-6">Meet Your People, Not Just Matches.</h1>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        FriendFinder helps students and young adults form real friendships through shared interests and goals.
      </p>
      <Link
        to="/signup"
        className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100"
      >
        Get Started
      </Link>
    </section>
  );
}
