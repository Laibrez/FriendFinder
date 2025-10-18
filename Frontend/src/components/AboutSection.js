import React from "react";

export default function AboutSection() {
  return (
    <section 
      id="about" 
      aria-labelledby="about-heading"
      className="py-20 px-6 bg-white text-center"
    >
      <h2 
        id="about-heading"
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
      >
        About FriendFinder
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
        FriendFinder is a platform built for genuine connections — designed especially for college students and young professionals who want to meet people with shared goals and passions. 
      </p>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Whether you're looking for a study buddy, a gym partner, or someone to grab coffee with, we make finding real friends simple, fun, and safe.
      </p>
    </section>
  );
}
