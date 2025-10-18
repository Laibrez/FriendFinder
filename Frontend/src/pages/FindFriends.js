import React from "react";

function FindFriends() {
  const profiles = [
    { name: "Alex", interest: "Study Buddy" },
    { name: "Taylor", interest: "Coffee Chats" },
    { name: "Jordan", interest: "Fitness" },
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Find Friends</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map((p, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="h-24 w-24 bg-blue-100 mx-auto mb-4 rounded-full"></div>
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-500">{p.interest}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              👋 Send Wave
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FindFriends;
