import React from "react";

export default function FeaturesSection() {
  const features = [
    { title: "🎮 Shared Interests", desc: "Connect through games, study sessions, or fitness goals." },
    { title: "🏫 Campus Focused", desc: "Find people from your university or nearby schools." },
    { title: "☕ Coffee Meetups", desc: "Easily plan casual meetups and events." },
    { title: "🤝 Genuine Bonds", desc: "Built for friendships — not dating or swiping endlessly." },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose FriendFinder?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
