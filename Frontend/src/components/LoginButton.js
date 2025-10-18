import React from "react";

export default function LoginButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center space-x-3 bg-white border border-gray-300 rounded-lg px-6 py-3 hover:bg-gray-50 transition"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google"
        className="w-6 h-6"
      />
      <span className="font-medium text-gray-700">Continue with Google</span>
    </button>
  );
}
