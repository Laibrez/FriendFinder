import React, { useEffect } from "react";

function GoogleAuthButton({ onClick, text = "Continue with Google" }) {
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
    if (window.google && window.google.accounts && window.google.accounts.id) {
      console.log("Google prompt triggered");
      window.google.accounts.id.prompt();
    } else {
      console.error("Google library not initialized");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.8055 10.2292C19.8055 9.55639 19.7508 8.87917 19.6344 8.21527H10.2002V12.0052H15.6019C15.3775 13.295 14.6571 14.4346 13.6026 15.1771V17.6946H16.8255C18.7127 15.9358 19.8055 13.3169 19.8055 10.2292Z"
          fill="#4285F4"
        />
        <path
          d="M10.2002 20.1416C12.9508 20.1416 15.2712 19.231 16.8294 17.6946L13.6065 15.1771C12.7096 15.8161 11.5487 16.1763 10.2041 16.1763C7.54165 16.1763 5.28916 14.3998 4.49473 11.9824H1.17871V14.5783C2.77018 17.7414 6.31426 20.1416 10.2002 20.1416Z"
          fill="#34A853"
        />
        <path
          d="M4.49084 11.9824C4.07214 10.6926 4.07214 9.3116 4.49084 8.02182V5.42596H1.17871C-0.186928 8.13886 -0.186928 11.8652 1.17871 14.5783L4.49084 11.9824Z"
          fill="#FBBC04"
        />
        <path
          d="M10.2002 3.96523C11.6215 3.94282 13.0001 4.51166 14.0313 5.54702L16.8879 2.69039C15.1878 1.09622 12.9313 0.214004 10.2002 0.240234C6.31426 0.240234 2.77018 2.64048 1.17871 5.80376L4.49084 8.39962C5.28138 5.97832 7.53776 3.96523 10.2002 3.96523Z"
          fill="#EA4335"
        />
      </svg>
      <span className="font-medium text-gray-700">{text}</span>
    </button>
  );
}

export default GoogleAuthButton;
