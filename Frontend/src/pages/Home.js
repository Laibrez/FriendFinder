import React from "react";
import AboutSection from "../components/AboutSection";

function About() {
  return (
    <div>
      <AboutSection />
      
      {/* Team Section (Optional) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Authentic Connections</h3>
              <p className="text-gray-600">
                We believe in quality over quantity. Real friendships matter more than follower counts.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">
                Verified students only. We prioritize creating a safe, respectful community for everyone.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
              <p className="text-gray-600">
                Everyone deserves to feel welcome. We celebrate diversity and create space for all voices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
