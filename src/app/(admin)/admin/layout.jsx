"use client";

import React from "react";
import Sidebar from "./_components/SideBar";
import Topbar from "./_components/TopBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        data-new-gr-c-s-check-loaded="14.1218.0"
        data-gr-ext-installed=""
      >
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-y-auto">
            <Topbar />
            <div className="p-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
