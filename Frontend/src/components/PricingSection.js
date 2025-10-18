import React from "react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Go Pro – Unlock Unlimited Waves 🌊</h2>
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">FriendFinder Pro</h3>
        <p className="text-gray-600 mb-6">Send unlimited waves and get priority visibility.</p>
        <p className="text-4xl font-bold mb-6">$2.99<span className="text-lg text-gray-500">/week</span></p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
          Upgrade Now
        </button>
      </div>
    </section>
  );
}
