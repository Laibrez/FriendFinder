import React from "react";

export default function FeaturesSection() {
  const features = [
    { title: "☕ Coffee Meetups", desc: "Easily plan casual meetups and events." },
    { title: "🤝 Genuine Bonds", desc: "Built for friendships — not dating or swiping endlessly." },
    // Add more features as needed
  ];

  return (
    <section 
      id="features" 
      aria-labelledby="features-heading"
      className="py-20 bg-gray-50"
    >
      <h2 
        id="features-heading"
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
      >
        Why Choose FriendFinder?
      </h2>
      <div 
        role="list"
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6"
      >
        {features.map((feature, index) => (
          <div 
            key={index} 
            role="listitem"
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
