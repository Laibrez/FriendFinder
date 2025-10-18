import React from "react";
import PricingSection from "../components/PricingSection";

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

        {/* Pricing Section */}
        <PricingSection />

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
