import React from "react";

export default function LoginButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Sign in with Google"
      className="flex items-center justify-center space-x-3 bg-white border border-gray-300 rounded-lg px-6 py-3 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt=""
        className="w-6 h-6"
        aria-hidden="true"
      />
      <span className="font-medium text-gray-700">Continue with Google</span>
    </button>
  );
}
