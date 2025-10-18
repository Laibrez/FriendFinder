import React, { useEffect } from "react";

export default function LoginButton() {
  useEffect(() => {
    // Load the Google library
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id:
          "8929958857-vt96ieqbtr512i0itq2ukg7aoutp1e2d.apps.googleusercontent.com", // Updated client ID
        callback: handleCredentialResponse,
      });
    };
    document.body.appendChild(script);
  }, []);

  const handleCredentialResponse = (response) => {
    console.log("ID Token:", response.credential);
    // Send the token to your backend for verification and session creation
    // fetch("/api/google-login", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: response.credential }) })
  };

  const handleClick = () => {
    // Show the Google prompt
    window.google.accounts.id.prompt();
  };

  return (
    <button
      onClick={handleClick}
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


