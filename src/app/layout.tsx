"use client";

import { useState } from "react";
import "./globals.css";

import SideNavBar from "@/app/components/sideNavbar";
import Header from "@/app/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSidebarToggle = (isOpen: boolean) => {
    setSidebarOpen(isOpen);
  };

  return (
    <html lang="en">
      <body className={`bg-lavender`}>
        <div className="flex">
          <SideNavBar onToggle={handleSidebarToggle} />
          <div
            className={`flex-1 pl-0.5 transition-all duration-300 ease-in-out ${
              sidebarOpen ? "ml-64" : "ml-16"
            }`}
          >
            <Header />
            <main className="flex-1 p-4 overflow-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
