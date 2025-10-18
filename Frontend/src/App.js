import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import FindFriends from "./pages/FindFriends";
import Connect from "./pages/Connect";
import GoPro from "./pages/GoPro";
import GoogleAuthButton from "./components/GoogleAuthButton";
import "./App.css";

function App() {
  const [user, setUser] = useState(null); // Estado global para el usuario

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar user={user} /> {/* Pasamos usuario al Navbar */}
        <header className="bg-blue-500 text-white py-4 text-center">
          <h1 className="text-2xl font-bold">Welcome to FriendFinder</h1>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/go-pro" element={<GoPro />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login setUser={setUser} />} /> {/* Pasamos setUser */}
            <Route path="/find-friends" element={<FindFriends />} />
            <Route path="/connect/*" element={<Connect />} />
          </Routes>
          <div className="mt-10 flex justify-center">
            <GoogleAuthButton />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

