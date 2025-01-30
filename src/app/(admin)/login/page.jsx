"use client"

import { useState } from "react";
import "../admin/globals.css"
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useRouter();

 const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "rajAdmin@gmail.com" && password === "adminRaj123") {
      localStorage.setItem("login", JSON.stringify({ isLoggedIn: true, email }));
      navigate.push("/admin");
    } else {
      alert("You are not an admin");
    }
  };

  return ( 
    <div className="flex items-center justify-center min-h-screen bg-primary-main/20 ">
      <div className="bg-primary-main/20 border-primary-main border-2 p-6 rounded-lg shadow-md max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
