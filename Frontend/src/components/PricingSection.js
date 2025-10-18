import React from "react";

export default function PricingSection() {
  return (
    <section 
      id="pricing" 
      aria-labelledby="pricing-heading"
      className="py-20 bg-gray-50 text-center"
    >
      <h2 
        id="pricing-heading"
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
      >
        Go Pro – Unlock Unlimited Waves 🌊
      </h2>
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <div className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          First Week Free
        </div>
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">FriendFinder Pro</h3>
        <p className="text-gray-600 mb-6">Send unlimited waves and get priority visibility.</p>
        <p className="text-4xl font-bold mb-2">
          $2.99<span className="text-lg text-gray-500">/week</span>
        </p>
        <p className="text-sm text-gray-500 mb-6">after free trial</p>
        <button 
          type="button"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all font-semibold"
          aria-label="Start free trial and upgrade to FriendFinder Pro"
        >
          Start Free Trial
        </button>
      </div>
    </section>
  );
}
