"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

export default function Topbar() {
  
    const router = useRouter();
  return (
    <div className="flex items-center justify-between h-16 bg-primary-main ">
      <div className="flex items-center px-4">
      </div>
      <div className="flex items-center pr-4">
        <button
            onClick={() => {
              localStorage.removeItem("login"); // Logout
              router.push("/login");
            }}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
      
      </div>
    </div>
  )
}
