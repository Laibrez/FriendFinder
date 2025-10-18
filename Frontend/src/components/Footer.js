import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center text-gray-600 mt-20">
      <p>© {new Date().getFullYear()} LanFind. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-blue-500">Privacy Policy</a>
        <a href="#" className="hover:text-blue-500">Terms of Service</a>
      </div>
    </footer>
  );
}

