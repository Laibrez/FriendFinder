import React from "react";

function GoPro() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            PREMIUM
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Upgrade to FriendFinder Pro
          </h1>
          <p className="text-xl text-gray-600">
            Get unlimited connections and exclusive features
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Free Plan */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-4xl font-bold text-gray-800 mb-6">
              $0<span className="text-xl text-gray-500">/month</span>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Browse nearby profiles</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>5 waves per day</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Interest-based matching</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Basic messaging</span>
              </li>
              <li className="flex items-start text-gray-400">
                <span className="mr-2">✗</span>
                <span>See who waved at you</span>
              </li>
              <li className="flex items-start text-gray-400">
                <span className="mr-2">✗</span>
                <span>Advanced filters</span>
              </li>
            </ul>
            <button className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50">
              Current Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-8 shadow-lg text-white relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-4xl font-bold mb-6">
              $4.99<span className="text-xl text-blue-100">/month</span>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>Everything in Free</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">★</span>
                <span><strong>Unlimited waves</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">★</span>
                <span><strong>See who waved at you</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">★</span>
                <span><strong>Advanced filters</strong> (major, year, distance)</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">★</span>
                <span><strong>Priority placement</strong> in search results</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">★</span>
                <span><strong>Profile boost</strong> 2x per week</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100">
              Upgrade Now
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Go Pro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Connect Faster</h3>
              <p className="text-gray-600">
                Send unlimited waves and never miss an opportunity to connect with someone amazing.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👀</div>
              <h3 className="text-xl font-semibold mb-2">Know Who's Interested</h3>
              <p className="text-gray-600">
                See everyone who's waved at you so you can connect with people who are already interested.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Find Perfect Matches</h3>
              <p className="text-gray-600">
                Use advanced filters to find exactly who you're looking for based on major, interests, and more.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">
                Yes! You can cancel your Pro subscription at any time. You'll continue to have Pro features until the end of your billing period.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, debit cards, and PayPal.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Is there a student discount?</h3>
              <p className="text-gray-600">
                Our pricing is already student-friendly at just $4.99/month! We occasionally offer promotional discounts during back-to-school season.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to supercharge your social life?
          </h2>
          <p className="text-xl text-blue-50 mb-6">
            Join thousands of students making unlimited connections with Pro
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 shadow-lg">
            Start Your Pro Trial
          </button>
          <p className="text-sm text-blue-100 mt-4">
            7-day free trial • No credit card required
          </p>
        </div>
      </div>
    </div>
  );
}

export default GoPro;
