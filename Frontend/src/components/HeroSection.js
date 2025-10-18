import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section 
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-32 px-6"
      aria-labelledby="hero-heading"
    >
      <h1 
        id="hero-heading"
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
      >
        Meet Your People, Not Just Matches.
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
        FriendFinder helps students and young adults form real friendships through shared interests and goals.
      </p>
      <Link
        to="/signup"
        className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 transition-all"
        aria-label="Get started with FriendFinder"
      >
        Get Started
      </Link>
    </section>
  );
}
